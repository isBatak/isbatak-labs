import * as wheelPicker from "@isbatak/zag-wheel-picker"
import { normalizeProps, type PropTypes } from "@zag-js/solid"
import { type Accessor, createEffect, createMemo, createSignal, createUniqueId, on, onCleanup, onMount } from "solid-js"
import type { Optional } from "../types"

export interface UseWheelPickerProps extends Optional<Omit<wheelPicker.Props, "value">, "id"> {
  /** The selected value. Pass it to control the wheel picker. */
  value?: string | undefined
  /** The initial value when uncontrolled. Defaults to the first item. */
  defaultValue?: string | undefined
}

export interface UseWheelPickerReturn extends Accessor<wheelPicker.Api<PropTypes>> {}

type MaybeAccessor<T> = T | Accessor<T>

export const useWheelPicker = (props: MaybeAccessor<UseWheelPickerProps>): UseWheelPickerReturn => {
  const generatedId = createUniqueId()
  const picker = wheelPicker.createWheelPicker()
  const getProps = () => (typeof props === "function" ? props() : props)
  const [internalValue, setInternalValue] = createSignal(getProps().defaultValue ?? getProps().items[0]?.value ?? "")

  const resolved = createMemo<wheelPicker.Props>(() => {
    const { id = generatedId, value: controlledValue, defaultValue: _, onValueChange, ...rest } = getProps()
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

  onMount(() => onCleanup(picker.mount(resolved)))

  createEffect(
    on(
      () => [resolved().value, resolved().items.length, resolved().loop, resolved().itemHeight],
      () => picker.sync(resolved()),
    ),
  )

  return createMemo(() => picker.connect(resolved(), normalizeProps))
}
