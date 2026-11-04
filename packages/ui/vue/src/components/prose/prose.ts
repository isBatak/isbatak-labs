import { ark } from "@ark-ui/vue/factory"
import { prose } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/vue-ui/jsx"
import type { ComponentProps } from "vue-component-type-helpers"

export const Prose = styled(ark.div, prose)
export type ProseProps = ComponentProps<typeof Prose>
