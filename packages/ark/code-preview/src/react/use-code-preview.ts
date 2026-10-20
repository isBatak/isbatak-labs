import { useLocaleContext } from "@ark-ui/react/locale"
import { normalizeProps, type PropTypes } from "@zag-js/react"
import { useEffect, useId, useRef, useState } from "react"
import * as codePreview from "../core"
import type { Optional } from "../types"

export interface UseCodePreviewProps extends Optional<Omit<codePreview.Props, "dir" | "locale">, "id"> {}

export interface UseCodePreviewReturn extends codePreview.Api<PropTypes> {}

export const useCodePreview = (props: UseCodePreviewProps = {}): UseCodePreviewReturn => {
  const id = useId()
  const { dir, locale } = useLocaleContext()
  const resolved: codePreview.Props = { id, dir, locale, ...props }
  const [state, setState] = useState(() => codePreview.getInitialState(resolved))
  const controllerRef = useRef<codePreview.Controller>(null)
  controllerRef.current ??= codePreview.createCodePreview()
  const controller = controllerRef.current

  useEffect(() => () => controller.destroy(), [controller])

  return controller.connect(resolved, state, (patch) => setState((prev) => ({ ...prev, ...patch })), normalizeProps)
}
