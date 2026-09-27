import { createRecipeContext } from "@isbatak/ui-vue/jsx"
import { spinner } from "@isbatak/panda-ds/recipes"
import type { ComponentProps } from "vue-component-type-helpers"

const { withContext, PropsProvider } = createRecipeContext(spinner)

export const Spinner = withContext("span")
export type SpinnerProps = ComponentProps<typeof Spinner>

export const SpinnerPropsProvider = PropsProvider
