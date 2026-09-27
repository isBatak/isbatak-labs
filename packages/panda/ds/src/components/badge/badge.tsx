import type { ComponentProps } from "react"
import { styled } from "@isbatak/panda-ds/jsx"
import { badge } from "@isbatak/panda-ds/recipes"

export const Badge = styled("span", badge)

export type BadgeProps = ComponentProps<typeof Badge>
