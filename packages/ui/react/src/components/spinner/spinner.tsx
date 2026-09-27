"use client"

import { createRecipeContext } from "@isbatak/panda-ds/jsx"
import { spinner } from "@isbatak/panda-ds/recipes"
import type { ComponentProps } from "react"

const { withContext, PropsProvider } = createRecipeContext(spinner)

export const Spinner = withContext("span")
export type SpinnerProps = ComponentProps<typeof Spinner>

export const SpinnerPropsProvider = PropsProvider
