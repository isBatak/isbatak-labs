import * as masonry from "@isbatak/zag-masonry"
import { normalizeProps } from "@zag-js/solid"
import { createEffect, createMemo, createSignal, createUniqueId, on, onCleanup, onMount } from "solid-js"

export function useMasonry(props: () => Omit<masonry.Props, "id">) {
  const id = createUniqueId()
  const controller = masonry.createMasonry()
  const [layout, setLayout] = createSignal<masonry.Layout | null>(null)
  const resolved = createMemo<masonry.Props>(() => ({ id, ...props() }))

  onMount(() => onCleanup(controller.mount(resolved, setLayout)))
  createEffect(
    on(
      () => [resolved().sequential, resolved().columns, resolved().minColumnWidth, resolved().gap],
      () => controller.reflow(),
    ),
  )

  return createMemo(() => controller.connect(resolved(), layout(), normalizeProps))
}
