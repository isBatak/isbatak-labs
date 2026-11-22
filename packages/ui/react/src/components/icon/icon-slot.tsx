import { ark } from "@ark-ui/react/factory"
import type { CSSProperties, ComponentProps } from "react"

interface IconSlotProps extends ComponentProps<typeof ark.span> {
  /**
   * Extra pull toward the edge, added to the recipe's own, as a CSS length such as `"0.4px"` or `"0.18em"`. Use it to
   * land a single icon on its ink; a negative length pulls less.
   */
  offset?: string | undefined
}

export type StartIconProps = IconSlotProps
export function StartIcon({ offset, style, ...props }: StartIconProps) {
  return (
    <ark.span
      data-icon-start=""
      aria-hidden
      style={{ "--icon-offset": offset, ...style } as CSSProperties}
      {...props}
    />
  )
}

export type EndIconProps = IconSlotProps
export function EndIcon({ offset, style, ...props }: EndIconProps) {
  return (
    <ark.span data-icon-end="" aria-hidden style={{ "--icon-offset": offset, ...style } as CSSProperties} {...props} />
  )
}
