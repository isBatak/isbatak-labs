import * as masonry from "@isbatak/zag-masonry"
import { normalizeProps } from "@zag-js/react"
import { useEffect, useId, useRef, useState } from "react"

export function useMasonry(props: Omit<masonry.Props, "id">) {
  const id = useId()
  const [layout, setLayout] = useState<masonry.Layout | null>(null)
  const resolved: masonry.Props = { id, ...props }
  const resolvedRef = useRef(resolved)
  resolvedRef.current = resolved
  const [controller] = useState(() => masonry.createMasonry())

  useEffect(() => controller.mount(() => resolvedRef.current, setLayout), [controller, id])
  useEffect(
    () => controller.reflow(),
    [controller, resolved.sequential, resolved.columns, resolved.minColumnWidth, resolved.gap],
  )

  return controller.connect(resolved, layout, normalizeProps)
}
