import { Field } from "@ark-ui/solid/field"
import { textarea } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/solid-ui/jsx"
import type { ComponentProps } from "solid-js"

export const Textarea = styled(Field.Textarea, textarea)
export type TextareaProps = ComponentProps<typeof Textarea>
