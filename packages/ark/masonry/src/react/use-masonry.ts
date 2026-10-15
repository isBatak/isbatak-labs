import { useLocaleContext } from "@ark-ui/react/locale"
import * as masonry from "@isbatak/zag-masonry"
import { normalizeProps, type PropTypes } from "@zag-js/react"
import { useEffect, useId, useRef, useState } from "react"
import type { Optional } from "../types"

export interface UseMasonryProps extends Optional<Omit<masonry.Props, "dir">, "id"> {}

export interface UseMasonryReturn extends masonry.Api<PropTypes> {}

export const useMasonry = (props: UseMasonryProps = {}): UseMasonryReturn => {
  const id = useId()
  const { dir } = useLocaleContext()
  const [layout, setLayout] = useState<masonry.Layout | null>(null)

  const resolved: masonry.Props = { id, dir, ...props }
  const resolvedRef = useRef(resolved)
  resolvedRef.current = resolved
  const controllerRef = useRef<masonry.Controller>(null)
  controllerRef.current ??= masonry.createMasonry()
  const controller = controllerRef.current

  useEffect(() => controller.mount(() => resolvedRef.current, setLayout), [controller, resolved.id])
  useEffect(
    () => controller.reflow(),
    [controller, resolved.sequential, resolved.columns, resolved.minColumnWidth, resolved.gap],
  )

  return controller.connect(resolved, layout, normalizeProps)
}
