import { DEFAULT_ENVIRONMENT, useEnvironmentContext } from "@ark-ui/vue/environment"
import { DEFAULT_LOCALE, useLocaleContext } from "@ark-ui/vue/locale"
import * as masonry from "@isbatak/zag-masonry"
import { normalizeProps, type PropTypes, useMachine } from "@zag-js/vue"
import { computed, type ComputedRef, type MaybeRefOrGetter, toValue, useId } from "vue"
import type { Optional } from "../types"

export interface UseMasonryProps extends Optional<Omit<masonry.Props, "dir" | "getRootNode">, "id"> {}

export interface UseMasonryReturn extends ComputedRef<masonry.Api<PropTypes>> {}

export interface MasonryRootEmits {
  (event: "layoutChange", details: masonry.LayoutChangeDetails): void
}

const cleanProps = <T extends Record<string, unknown>>(props: T) =>
  Object.fromEntries(Object.entries(props).filter(([, value]) => value !== undefined)) as T

export const useMasonry = (
  props: MaybeRefOrGetter<UseMasonryProps> = {},
  emit?: MasonryRootEmits,
): UseMasonryReturn => {
  const id = useId()
  const env = useEnvironmentContext(DEFAULT_ENVIRONMENT)
  const locale = useLocaleContext(DEFAULT_LOCALE)

  const context = computed<masonry.Props>(() => {
    const localProps = toValue(props)
    return {
      id,
      dir: locale.value.dir,
      getRootNode: env.value.getRootNode,
      ...cleanProps(localProps),
      onLayoutChange(details) {
        emit?.("layoutChange", details)
        localProps.onLayoutChange?.(details)
      },
    }
  })

  const service = useMachine(masonry.machine, context)
  return computed(() => masonry.connect(service, normalizeProps))
}
