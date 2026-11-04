import { ark } from "@ark-ui/vue/factory"
import { heading } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/vue-ui/jsx"
import type { ComponentProps } from "vue-component-type-helpers"

export const Heading = styled(ark.h2, heading)
export type HeadingProps = ComponentProps<typeof Heading>
