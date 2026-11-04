import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { styled } from "@isbatak/panda-ds/jsx"
import { heading } from "@isbatak/panda-ds/recipes"

export const Heading = styled(ark.h2, heading)
export type HeadingProps = ComponentProps<typeof Heading>
