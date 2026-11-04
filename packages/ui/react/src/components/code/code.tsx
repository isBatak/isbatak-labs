import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { styled } from "@isbatak/panda-ds/jsx"
import { code } from "@isbatak/panda-ds/recipes"

export const Code = styled(ark.code, code)
export type CodeProps = ComponentProps<typeof Code>
