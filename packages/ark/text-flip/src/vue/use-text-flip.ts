import { DEFAULT_ENVIRONMENT, useEnvironmentContext } from "@ark-ui/vue/environment"
import * as textFlip from "@isbatak/zag-text-flip"
import { normalizeProps, type PropTypes, useMachine } from "@zag-js/vue"
import { computed, type ComputedRef, type MaybeRefOrGetter, toValue, useId } from "vue"
import type { Optional } from "../types"

export interface UseTextFlipProps extends Optional<Omit<textFlip.Props, "getRootNode">, "id"> {}

export interface UseTextFlipReturn extends ComputedRef<textFlip.Api<PropTypes>> {}

export interface TextFlipRootEmits {
  (event: "indexChange", details: textFlip.IndexChangeDetails): void
}

const cleanProps = <T extends Record<string, unknown>>(props: T) =>
  Object.fromEntries(Object.entries(props).filter(([, value]) => value !== undefined)) as T

export const useTextFlip = (
  props: MaybeRefOrGetter<UseTextFlipProps> = {},
  emit?: TextFlipRootEmits,
): UseTextFlipReturn => {
  const id = useId()
  const env = useEnvironmentContext(DEFAULT_ENVIRONMENT)

  const context = computed<textFlip.Props>(() => {
    const localProps = toValue(props)
    return {
      id,
      getRootNode: env.value.getRootNode,
      ...cleanProps(localProps),
      onIndexChange(details) {
        emit?.("indexChange", details)
        localProps.onIndexChange?.(details)
      },
    }
  })

  const service = useMachine(textFlip.machine, context)
  return computed(() => textFlip.connect(service, normalizeProps))
}
