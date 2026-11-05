import { styled } from "@isbatak/panda-ds/jsx"
import { badge } from "@isbatak/panda-ds/recipes"
import type { ComponentProps } from "react"

export const Badge = styled("span", badge)

export type BadgeProps = ComponentProps<typeof Badge>
