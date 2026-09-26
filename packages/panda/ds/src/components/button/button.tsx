"use client"

import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { styled } from "@isbatak/panda-ds/jsx"
import { button } from "@isbatak/panda-ds/recipes"

export const Button = styled(ark.button, button)

export type ButtonProps = ComponentProps<typeof Button>
