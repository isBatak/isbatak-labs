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
  const text = `${quoteKey(key)}: ${literal(rest, value)}`
  const last = object.properties.at(-1)
  if (!last) {
    magic.appendLeft(object.start + 1, ` ${text} `)
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

function applyEdit(file, edit) {
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
  const roots = [projectRoot, designSystemSources(designSystem, configPath)].filter(Boolean)
  const paths = [...new Set(roots.flatMap((root) => sourceFiles(root)))]
  const files = new Map()
  const load = (path) => {
    if (!files.has(path)) {
      const code = readFileSync(path, "utf8")
      if (!/define(Semantic)?Tokens|define(Slot)?Recipe/.test(code)) files.set(path, null)
      else {
        const { program } = parseSync(path, code, { sourceType: "module" })
        files.set(path, { path, code, calls: definitionCalls(program), magic: new MagicString(code) })
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
