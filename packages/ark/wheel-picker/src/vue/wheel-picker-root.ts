import { ark } from "@ark-ui/vue/factory"
import type * as wheelPicker from "@isbatak/zag-wheel-picker"
import { type Component, defineComponent, h, type PropType } from "vue"
import { useWheelPicker, type UseWheelPickerReturn } from "./use-wheel-picker"
import { WheelPickerProvider } from "./use-wheel-picker-context"

const booleanProp = { type: Boolean, default: undefined }

export const WheelPickerRoot = defineComponent({
  name: "WheelPickerRoot",
  props: {
    "aria-label": String,
    "aria-labelledby": String,
    asChild: Boolean,
    defaultValue: String,
    disabled: booleanProp,
    form: String,
    id: String,
    ids: Object as PropType<wheelPicker.ElementIds>,
    itemHeight: Number,
    items: { type: Array as PropType<wheelPicker.ItemData[]>, required: true },
    loop: booleanProp,
    modelValue: String,
    name: String,
    visibleCount: Number,
  },
  emits: {
    valueChange: (_details: wheelPicker.ValueChangeDetails) => true,
    "update:modelValue": (_value: string) => true,
  },
  setup(props, { emit, slots }) {
    const api = useWheelPicker(() => {
      const { asChild: _, ...pickerProps } = props
      return pickerProps
    }, emit as never)
    WheelPickerProvider(api as UseWheelPickerReturn)

    return () => h(ark.div as Component, { ...api.value.getRootProps(), asChild: props.asChild }, slots)
  },
})
