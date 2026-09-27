import type { ComponentProps } from "solid-js"
import { styled } from "@isbatak/ui-solid/jsx"
import { badge } from "@isbatak/panda-ds/recipes"

export const Badge = styled("span", badge)

export type BadgeProps = ComponentProps<typeof Badge>
