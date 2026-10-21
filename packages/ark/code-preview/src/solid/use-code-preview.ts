import { useLocaleContext } from "@ark-ui/solid/locale"
import { normalizeProps, type PropTypes } from "@zag-js/solid"
import { type Accessor, createMemo, createUniqueId, onCleanup } from "solid-js"
import { createStore } from "solid-js/store"
import * as codePreview from "../core"
import type { Optional } from "../types"

export interface UseCodePreviewProps extends Optional<Omit<codePreview.Props, "dir" | "locale">, "id"> {}

export interface UseCodePreviewReturn extends Accessor<codePreview.Api<PropTypes>> {}

type MaybeAccessor<T> = T | Accessor<T>

export const useCodePreview = (props: MaybeAccessor<UseCodePreviewProps> = {}): UseCodePreviewReturn => {
  const id = createUniqueId()
  const locale = useLocaleContext()
  const controller = codePreview.createCodePreview()

  const resolved = createMemo<codePreview.Props>(() => ({
    id,
    dir: locale().dir,
    locale: locale().locale,
    ...(typeof props === "function" ? props() : props),
  }))

  const [state, setState] = createStore(codePreview.getInitialState(resolved()))

  onCleanup(() => controller.destroy())

  return createMemo(() => controller.connect(resolved(), { ...state }, (patch) => setState(patch), normalizeProps))
}
