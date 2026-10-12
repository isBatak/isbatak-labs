import { wheelPicker as wheelPickerRecipe } from "@isbatak/storybook-shared/recipes"
import type { WheelPickerControls } from "@isbatak/storybook-shared"
import * as wheelPicker from "@isbatak/zag-wheel-picker"
import { normalizeProps } from "@zag-js/preact"
import { useEffect, useId, useLayoutEffect, useRef, useState } from "preact/hooks"

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
  const { label, defaultValue, value: controlledValue, onValueChange, ...rest } = props
  const id = useId()
  const [internalValue, setInternalValue] = useState(defaultValue ?? rest.items[0]?.value ?? "")
  const value = controlledValue ?? internalValue

  const pickerProps: wheelPicker.Props = {
    ...rest,
    id,
    value,
    onValueChange(details) {
      if (controlledValue === undefined) setInternalValue(details.value)
      onValueChange?.(details)
    },
  }

  const pickerPropsRef = useRef(pickerProps)
  pickerPropsRef.current = pickerProps
  const pickerRef = useRef<wheelPicker.Controller | null>(null)
  pickerRef.current ??= wheelPicker.createWheelPicker()
  const picker = pickerRef.current

  useEffect(() => picker.mount(() => pickerPropsRef.current), [picker, id])
  useLayoutEffect(
    () => picker.sync(pickerPropsRef.current),
    [picker, value, rest.items.length, rest.loop, rest.itemHeight],
  )

  const api = picker.connect(pickerProps, normalizeProps)

  return (
    <div {...api.getRootProps()} className={styles.root}>
      <span {...api.getLabelProps()} className={styles.label}>
        {label}
      </span>
      <div {...api.getControlProps()} className={styles.control}>
        <div {...api.getViewportProps()} className={styles.viewport}>
          <div {...api.getItemGroupProps()} className={styles.itemGroup}>
            {api.rows.map(({ row, item }) => (
              <div key={row} {...api.getItemProps({ row })} className={styles.item}>
                {item.label}
              </div>
            ))}
          </div>
        </div>
        <div {...api.getHighlightProps()} className={styles.highlight} />
      </div>
      <input {...api.getHiddenInputProps()} />
    </div>
  )
}
