"use client"

import { Field } from "@ark-ui/react/field"
import type { ComponentProps } from "react"
import { styled } from "@isbatak/panda-ds/jsx"
import { textarea } from "@isbatak/panda-ds/recipes"

export const Textarea = styled(Field.Textarea, textarea)
export type TextareaProps = ComponentProps<typeof Textarea>
