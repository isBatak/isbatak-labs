import { wheelPicker as wheelPickerRecipe } from "@isbatak/storybook-shared/recipes"
import type { WheelPickerControls } from "@isbatak/storybook-shared"
import * as wheelPicker from "@isbatak/zag-wheel-picker"
import { normalizeProps, spreadProps } from "@zag-js/vanilla"

const styles = wheelPickerRecipe()

export interface PickerOptions extends Partial<WheelPickerControls> {
  label: string
  items: wheelPicker.Props["items"]
  value?: string
  name?: string
  onValueChange?: (details: wheelPicker.ValueChangeDetails) => void
}

function div(className = "") {
  const element = document.createElement("div")
  element.className = className
  return element
}

export function createPicker(options: PickerOptions) {
  const { label, onValueChange, ...rest } = options
  const picker = wheelPicker.createWheelPicker()
  const props: wheelPicker.Props = {
    ...rest,
    id: crypto.randomUUID(),
    value: rest.value ?? rest.items[0]?.value ?? "",
    onValueChange(details) {
      setValue(details.value)
      onValueChange?.(details)
    },
  }

  const root = div(styles.root)
  const labelEl = document.createElement("span")
  labelEl.className = styles.label ?? ""
  labelEl.textContent = label
  const control = div(styles.control)
  const viewport = div(styles.viewport)
  const itemGroup = div(styles.itemGroup)
  const highlight = div(styles.highlight)
  const input = document.createElement("input")
  viewport.append(itemGroup)
  control.append(viewport, highlight)
  root.append(labelEl, control, input)

  const spread = (element: Element, elementProps: object) => spreadProps(element, elementProps, props.id)

  function render() {
    const api = picker.connect(props, normalizeProps)
    spread(root, api.getRootProps())
    spread(labelEl, api.getLabelProps())
    spread(control, api.getControlProps())
    spread(viewport, api.getViewportProps())
    spread(itemGroup, api.getItemGroupProps())
    spread(highlight, api.getHighlightProps())
    spread(input, api.getHiddenInputProps())

    if (itemGroup.children.length !== api.rows.length) {
      itemGroup.replaceChildren(
        ...api.rows.map(({ item }) => {
          const element = div(styles.item)
          element.textContent = item.label
          return element
        }),
      )
    }
    api.rows.forEach(({ row }, index) => spread(itemGroup.children[index]!, api.getItemProps({ row })))
  }

  function setValue(value: string) {
    props.value = value
    render()
    picker.sync(props)
  }

  let stopTracking: (() => void) | undefined

  render()

  return {
    element: root,
    setValue,
    start() {
      stopTracking = picker.mount(() => props)
      picker.sync(props)
    },
    stop() {
      stopTracking?.()
    },
  }
}
