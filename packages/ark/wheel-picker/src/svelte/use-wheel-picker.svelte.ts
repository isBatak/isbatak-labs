import * as wheelPicker from "@isbatak/zag-wheel-picker"
import { normalizeProps, type PropTypes } from "@zag-js/svelte"
import { untrack } from "svelte"

export interface UseWheelPickerProps extends Omit<wheelPicker.Props, "id" | "value"> {
  /** The unique id of the wheel picker. */
  id?: string | undefined
  /** The selected value. Pass it to control the wheel picker. */
  value?: string | undefined
  /** The initial value when uncontrolled. Defaults to the first item. */
  defaultValue?: string | undefined
}

export interface UseWheelPickerReturn {
  (): wheelPicker.Api<PropTypes>
}

let counter = 0

export const useWheelPicker = (props: UseWheelPickerProps | (() => UseWheelPickerProps)): UseWheelPickerReturn => {
  const fallbackId = `wheel-picker-${++counter}`
  const picker = wheelPicker.createWheelPicker()
  const getProps = () => (typeof props === "function" ? props() : props)
  let internalValue = $state(untrack(() => getProps().defaultValue ?? getProps().items[0]?.value ?? ""))

  const value = $derived(getProps().value ?? internalValue)
  const itemCount = $derived(getProps().items.length)
  const loop = $derived(getProps().loop)
  const itemHeight = $derived(getProps().itemHeight)

  const resolved = $derived.by<wheelPicker.Props>(() => {
    const { id, value: controlledValue, defaultValue: _, onValueChange, ...rest } = getProps()
    return {
      ...rest,
      id: id ?? fallbackId,
      value,
      onValueChange(details) {
        if (controlledValue === undefined) internalValue = details.value
        onValueChange?.(details)
      },
    }
  })

  $effect(() => untrack(() => picker.mount(() => resolved)))

  $effect(() => {
    void value
    void itemCount
    void loop
    void itemHeight
    untrack(() => picker.sync(resolved))
  })

  const api = $derived(picker.connect(resolved, normalizeProps))

  return () => api
}
