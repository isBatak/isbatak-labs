import { ark } from "@ark-ui/solid/factory"
import { createRecipeContext } from "@isbatak/solid-ui/jsx"
import { beacon } from "@isbatak/panda-ds/recipes"
import type { ComponentProps } from "solid-js"

const { withContext, PropsProvider } = createRecipeContext(beacon)

export const Beacon = withContext(ark.div)
export type BeaconProps = ComponentProps<typeof Beacon>

export const BeaconPropsProvider = PropsProvider
