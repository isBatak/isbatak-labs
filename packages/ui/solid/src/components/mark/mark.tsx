import { ark } from "@ark-ui/solid/factory"
import { mark } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/solid-ui/jsx"
import type { ComponentProps } from "solid-js"

export const Mark = styled(ark.mark, mark)
export type MarkProps = ComponentProps<typeof Mark>
