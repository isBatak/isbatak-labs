import { css } from "styled-system/css"
import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
import * as wheelPicker from "@isbatak/zag-wheel-picker"
import { normalizeProps, spreadProps } from "@zag-js/vanilla"

const items = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
]

const styles = wheelPickerRecipe()

const classes = {
  root: css({ display: "grid", gap: "4" }),
  actions: css({ display: "flex", justifyContent: "center", gap: "2" }),
  button: css({
    px: "3",
    py: "1.5",
    borderWidth: "1px",
    borderRadius: "l2",
    textStyle: "sm",
    cursor: "pointer",
    _hover: { bg: "bg.muted" },
  }),
  output: css({ color: "fg.muted", textStyle: "sm", textAlign: "center" }),
}

export function createWheelPickerControlled(container: HTMLElement) {
  container.innerHTML = `
    <div class="${classes.root}">
      <div data-el="root" class="${styles.root}">
        <span data-el="label" class="${styles.label}">Framework</span>
        <div data-el="control" class="${styles.control}">
          <div data-el="viewport" class="${styles.viewport}">
            <div data-el="item-group" class="${styles.itemGroup}"></div>
          </div>
          <div data-el="highlight" class="${styles.highlight}"></div>
        </div>
        <input data-el="hidden-input" />
      </div>
      <div class="${classes.actions}">
        <button type="button" class="${classes.button}" data-value="react">React</button>
        <button type="button" class="${classes.button}" data-value="svelte">Svelte</button>
      </div>
      <output data-el="output" class="${classes.output}"></output>
    </div>
  `

  const el = (name: string) => container.querySelector(`[data-el="${name}"]`)!

  const picker = wheelPicker.createWheelPicker()
  const props: wheelPicker.Props = {
    id: crypto.randomUUID(),
    items,
    value: "react",
    onValueChange: (details) => setValue(details.value),
  }

  const spread = (node: Element, nodeProps: object) => spreadProps(node, nodeProps, props.id)

  const render = () => {
    const api = picker.connect(props, normalizeProps)
    spread(el("root"), api.getRootProps())
    spread(el("label"), api.getLabelProps())
    spread(el("control"), api.getControlProps())
    spread(el("viewport"), api.getViewportProps())
    spread(el("item-group"), api.getItemGroupProps())
    spread(el("highlight"), api.getHighlightProps())
    spread(el("hidden-input"), api.getHiddenInputProps())

    const group = el("item-group")
    if (group.children.length !== api.rows.length) {
      group.replaceChildren(
        ...api.rows.map(({ item }) => {
          const row = document.createElement("div")
          row.className = styles.item ?? ""
          row.textContent = item.label
          return row
        }),
      )
    }
    api.rows.forEach(({ row }, index) => spread(group.children[index]!, api.getItemProps({ row })))
    el("output").textContent = `Value: ${props.value}`
  }

  const setValue = (value: string) => {
    props.value = value
    render()
    picker.sync(props)
  }

  container
    .querySelectorAll<HTMLButtonElement>("[data-value]")
    .forEach((button) => button.addEventListener("click", () => setValue(button.dataset.value!)))

  render()
  const stop = picker.mount(() => props)
  picker.sync(props)

  return () => {
    stop()
    container.replaceChildren()
  }
}
