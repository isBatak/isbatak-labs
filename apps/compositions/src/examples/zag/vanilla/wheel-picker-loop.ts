import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
import * as wheelPicker from "@isbatak/zag-wheel-picker"
import { normalizeProps, spreadProps } from "@zag-js/vanilla"

const items = Array.from({ length: 60 }, (_, minute) => {
  const label = String(minute).padStart(2, "0")
  return { label, value: label }
})

const styles = wheelPickerRecipe()

export function createWheelPickerLoop(container: HTMLElement) {
  container.innerHTML = `
    <div data-el="root" class="${styles.root}">
      <span data-el="label" class="${styles.label}">Minute</span>
      <div data-el="control" class="${styles.control}">
        <div data-el="viewport" class="${styles.viewport}">
          <div data-el="item-group" class="${styles.itemGroup}"></div>
        </div>
        <div data-el="highlight" class="${styles.highlight}"></div>
      </div>
      <input data-el="hidden-input" />
    </div>
  `

  const el = (name: string) => container.querySelector(`[data-el="${name}"]`)!

  const picker = wheelPicker.createWheelPicker()
  const props: wheelPicker.Props = {
    id: crypto.randomUUID(),
    items,
    value: "30",
    loop: true,
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
  }

  const setValue = (value: string) => {
    props.value = value
    render()
    picker.sync(props)
  }

  render()
  const stop = picker.mount(() => props)
  picker.sync(props)

  return () => {
    stop()
    container.replaceChildren()
  }
}
