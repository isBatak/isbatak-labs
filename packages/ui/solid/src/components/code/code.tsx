import { ark } from "@ark-ui/solid/factory"
import { code } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/solid-ui/jsx"
import type { ComponentProps } from "solid-js"

export const Code = styled(ark.code, code)
export type CodeProps = ComponentProps<typeof Code>
