import { ark } from "@ark-ui/vue/factory"
import { em } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/vue-ui/jsx"
import type { ComponentProps } from "vue-component-type-helpers"

export const Em = styled(ark.em, em)
export type EmProps = ComponentProps<typeof Em>
