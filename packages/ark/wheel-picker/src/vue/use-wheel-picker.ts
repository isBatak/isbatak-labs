import * as wheelPicker from "@isbatak/zag-wheel-picker"
import { normalizeProps, type PropTypes } from "@zag-js/vue"
import {
  computed,
  type ComputedRef,
  type MaybeRefOrGetter,
  onBeforeUnmount,
  onMounted,
  ref,
  toValue,
  useId,
  watch,
} from "vue"
import type { Optional } from "../types"

export interface UseWheelPickerProps extends Optional<Omit<wheelPicker.Props, "value">, "id"> {
  /** The selected value. Pass it to control the wheel picker. */
  modelValue?: string | undefined
  /** The initial value when uncontrolled. Defaults to the first item. */
  defaultValue?: string | undefined
}

export interface UseWheelPickerReturn extends ComputedRef<wheelPicker.Api<PropTypes>> {}

export interface WheelPickerRootEmits {
  (event: "valueChange", details: wheelPicker.ValueChangeDetails): void
  (event: "update:modelValue", value: string): void
}

const cleanProps = <T extends Record<string, unknown>>(props: T) =>
  Object.fromEntries(Object.entries(props).filter(([, value]) => value !== undefined)) as T

export const useWheelPicker = (
  props: MaybeRefOrGetter<UseWheelPickerProps>,
  emit?: WheelPickerRootEmits,
): UseWheelPickerReturn => {
  const id = useId()
  const picker = wheelPicker.createWheelPicker()
  const initial = toValue(props)
  const internalValue = ref(initial.defaultValue ?? initial.items[0]?.value ?? "")

  const resolved = computed<wheelPicker.Props>(() => {
    const { modelValue, defaultValue: _, ...localProps } = toValue(props)
    return {
      id,
      ...cleanProps(localProps),
      value: modelValue ?? internalValue.value,
      onValueChange(details) {
        if (modelValue === undefined) internalValue.value = details.value
        emit?.("valueChange", details)
        emit?.("update:modelValue", details.value)
        localProps.onValueChange?.(details)
      },
    }
  })

  let stop: (() => void) | undefined

  onMounted(() => {
    stop = picker.mount(() => resolved.value)
    picker.sync(resolved.value)
  })

  onBeforeUnmount(() => stop?.())

  watch(
    () => [resolved.value.value, resolved.value.items.length, resolved.value.loop, resolved.value.itemHeight],
    () => picker.sync(resolved.value),
    { flush: "post" },
  )

  return computed(() => picker.connect(resolved.value, normalizeProps))
}
