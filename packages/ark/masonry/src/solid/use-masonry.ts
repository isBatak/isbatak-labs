import { useLocaleContext } from "@ark-ui/solid/locale"
import * as masonry from "@isbatak/zag-masonry"
import { normalizeProps, type PropTypes } from "@zag-js/solid"
import { type Accessor, createEffect, createMemo, createSignal, createUniqueId, on, onCleanup, onMount } from "solid-js"
import type { Optional } from "../types"

export interface UseMasonryProps extends Optional<Omit<masonry.Props, "dir">, "id"> {}

export interface UseMasonryReturn extends Accessor<masonry.Api<PropTypes>> {}

type MaybeAccessor<T> = T | Accessor<T>

export const useMasonry = (props: MaybeAccessor<UseMasonryProps> = {}): UseMasonryReturn => {
  const id = createUniqueId()
  const locale = useLocaleContext()
  const controller = masonry.createMasonry()
  const [layout, setLayout] = createSignal<masonry.Layout | null>(null)

  const resolved = createMemo<masonry.Props>(() => ({
    id,
    dir: locale().dir,
    ...(typeof props === "function" ? props() : props),
  }))

  onMount(() => onCleanup(controller.mount(resolved, setLayout)))

  createEffect(
    on(
      () => [resolved().sequential, resolved().columns, resolved().minColumnWidth, resolved().gap],
      () => controller.reflow(),
    ),
  )

  return createMemo(() => controller.connect(resolved(), layout(), normalizeProps))
}
