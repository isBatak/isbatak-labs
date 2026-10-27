import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs"
import { createRequire } from "node:module"
import { dirname, extname, join, relative } from "node:path"
import MagicString from "magic-string"
import { parseSync } from "oxc-parser"

const skippedDirs = new Set(["node_modules", "dist", "styled-system", ".cache", ".next", ".studio", ".git"])

function sourceFiles(dir, out = []) {
  let entries = []
  try {
    entries = readdirSync(dir)
  } catch {
    return out
  }
  for (const name of entries) {
    if (skippedDirs.has(name) || name.startsWith(".")) continue
    const path = join(dir, name)
    const stats = statSync(path)
    if (stats.isDirectory()) sourceFiles(path, out)
    else if ([".ts", ".tsx", ".mts"].includes(extname(name)) && !name.endsWith(".d.ts")) out.push(path)
  }
  return out
}

function designSystemSources(designSystem, configPath) {
  try {
    const root = dirname(createRequire(configPath).resolve(`${designSystem}/package.json`))
    return join(root, "src")
  } catch {
    return undefined
  }
}

const keyName = (node) => (node.type === "Identifier" ? node.name : typeof node.value === "string" ? node.value : null)

const findProperty = (object, key) =>
  object.properties.find(
    (property) => property.type === "Property" && !property.computed && keyName(property.key) === key,
  )

function walk(node, visit) {
  if (!node || typeof node !== "object") return
  if (Array.isArray(node)) {
    for (const child of node) walk(child, visit)
    return
  }
  if (typeof node.type === "string") visit(node)
  for (const value of Object.values(node)) if (value && typeof value === "object") walk(value, visit)
}

function definitionCalls(program) {
  const calls = []
  walk(program, (node) => {
    if (node.type !== "CallExpression") return
    const argument = node.arguments[0]
    if (argument?.type !== "ObjectExpression") return
    const { callee } = node
    if (callee.type === "Identifier") calls.push({ kind: callee.name, category: undefined, object: argument })
    if (callee.type === "MemberExpression" && callee.object.type === "Identifier" && !callee.computed) {
      calls.push({ kind: callee.object.name, category: callee.property.name, object: argument })
    }
  })
  return calls
}

const isString = (node) =>
  (node.type === "Literal" && typeof node.value === "string") ||
  (node.type === "TemplateLiteral" && node.expressions.length === 0)

const quoteKey = (key) => (/^[A-Za-z_$][\w$]*$/.test(key) ? key : JSON.stringify(key))

const literal = (path, value) =>
  path.length ? `{ ${quoteKey(path[0])}: ${literal(path.slice(1), value)} }` : JSON.stringify(value)

function lineIndent(code, position) {
  const lineStart = code.lastIndexOf("\n", position - 1) + 1
  return code.slice(lineStart).match(/^\s*/)[0]
}

function insertProperty(code, magic, object, path, value) {
  const [key, ...rest] = path
  insertText(code, magic, object, `${quoteKey(key)}: ${literal(rest, value)}`)
}

function insertText(code, magic, object, text) {
  const last = object.properties.at(-1)
  if (!last) {
    magic.appendLeft(object.start + 1, ` ${text} `)
    return
  }
  if (!code.slice(object.start, object.end).includes("\n")) {
    magic.appendLeft(last.end, `, ${text}`)
    return
  }
  const indent = lineIndent(code, last.start)
  const trailingComma = code.slice(last.end, object.end).match(/^\s*,/)
  if (trailingComma) magic.appendLeft(last.end + trailingComma[0].length, `\n${indent}${text},`)
  else magic.appendLeft(last.end, `,\n${indent}${text}`)
}

function locate(object, path) {
  let node = object
  for (let index = 0; index < path.length; index++) {
    const property = findProperty(node, path[index])
    if (!property) return { missing: path.slice(index), parent: node }
    if (index === path.length - 1) return { property }
    if (property.value.type !== "ObjectExpression") return { blocked: property.value, rest: path.slice(index + 1) }
    node = property.value
  }
  return {}
}

