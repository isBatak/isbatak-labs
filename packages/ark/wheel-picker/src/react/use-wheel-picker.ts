import * as wheelPicker from "@isbatak/zag-wheel-picker"
import { normalizeProps, type PropTypes } from "@zag-js/react"
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react"
import type { Optional } from "../types"

export interface UseWheelPickerProps extends Optional<Omit<wheelPicker.Props, "value">, "id"> {
  /** The selected value. Pass it to control the wheel picker. */
  value?: string | undefined
  /** The initial value when uncontrolled. Defaults to the first item. */
  defaultValue?: string | undefined
}

export interface UseWheelPickerReturn extends wheelPicker.Api<PropTypes> {}

export const useWheelPicker = (props: UseWheelPickerProps): UseWheelPickerReturn => {
  const generatedId = useId()
  const { id = generatedId, value: controlledValue, defaultValue, onValueChange, ...rest } = props
  const [internalValue, setInternalValue] = useState(defaultValue ?? rest.items[0]?.value ?? "")
  const value = controlledValue ?? internalValue

  const resolved: wheelPicker.Props = {
    ...rest,
    id,
    value,
    onValueChange(details) {
      if (controlledValue === undefined) setInternalValue(details.value)
      onValueChange?.(details)
    },
  }

  const resolvedRef = useRef(resolved)
  resolvedRef.current = resolved
  const pickerRef = useRef<wheelPicker.Controller>(null)
  pickerRef.current ??= wheelPicker.createWheelPicker()
  const picker = pickerRef.current

  useEffect(() => picker.mount(() => resolvedRef.current), [picker, id])
  useLayoutEffect(
    () => picker.sync(resolvedRef.current),
    [picker, value, rest.items.length, rest.loop, rest.itemHeight],
  )

  return picker.connect(resolved, normalizeProps)
}
