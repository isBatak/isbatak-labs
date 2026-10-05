import { componentOf } from "../docs/component-meta"
import type { ApiId, DocVariant, FrameworkId } from "../docs/variant"
import {
  type ControlName,
  type ControlValues,
  componentControls,
  controlDefaults,
  type ExampleSettings,
} from "./controls"

type Value = string | number | boolean

const changedFrom = (values: Partial<ControlValues>, names: ControlName[]) =>
  names.flatMap((name) => {
    const value = values[name]
    return value === undefined || value === controlDefaults[name] ? [] : [[name, value] as [string, Value]]
  })

const literal = (value: Value) => (typeof value === "string" ? JSON.stringify(value) : String(value))

const kebab = (name: string) => name.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`)

const controlledValue: Record<FrameworkId, string[]> = {
  react: ["value", "onValueChange: (details) => setValue(details.value)"],
  preact: ["value", "onValueChange: (details) => setValue(details.value)"],
  solid: ["value: value()", "onValueChange: (details) => setValue(details.value)"],
  vue: ["value: value.value", "onValueChange: (details) => (value.value = details.value)"],
  svelte: ["value", "onValueChange: (details) => (value = details.value)"],
  vanilla: ["value", "onValueChange: (details) => setValue(details.value)"],
}

function machineSnippet(framework: FrameworkId, settings: ExampleSettings, props: [string, Value][]) {
  const lines = [
    "collection",
    ...(settings.controlled
      ? controlledValue[framework]
      : settings.defaultValue === undefined
        ? []
        : [`defaultValue: ${literal(settings.defaultValue)}`]),
    ...props.map(([name, value]) => `${name}: ${literal(value)}`),
  ]
  const body = lines.map((line) => `  ${line},`).join("\n")
  const call =
    framework === "vue" && settings.controlled
      ? `useMachine(\n  wheelPicker.machine,\n  computed(() => ({\n${lines.map((line) => `    ${line},`).join("\n")}\n  })),\n)`
      : (framework === "svelte" || framework === "solid") && settings.controlled
        ? `useMachine(wheelPicker.machine, () => ({\n${body}\n}))`
        : `useMachine(wheelPicker.machine, {\n${body}\n})`
  return framework === "vanilla"
    ? `const machine = new VanillaMachine(wheelPicker.machine, {\n${body}\n})`
    : `const service = ${call}`
}

const jsxAttribute = (framework: FrameworkId, name: string, value: Value) => {
  if (framework === "vue") {
    if (value === true) return kebab(name)
    return typeof value === "string" ? `${kebab(name)}=${JSON.stringify(value)}` : `:${kebab(name)}="${value}"`
  }
  if (value === true) return name
  return typeof value === "string" ? `${name}=${JSON.stringify(value)}` : `${name}={${value}}`
}

const controlledAttributes: Record<FrameworkId, string[]> = {
  react: ["value={value}", "onValueChange={(details) => setValue(details.value)}"],
  preact: ["value={value}", "onValueChange={(details) => setValue(details.value)}"],
  solid: ["value={value()}", "onValueChange={(details) => setValue(details.value)}"],
  vue: ['v-model="value"'],
  svelte: ["bind:value"],
  vanilla: [],
}

function arkSnippet(framework: FrameworkId, settings: ExampleSettings, props: [string, Value][]) {
  const attributes = [
    framework === "vue"
      ? ':collection="collection"'
      : framework === "svelte"
        ? "{collection}"
        : "collection={collection}",
    ...(settings.controlled
      ? controlledAttributes[framework]
      : settings.defaultValue === undefined
        ? []
        : [jsxAttribute(framework, "defaultValue", settings.defaultValue)]),
    ...props.map(([name, value]) => jsxAttribute(framework, name, value)),
  ]
  const inline = `<WheelPicker.Root ${attributes.join(" ")}>`
  const open =
    inline.length <= 80 ? inline : `<WheelPicker.Root\n${attributes.map((attribute) => `  ${attribute}`).join("\n")}\n>`
  const children = framework === "vue" || framework === "svelte" ? "<!-- … -->" : "{/* … */}"
  return `${open}\n  ${children}\n</WheelPicker.Root>`
}

const arkLang: Record<FrameworkId, string> = {
  react: "tsx",
  preact: "tsx",
  solid: "tsx",
  vue: "vue",
  svelte: "svelte",
  vanilla: "ts",
}

const snippetLang = (api: ApiId, framework: FrameworkId) => (api === "ark" ? arkLang[framework] : "ts")

const recipeSnippet = (name: string, variants: [string, Value][]) =>
  variants.length > 0
    ? `const styles = ${name}({ ${variants.map(([key, value]) => `${key}: ${literal(value)}`).join(", ")} })\n\n`
    : ""

const definedFrom = (values: Partial<ControlValues>, names: ControlName[]) =>
  names.flatMap((name) => {
    const value = values[name]
    return value === undefined || value === false ? [] : [[name, value] as [string, Value]]
  })

function masonryMachineSnippet(framework: FrameworkId, props: [string, Value][]) {
  const body = props.map(([name, value]) => `  ${name}: ${literal(value)},`).join("\n")
  const options = props.length > 0 ? `{\n${body}\n}` : "{}"
  return framework === "vanilla"
    ? `const machine = new VanillaMachine(masonry.machine, ${options})`
    : `const service = useMachine(masonry.machine, ${options})`
}

function masonryArkSnippet(framework: FrameworkId, props: [string, Value][]) {
  const attributes = props.map(([name, value]) => jsxAttribute(framework, name, value))
  const open = attributes.length > 0 ? `<Masonry.Root ${attributes.join(" ")}>` : "<Masonry.Root>"
  const item =
    framework === "vue" || framework === "svelte"
      ? '<Masonry.Item value="1"><!-- … --></Masonry.Item>'
      : '<Masonry.Item value="1">{/* … */}</Masonry.Item>'
  return `${open}\n  ${item}\n</Masonry.Root>`
}

interface SnippetOptions extends DocVariant {
  id: string
  settings: ExampleSettings
  values: Partial<ControlValues>
}

export function exampleSnippet({ id, framework, styling, api, settings, values }: SnippetOptions) {
  const component = componentOf(id)
  const controls = componentControls[component]
  const lang = snippetLang(api, framework)

  if (component === "masonry") {
    const props = definedFrom(values, controls.machine)
    const recipe = styling === "panda" ? recipeSnippet("masonryRecipe", changedFrom(values, controls.recipe)) : ""
    const code = api === "ark" ? masonryArkSnippet(framework, props) : masonryMachineSnippet(framework, props)
    return { code: `${recipe}${code}`, lang }
  }

  const props = changedFrom(values, controls.machine)
  const recipe = styling === "panda" ? recipeSnippet("wheelPickerRecipe", changedFrom(values, controls.recipe)) : ""
  const code = api === "ark" ? arkSnippet(framework, settings, props) : machineSnippet(framework, settings, props)
  return { code: `${recipe}${code}`, lang }
}
