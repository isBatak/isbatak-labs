import type { ComponentProps } from "vue-component-type-helpers"
import { styled } from "@isbatak/ui-vue/jsx"
import { badge } from "@isbatak/panda-ds/recipes"

export const Badge = styled("span", badge)

export type BadgeProps = ComponentProps<typeof Badge>
