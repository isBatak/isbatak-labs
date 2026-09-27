import type { ComponentProps } from "solid-js"
import { styled } from "@isbatak/solid-ui/jsx"
import { badge } from "@isbatak/panda-ds/recipes"

export const Badge = styled("span", badge)

export type BadgeProps = ComponentProps<typeof Badge>
