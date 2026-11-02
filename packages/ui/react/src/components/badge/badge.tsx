import { ark } from "@ark-ui/react/factory"
import { styled } from "@isbatak/panda-ds/jsx"
import { badge } from "@isbatak/panda-ds/recipes"
import type { ComponentProps } from "react"

export const Badge = styled("span", badge)

export type BadgeProps = ComponentProps<typeof Badge>

export type BadgeStartIconProps = ComponentProps<typeof ark.span>
export function BadgeStartIcon(props: BadgeStartIconProps) {
  return <ark.span data-icon-start="" aria-hidden {...props} />
}

export type BadgeEndIconProps = ComponentProps<typeof ark.span>
export function BadgeEndIcon(props: BadgeEndIconProps) {
  return <ark.span data-icon-end="" aria-hidden {...props} />
}
