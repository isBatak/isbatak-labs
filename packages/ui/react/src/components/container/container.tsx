import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { styled } from "@isbatak/panda-ds/jsx"
import { container } from "@isbatak/panda-ds/recipes"

export const Container = styled(ark.div, container)
export type ContainerProps = ComponentProps<typeof Container>
