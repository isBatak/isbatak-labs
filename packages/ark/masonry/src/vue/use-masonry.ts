import { DEFAULT_LOCALE, useLocaleContext } from "@ark-ui/vue/locale"
import * as masonry from "@isbatak/zag-masonry"
import { normalizeProps, type PropTypes } from "@zag-js/vue"
import {
  computed,
  type ComputedRef,
  type MaybeRefOrGetter,
  onBeforeUnmount,
  onMounted,
  shallowRef,
  toValue,
  useId,
  watch,
} from "vue"
import type { Optional } from "../types"

export interface UseMasonryProps extends Optional<Omit<masonry.Props, "dir">, "id"> {}

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
  const locale = useLocaleContext(DEFAULT_LOCALE)
  const controller = masonry.createMasonry()
  const layout = shallowRef<masonry.Layout | null>(null)

  const resolved = computed<masonry.Props>(() => {
    const localProps = toValue(props)
    return {
      id,
      dir: locale.value.dir,
      ...cleanProps(localProps),
      onLayoutChange(details) {
        emit?.("layoutChange", details)
        localProps.onLayoutChange?.(details)
      },
    }
  })

  let stop: (() => void) | undefined

  onMounted(() => {
    stop = controller.mount(
      () => resolved.value,
      (next) => (layout.value = next),
    )
  })

  onBeforeUnmount(() => stop?.())

  watch(
    () => [resolved.value.sequential, resolved.value.columns, resolved.value.minColumnWidth, resolved.value.gap],
    () => controller.reflow(),
    { flush: "post" },
  )

  return computed(() => controller.connect(resolved.value, layout.value, normalizeProps))
}
