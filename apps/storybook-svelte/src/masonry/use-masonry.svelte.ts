import * as masonry from "@isbatak/zag-masonry"
import { normalizeProps } from "@zag-js/svelte"
import { untrack } from "svelte"

export function useMasonry(id: string, props: () => Omit<masonry.Props, "id">) {
  const controller = masonry.createMasonry()
  let layout = $state.raw<masonry.Layout | null>(null)
  const resolved = $derived<masonry.Props>({ id, ...props() })

  $effect(() =>
    untrack(() =>
      controller.mount(
        () => resolved,
        (next) => (layout = next),
      ),
    ),
  )
  $effect(() => {
    void resolved.sequential
    void resolved.columns
    void resolved.minColumnWidth
    void resolved.gap
    untrack(() => controller.reflow())
  })

  const api = $derived(controller.connect(resolved, layout, normalizeProps))
  return () => api
}
