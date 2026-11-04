import { ark } from "@ark-ui/solid/factory"
import { heading } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/solid-ui/jsx"
import type { ComponentProps } from "solid-js"

export const Heading = styled(ark.h2, heading)
export type HeadingProps = ComponentProps<typeof Heading>