const numberValue = (node) => {
  if (node.type === "Literal" && typeof node.value === "number") return node.value
  if (node.type === "UnaryExpression" && node.operator === "-") {
    const value = numberValue(node.argument)
    return value === undefined ? undefined : -value
  }
  return undefined
}

function presetCall(program, packageName) {
  const locals = new Set()
  for (const node of program.body) {
    if (node.type !== "ImportDeclaration" || node.source.value !== packageName) continue
    for (const specifier of node.specifiers) {
      if (specifier.type === "ImportSpecifier") locals.add(specifier.local.name)
    }
  }
  let found
  walk(program, (node) => {
    if (found || node.type !== "CallExpression" || node.callee.type !== "Identifier") return
    if (!locals.has(node.callee.name)) return
    const [argument] = node.arguments
    if (!argument || argument.type === "ObjectExpression") found = node
  })
  return found
}

function literalOptions(object, path = [], out = {}) {
  for (const property of object.properties) {
    if (property.type !== "Property" || property.computed) continue
    const key = keyName(property.key)
    if (key === null) continue
    if (property.value.type === "ObjectExpression") literalOptions(property.value, [...path, key], out)
    const value = numberValue(property.value)
    if (value !== undefined) out[[...path, key].join(".")] = value
  }
  return out
}

function nestOptions(options) {
  const out = {}
  for (const [path, value] of Object.entries(options)) {
    const segments = path.split(".")
    let node = out
    for (const segment of segments.slice(0, -1)) node = node[segment] ??= {}
    node[segments.at(-1)] = value
  }
  return out
}

const objectText = (value) =>
  typeof value === "object"
    ? `{ ${Object.entries(value)
        .map(([key, child]) => `${quoteKey(key)}: ${objectText(child)}`)
        .join(", ")} }`
    : JSON.stringify(value)

function writeOptions(code, magic, object, values, dryRun) {
  for (const [key, value] of Object.entries(values)) {
    const property = findProperty(object, key)
    if (!property) {
      if (!dryRun) insertText(code, magic, object, `${quoteKey(key)}: ${objectText(value)}`)
      continue
    }
    if (typeof value === "object") {
      if (property.value.type !== "ObjectExpression") return false
      if (!writeOptions(code, magic, property.value, value, dryRun)) return false
      continue
    }
    if (numberValue(property.value) === undefined) return false
    if (!dryRun) magic.overwrite(property.value.start, property.value.end, JSON.stringify(value))
  }
  return true
}

function applyPresetEdit(file, edit) {
  const call = presetCall(file.program, edit.package)
  if (!call) return undefined
  const values = nestOptions(edit.options)
  const [argument] = call.arguments
  if (!argument) {
    file.magic.appendLeft(call.end - 1, objectText(values))
    return { ok: true }
  }
  if (!writeOptions(file.code, file.magic, argument, values, true)) return { ok: false, reason: "computed value" }
  writeOptions(file.code, file.magic, argument, values, false)
  return { ok: true }
}

function sourcePaths({ projectRoot, designSystem, configPath }) {
  const roots = [projectRoot, designSystemSources(designSystem, configPath)].filter(Boolean)
  return [...new Set(roots.flatMap((root) => sourceFiles(root)))]
}

export function readPresetOptions({ packageName, ...options }) {
  for (const path of sourcePaths(options)) {
    const code = readFileSync(path, "utf8")
    if (!code.includes(packageName)) continue
    const { program } = parseSync(path, code, { sourceType: "module" })
    const call = presetCall(program, packageName)
    if (!call) continue
    const [argument] = call.arguments
    return { file: path, options: argument ? literalOptions(argument) : {} }
  }
  return undefined
}

