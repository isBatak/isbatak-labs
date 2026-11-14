import { ark } from "@ark-ui/vue/factory"
import { createRecipeContext } from "@isbatak/vue-ui/jsx"
import { beacon } from "@isbatak/panda-ds/recipes"
import type { ComponentProps } from "vue-component-type-helpers"

const { withContext, PropsProvider } = createRecipeContext(beacon)

export const Beacon = withContext(ark.div)
export type BeaconProps = ComponentProps<typeof Beacon>

export const BeaconPropsProvider = PropsProvider
