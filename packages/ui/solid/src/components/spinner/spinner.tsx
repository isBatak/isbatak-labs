import { createRecipeContext } from "@isbatak/solid-ui/jsx"
import { spinner } from "@isbatak/panda-ds/recipes"
import type { ComponentProps } from "solid-js"

const { withContext, PropsProvider } = createRecipeContext(spinner)

export const Spinner = withContext("span")
export type SpinnerProps = ComponentProps<typeof Spinner>

export const SpinnerPropsProvider = PropsProvider
