import { Swap } from "@ark-ui/solid/swap"
import type { ComponentProps } from "solid-js"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
import { swap } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext } = createSlotRecipeContext(swap)

export const SwapRoot = withProvider(Swap.Root, "root")
export type SwapRootProps = ComponentProps<typeof SwapRoot>

export const SwapRootProvider = withProvider(Swap.RootProvider, "root")
export type SwapRootProviderProps = ComponentProps<typeof SwapRootProvider>

export const SwapIndicator = withContext(Swap.Indicator, "indicator")
export type SwapIndicatorProps = ComponentProps<typeof SwapIndicator>
