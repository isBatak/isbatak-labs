import * as masonry from "@isbatak/zag-masonry"
import { normalizeProps } from "@zag-js/vue"
import { computed, onBeforeUnmount, onMounted, shallowRef, useId, watch } from "vue"

export function useMasonry(props: () => Omit<masonry.Props, "id">) {
  const id = useId()
  const controller = masonry.createMasonry()
  const layout = shallowRef<masonry.Layout | null>(null)
  const resolved = computed<masonry.Props>(() => ({ id, ...props() }))

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
