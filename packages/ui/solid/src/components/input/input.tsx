import { Field } from "@ark-ui/solid/field"
import { input } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/solid-ui/jsx"
import type { ComponentProps } from "solid-js"

export const Input = styled(Field.Input, input)
export type InputProps = ComponentProps<typeof Input>
