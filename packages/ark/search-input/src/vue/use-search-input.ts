import { DEFAULT_LOCALE, useLocaleContext } from "@ark-ui/vue/locale"
import { normalizeProps, type PropTypes } from "@zag-js/vue"
import { computed, type ComputedRef, type MaybeRefOrGetter, shallowRef, toValue, useId } from "vue"
import * as searchInput from "../core"
import type { Optional } from "../types"

export interface UseSearchInputProps extends Optional<Omit<searchInput.Props, "dir" | "value">, "id"> {
  modelValue?: string | undefined
}

export interface UseSearchInputReturn extends ComputedRef<searchInput.Api<PropTypes>> {}

export interface SearchInputRootEmits {
  (event: "valueChange", details: searchInput.ValueChangeDetails): void
  (event: "update:modelValue", value: string): void
}

const cleanProps = <T extends Record<string, unknown>>(props: T) =>
  Object.fromEntries(Object.entries(props).filter(([, value]) => value !== undefined)) as T

export const useSearchInput = (
  props: MaybeRefOrGetter<UseSearchInputProps> = {},
  emit?: SearchInputRootEmits,
): UseSearchInputReturn => {
  const id = useId()
  const locale = useLocaleContext(DEFAULT_LOCALE)

  const resolved = computed<searchInput.Props>(() => {
    const { modelValue, ...localProps } = toValue(props)
    return {
      id,
      dir: locale.value.dir,
      ...cleanProps(localProps),
      value: modelValue,
      onValueChange(details) {
        emit?.("valueChange", details)
        emit?.("update:modelValue", details.value)
        localProps.onValueChange?.(details)
      },
    }
  })

  const state = shallowRef(searchInput.getInitialState(resolved.value))

  return computed(() =>
    searchInput.connect(
      resolved.value,
      state.value,
      (patch) => (state.value = { ...state.value, ...patch }),
      normalizeProps,
    ),
  )
}
