import { ark } from "@ark-ui/solid/factory"
import { prose } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/solid-ui/jsx"
import type { ComponentProps } from "solid-js"

export const Prose = styled(ark.div, prose)
export type ProseProps = ComponentProps<typeof Prose>
