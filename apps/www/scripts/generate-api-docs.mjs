import { existsSync } from "node:fs"
import { readdir, readFile, writeFile } from "node:fs/promises"
import { fileURLToPath } from "node:url"
import ts from "typescript"

const machines = {
  masonry: {
    file: "../../../packages/zag/masonry/src/masonry.types.ts",
    context: "MasonryProps",
    api: "MasonryApi",
  },
  "text-flip": {
    file: "../../../packages/zag/text-flip/src/text-flip.types.ts",
    context: "TextFlipProps",
    api: "TextFlipApi",
  },
  "wheel-picker": {
    file: "../../../packages/zag/wheel-picker/src/wheel-picker.types.ts",
    context: "WheelPickerProps",
    api: "WheelPickerApi",
  },
  sourcery: {
    file: "../../../packages/tools/sourcery/src/core/options.ts",
    context: "SourceryOptions",
  },
}

const outFile = fileURLToPath(new URL("../data/api.json", import.meta.url))

const files = Object.values(machines).map(({ file }) => fileURLToPath(new URL(file, import.meta.url)))
const program = ts.createProgram(files, {
  strict: true,
  exactOptionalPropertyTypes: true,
  module: ts.ModuleKind.ESNext,
  moduleResolution: ts.ModuleResolutionKind.Bundler,
  target: ts.ScriptTarget.ESNext,
  skipLibCheck: true,
  noEmit: true,
})
const checker = program.getTypeChecker()

function getInterface(sourceFile, name) {
  const node = sourceFile.statements.find(
    (statement) => ts.isInterfaceDeclaration(statement) && statement.name.text === name,
  )
  if (!node) throw new Error(`Interface ${name} not found in ${sourceFile.fileName}`)
  return checker.getTypeAtLocation(node)
}

function getTypeText(symbol, declaration) {
  if (declaration.type) return declaration.type.getText().replace(/\s+/g, " ")
  return checker.typeToString(
    checker.getTypeOfSymbolAtLocation(symbol, declaration),
    undefined,
    ts.TypeFormatFlags.NoTruncation,
  )
}

function getMembers(type, filter = () => true) {
  const members = {}
  for (const symbol of checker.getPropertiesOfType(type)) {
    const name = symbol.getName()
    const declaration = symbol.valueDeclaration ?? symbol.declarations?.[0]
    if (!declaration || !filter(name)) continue

    const member = {
      type: getTypeText(symbol, declaration),
      description: ts.displayPartsToString(symbol.getDocumentationComment(checker)).trim(),
    }
    const defaultTag = symbol.getJsDocTags(checker).find((tag) => tag.name === "default")
    if (defaultTag?.text) member.defaultValue = ts.displayPartsToString(defaultTag.text).trim()

    members[name] = member
  }
  return members
}

const data = {}
for (const [name, machine] of Object.entries(machines)) {
  const sourceFile = program.getSourceFile(fileURLToPath(new URL(machine.file, import.meta.url)))
  data[name] = {
    api: machine.api
      ? getMembers(getInterface(sourceFile, machine.api), (member) => !/^get\w+Props$/.test(member))
      : {},
    context: getMembers(getInterface(sourceFile, machine.context)),
  }
}

await writeFile(outFile, `${JSON.stringify(data, null, 2)}\n`)

const uiDir = fileURLToPath(new URL("../../../packages/ui/react/src/components", import.meta.url))
const docsDir = fileURLToPath(new URL("../content/components/ds", import.meta.url))
const dsOutFile = fileURLToPath(new URL("../data/ds-api.json", import.meta.url))

const documented = new Set(await readdir(docsDir))
const dsComponents = (await readdir(uiDir)).filter((name) => documented.has(name))
const entryOf = (name) =>
  existsSync(`${uiDir}/${name}/namespace.ts`) ? `${uiDir}/${name}/namespace.ts` : `${uiDir}/${name}/index.ts`

const uiProgram = ts.createProgram(dsComponents.map(entryOf), {
  strict: true,
  exactOptionalPropertyTypes: true,
  jsx: ts.JsxEmit.ReactJSX,
  module: ts.ModuleKind.ESNext,
  moduleResolution: ts.ModuleResolutionKind.Bundler,
  target: ts.ScriptTarget.ESNext,
  skipLibCheck: true,
  noEmit: true,
})
const uiChecker = uiProgram.getTypeChecker()

const ownProp = (symbol) => {
  const file = symbol.declarations?.[0]?.getSourceFile().fileName ?? ""
  return (
    /\/(@ark-ui|@zag-js)\/|\/packages\/ui\/react\/src\//.test(file) &&
    !["asChild", "render", "state"].includes(symbol.getName())
  )
}

function getPartProps(type) {
  const props = {}
  for (const symbol of uiChecker.getPropertiesOfType(type).filter(ownProp)) {
    const declaration = symbol.valueDeclaration ?? symbol.declarations?.[0]
    const member = {
      type: declaration.type
        ? declaration.type.getText().replace(/\s+/g, " ")
        : uiChecker.typeToString(
            uiChecker.getTypeOfSymbolAtLocation(symbol, declaration),
            undefined,
            ts.TypeFormatFlags.NoTruncation,
          ),
      description: ts.displayPartsToString(symbol.getDocumentationComment(uiChecker)).trim(),
    }
    const defaultTag = symbol.getJsDocTags(uiChecker).find((tag) => tag.name === "default")
    if (defaultTag?.text) member.defaultValue = ts.displayPartsToString(defaultTag.text).trim()
    props[symbol.getName()] = member
  }
  return props
}

async function namespaceOf(name) {
  if (!existsSync(`${uiDir}/${name}/namespace.ts`)) return undefined
  return (await readFile(`${uiDir}/${name}/index.ts`, "utf8")).match(/export \* as (\w+) from "\.\/namespace"/)?.[1]
}

const recipes = await import("@isbatak/panda-ds/recipes")
const camelCase = (name) => name.replace(/-(\w)/g, (_, char) => char.toUpperCase())

function getVariants(name) {
  const recipe = recipes[camelCase(name)]
  if (!recipe?.variantMap) return {}
  const defaults = recipe.getVariantProps()
  return Object.fromEntries(
    Object.entries(recipe.variantMap).map(([variant, values]) => [
      variant,
      defaults[variant] === undefined || defaults[variant] === false
        ? { values }
        : { values, defaultValue: String(defaults[variant]) },
    ]),
  )
}

const dsData = {}
for (const name of dsComponents) {
  const sourceFile = uiProgram.getSourceFile(entryOf(name))
  const exports = uiChecker.getExportsOfModule(uiChecker.getSymbolAtLocation(sourceFile))
  const values = new Set(
    exports.filter((symbol) => !symbol.getName().endsWith("Props")).map((symbol) => symbol.getName()),
  )
  const namespace = await namespaceOf(name)
  const parts = []
  for (const symbol of exports) {
    const part = symbol.getName().replace(/Props$/, "")
    if (part === symbol.getName() || !values.has(part)) continue
    const target = symbol.flags & ts.SymbolFlags.Alias ? uiChecker.getAliasedSymbol(symbol) : symbol
    const props = getPartProps(uiChecker.getDeclaredTypeOfSymbol(target))
    if (Object.keys(props).length) parts.push({ name: namespace ? `${namespace}.${part}` : part, props })
  }
  dsData[name] = { parts, variants: getVariants(name) }
}

await writeFile(dsOutFile, `${JSON.stringify(dsData, null, 2)}\n`)
