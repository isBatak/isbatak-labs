import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { styled } from "@isbatak/panda-ds/jsx"
import { prose } from "@isbatak/panda-ds/recipes"

export const Prose = styled(ark.div, prose)
export type ProseProps = ComponentProps<typeof Prose>
