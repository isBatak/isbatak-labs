import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { styled } from "@isbatak/panda-ds/jsx"
import { strong } from "@isbatak/panda-ds/recipes"

export const Strong = styled(ark.strong, strong)
export type StrongProps = ComponentProps<typeof Strong>