function applyEdit(file, edit) {
  if (edit.type === "preset") return applyPresetEdit(file, edit)
  const { code, calls, magic } = file
  const candidates = calls.filter((call) => {
    if (edit.type === "recipe") {
      if (call.kind !== "defineRecipe" && call.kind !== "defineSlotRecipe") return false
      const className = findProperty(call.object, "className")
      return className && isString(className.value) && className.value.value === edit.className
    }
    const kind = edit.type === "token" ? "defineTokens" : "defineSemanticTokens"
    return call.kind === kind && (call.category === edit.category || call.category === undefined)
  })

  for (const call of candidates) {
    const path = call.category === undefined && edit.type !== "recipe" ? [edit.category, ...edit.path] : edit.path
    const found = locate(call.object, path)

    if (found.property) {
      const target = found.property.value
      if (isString(target)) {
        if (edit.type === "semantic" && edit.mode === "_dark") {
          magic.overwrite(
            target.start,
            target.end,
            `{ base: ${code.slice(target.start, target.end)}, _dark: ${JSON.stringify(edit.value)} }`,
          )
        } else {
          magic.overwrite(target.start, target.end, JSON.stringify(edit.value))
        }
        return { ok: true }
      }
      if (edit.type === "semantic" && target.type === "ObjectExpression") {
        const condition = findProperty(target, edit.mode)
        if (condition && isString(condition.value)) {
          magic.overwrite(condition.value.start, condition.value.end, JSON.stringify(edit.value))
          return { ok: true }
        }
        if (!condition) {
          insertProperty(code, magic, target, [edit.mode], edit.value)
          return { ok: true }
        }
      }
      return { ok: false, reason: "computed value" }
    }

    if (found.missing && edit.type === "recipe") {
      insertProperty(code, magic, found.parent, found.missing, edit.value)
      return { ok: true }
    }
    if (found.blocked) return { ok: false, reason: "computed value" }
  }
  return undefined
}

export function writeEditsToSource({ edits, projectRoot, designSystem, configPath }) {
  const paths = sourcePaths({ projectRoot, designSystem, configPath })
  const presetPackages = edits.filter((edit) => edit.type === "preset").map((edit) => edit.package)
  const files = new Map()
  const load = (path) => {
    if (!files.has(path)) {
      const code = readFileSync(path, "utf8")
      const relevant =
        /define(Semantic)?Tokens|define(Slot)?Recipe/.test(code) || presetPackages.some((pkg) => code.includes(pkg))
      if (!relevant) files.set(path, null)
      else {
        const { program } = parseSync(path, code, { sourceType: "module" })
        files.set(path, { path, code, program, calls: definitionCalls(program), magic: new MagicString(code) })
      }
    }
    return files.get(path)
  }

  const written = new Set()
  const skipped = []
  for (const edit of edits) {
    let result
    for (const path of paths) {
      const file = load(path)
      if (!file) continue
      result = applyEdit(file, edit)
      if (result) {
        if (result.ok) written.add(path)
        break
      }
    }
    if (!result?.ok) skipped.push({ key: edit.key, reason: result?.reason ?? "not defined in source" })
  }

  return {
    commit: () => {
      for (const path of written) writeFileSync(path, files.get(path).magic.toString())
    },
    written: [...written].map((path) => relative(projectRoot, path)),
    skipped,
  }
}

export function studioSource(options) {
  return {
    name: "panda-studio:source",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__studio/source", (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405
          res.end()
          return
        }
        let body = ""
        req.on("data", (chunk) => (body += chunk))
        req.on("end", () => {
          try {
            const { edits } = JSON.parse(body)
            const result = writeEditsToSource({ ...options, edits })
            res.setHeader("content-type", "application/json")
            res.end(JSON.stringify({ written: result.written, skipped: result.skipped }))
            setTimeout(result.commit, 50)
          } catch (error) {
            res.statusCode = 500
            res.end(String(error))
          }
        })
      })
    },
  }
}
