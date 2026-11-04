import { ark } from "@ark-ui/vue/factory"
import { mark } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/vue-ui/jsx"
import type { ComponentProps } from "vue-component-type-helpers"

export const Mark = styled(ark.mark, mark)
export type MarkProps = ComponentProps<typeof Mark>
