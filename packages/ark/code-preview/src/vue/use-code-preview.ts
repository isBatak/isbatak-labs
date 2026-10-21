import { DEFAULT_LOCALE, useLocaleContext } from "@ark-ui/vue/locale"
import { normalizeProps, type PropTypes } from "@zag-js/vue"
import { computed, type ComputedRef, type MaybeRefOrGetter, onBeforeUnmount, shallowRef, toValue, useId } from "vue"
import * as codePreview from "../core"
import type { Optional } from "../types"

export interface UseCodePreviewProps extends Optional<Omit<codePreview.Props, "dir" | "locale">, "id"> {}

export interface UseCodePreviewReturn extends ComputedRef<codePreview.Api<PropTypes>> {}

export interface CodePreviewRootEmits {
  (event: "openChange", details: codePreview.OpenChangeDetails): void
}

const cleanProps = <T extends Record<string, unknown>>(props: T) =>
  Object.fromEntries(Object.entries(props).filter(([, value]) => value !== undefined)) as T

export const useCodePreview = (
  props: MaybeRefOrGetter<UseCodePreviewProps> = {},
  emit?: CodePreviewRootEmits,
): UseCodePreviewReturn => {
  const id = useId()
  const locale = useLocaleContext(DEFAULT_LOCALE)
  const controller = codePreview.createCodePreview()

  const resolved = computed<codePreview.Props>(() => {
    const localProps = toValue(props)
    return {
      id,
      dir: locale.value.dir,
      locale: locale.value.locale,
      ...cleanProps(localProps),
      onOpenChange(details) {
        emit?.("openChange", details)
        localProps.onOpenChange?.(details)
      },
    }
  })

  const state = shallowRef(codePreview.getInitialState(resolved.value))

  onBeforeUnmount(() => controller.destroy())

  return computed(() =>
    controller.connect(
      resolved.value,
      state.value,
      (patch) => (state.value = { ...state.value, ...patch }),
      normalizeProps,
    ),
  )
}
