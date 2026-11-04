import { ark } from "@ark-ui/solid/factory"
import { strong } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/solid-ui/jsx"
import type { ComponentProps } from "solid-js"

export const Strong = styled(ark.strong, strong)
export type StrongProps = ComponentProps<typeof Strong>
