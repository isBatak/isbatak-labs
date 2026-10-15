import { wheelPicker as wheelPickerRecipe } from "@isbatak/storybook-shared/recipes"
import type { WheelPickerControls } from "@isbatak/storybook-shared"
import * as wheelPicker from "@isbatak/zag-wheel-picker"
import { normalizeProps } from "@zag-js/solid"
import { Index, createEffect, createMemo, createSignal, createUniqueId, on, onCleanup, onMount } from "solid-js"

const styles = wheelPickerRecipe()

export interface PickerProps extends Partial<WheelPickerControls> {
  label: string
  items: wheelPicker.Props["items"]
  value?: string
  defaultValue?: string
  name?: string
  onValueChange?: (details: wheelPicker.ValueChangeDetails) => void
}

export function Picker(props: PickerProps) {
  const id = createUniqueId()
  const picker = wheelPicker.createWheelPicker()
  const [internalValue, setInternalValue] = createSignal(props.defaultValue ?? props.items[0]?.value ?? "")

  const pickerProps = createMemo<wheelPicker.Props>(() => {
    const { label: _label, defaultValue: _defaultValue, value: controlledValue, onValueChange, ...rest } = props
    return {
      ...rest,
      id,
      value: controlledValue ?? internalValue(),
      onValueChange(details) {
        if (controlledValue === undefined) setInternalValue(details.value)
        onValueChange?.(details)
      },
    }
  })

  onMount(() => onCleanup(picker.mount(pickerProps)))

  createEffect(
    on(
      () => [pickerProps().value, pickerProps().items.length, pickerProps().loop, pickerProps().itemHeight],
      () => picker.sync(pickerProps()),
    ),
  )

  const api = createMemo(() => picker.connect(pickerProps(), normalizeProps))

  return (
    <div {...api().getRootProps()} class={styles.root}>
      <span {...api().getLabelProps()} class={styles.label}>
        {props.label}
      </span>
      <div {...api().getControlProps()} class={styles.control}>
        <div {...api().getViewportProps()} class={styles.viewport}>
          <div {...api().getItemGroupProps()} class={styles.itemGroup}>
            <Index each={api().rows}>
              {(entry) => (
                <div {...api().getItemProps({ row: entry().row })} class={styles.item}>
                  {entry().item.label}
                </div>
              )}
            </Index>
          </div>
        </div>
        <div {...api().getHighlightProps()} class={styles.highlight} />
      </div>
      <input {...api().getHiddenInputProps()} />
    </div>
  )
}
