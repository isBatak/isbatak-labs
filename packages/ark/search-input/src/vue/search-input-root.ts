import { ark } from "@ark-ui/vue/factory"
import { type Component, defineComponent, h, type PropType } from "vue"
import type * as searchInput from "../core"
import { useSearchInput } from "./use-search-input"
import { SearchInputProvider } from "./use-search-input-context"

const booleanProp = { type: Boolean, default: undefined }

export const SearchInputRoot = defineComponent({
  name: "SearchInputRoot",
  props: {
    asChild: Boolean,
    defaultValue: String,
    disabled: booleanProp,
    form: String,
    id: String,
    ids: Object as PropType<searchInput.ElementIds>,
    invalid: booleanProp,
    modelValue: String,
    name: String,
    readOnly: booleanProp,
    required: booleanProp,
    translations: Object as PropType<Partial<searchInput.IntlTranslations>>,
  },
  emits: {
    valueChange: (_details: searchInput.ValueChangeDetails) => true,
    "update:modelValue": (_value: string) => true,
  },
  setup(props, { emit, slots }) {
    const api = useSearchInput(() => {
      const { asChild: _, ...searchInputProps } = props
      return searchInputProps
    }, emit)
    SearchInputProvider(api)

    return () => h(ark.div as Component, { ...api.value.getRootProps(), asChild: props.asChild }, slots)
  },
})
