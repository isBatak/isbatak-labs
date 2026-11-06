"use client"

import { Field } from "@ark-ui/react/field"
import type { ComponentProps } from "react"
import { styled } from "@isbatak/panda-ds/jsx"
import { input } from "@isbatak/panda-ds/recipes"

export const Input = styled(Field.Input, input)
export type InputProps = ComponentProps<typeof Input>
