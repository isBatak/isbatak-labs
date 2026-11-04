import { ark } from "@ark-ui/solid/factory"
import type { ComponentProps } from "solid-js"
import { container } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/solid-ui/jsx"

export const Container = styled(ark.div, container)
export type ContainerProps = ComponentProps<typeof Container>
