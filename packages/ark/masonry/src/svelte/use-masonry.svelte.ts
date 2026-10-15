import { useLocaleContext } from "@ark-ui/svelte"
import * as masonry from "@isbatak/zag-masonry"
import { normalizeProps, type PropTypes } from "@zag-js/svelte"
import { untrack } from "svelte"

export interface UseMasonryProps extends Omit<masonry.Props, "dir"> {}

export interface UseMasonryReturn {
  (): masonry.Api<PropTypes>
}

export const useMasonry = (props: UseMasonryProps | (() => UseMasonryProps)): UseMasonryReturn => {
  const locale = useLocaleContext()
  const controller = masonry.createMasonry()
  let layout = $state.raw<masonry.Layout | null>(null)

  const resolved = $derived.by<masonry.Props>(() => ({
    dir: locale().dir,
    ...(typeof props === "function" ? props() : props),
  }))

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
