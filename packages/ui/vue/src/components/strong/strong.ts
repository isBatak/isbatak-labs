import { ark } from "@ark-ui/vue/factory"
import { strong } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/vue-ui/jsx"
import type { ComponentProps } from "vue-component-type-helpers"

export const Strong = styled(ark.strong, strong)
export type StrongProps = ComponentProps<typeof Strong>
