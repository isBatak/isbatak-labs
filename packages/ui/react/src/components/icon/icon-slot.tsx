import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"

export type StartIconProps = ComponentProps<typeof ark.span>
export function StartIcon(props: StartIconProps) {
  return <ark.span data-icon-start="" aria-hidden {...props} />
}

export type EndIconProps = ComponentProps<typeof ark.span>
export function EndIcon(props: EndIconProps) {
  return <ark.span data-icon-end="" aria-hidden {...props} />
}
