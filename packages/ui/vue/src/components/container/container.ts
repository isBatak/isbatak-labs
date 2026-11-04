import { ark } from "@ark-ui/vue/factory"
import { container } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/vue-ui/jsx"
import type { ComponentProps } from "vue-component-type-helpers"

export const Container = styled(ark.div, container)
export type ContainerProps = ComponentProps<typeof Container>
