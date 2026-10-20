import { useLocaleContext } from "@ark-ui/svelte"
import { normalizeProps, type PropTypes } from "@zag-js/svelte"
import { onDestroy } from "svelte"
import * as codePreview from "../core/index.js"

export interface UseCodePreviewProps extends Omit<codePreview.Props, "dir" | "locale"> {}

export interface UseCodePreviewReturn {
  (): codePreview.Api<PropTypes>
}

export const useCodePreview = (props: UseCodePreviewProps | (() => UseCodePreviewProps)): UseCodePreviewReturn => {
  const locale = useLocaleContext()
  const controller = codePreview.createCodePreview()

  const resolved = $derived.by<codePreview.Props>(() => ({
    dir: locale().dir,
    locale: locale().locale,
    ...(typeof props === "function" ? props() : props),
  }))

  let state = $state.raw(codePreview.getInitialState(typeof props === "function" ? props() : props))

  onDestroy(() => controller.destroy())

  const api = $derived(controller.connect(resolved, state, (patch) => (state = { ...state, ...patch }), normalizeProps))

  return () => api
}
