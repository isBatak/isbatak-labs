import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { styled } from "@isbatak/panda-ds/jsx"
import { mark } from "@isbatak/panda-ds/recipes"

export const Mark = styled(ark.mark, mark)
export type MarkProps = ComponentProps<typeof Mark>
