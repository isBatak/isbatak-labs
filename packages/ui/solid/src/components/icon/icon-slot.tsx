import { ark } from "@ark-ui/solid/factory"
import { type ComponentProps, type JSX, splitProps } from "solid-js"

type IconSlotProps = ComponentProps<typeof ark.span> & {
  /**
   * Extra pull toward the edge, added to the recipe's own, as a CSS length such as `"0.4px"` or `"0.18em"`. Use it to
   * land a single icon on its ink; a negative length pulls less.
   */
  offset?: string | undefined
}

export type StartIconProps = IconSlotProps
export function StartIcon(props: StartIconProps) {
  const [local, rest] = splitProps(props, ["offset", "style"])
  return (
    <ark.span
      data-icon-start=""
      aria-hidden
      {...rest}
      style={{ "--icon-offset": local.offset, ...(local.style as JSX.CSSProperties | undefined) }}
    />
  )
}

export type EndIconProps = IconSlotProps
export function EndIcon(props: EndIconProps) {
  const [local, rest] = splitProps(props, ["offset", "style"])
  return (
    <ark.span
      data-icon-end=""
      aria-hidden
      {...rest}
      style={{ "--icon-offset": local.offset, ...(local.style as JSX.CSSProperties | undefined) }}
    />
  )
}
