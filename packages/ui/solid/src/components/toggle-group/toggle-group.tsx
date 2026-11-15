import { ToggleGroup } from "@ark-ui/solid/toggle-group"
import type { ComponentProps } from "solid-js"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
import { toggleGroup } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext } = createSlotRecipeContext(toggleGroup)

export const ToggleGroupRoot = withProvider(ToggleGroup.Root, "root")
export type ToggleGroupRootProps = ComponentProps<typeof ToggleGroupRoot>

export const ToggleGroupRootProvider = withProvider(ToggleGroup.RootProvider, "root")
export type ToggleGroupRootProviderProps = ComponentProps<typeof ToggleGroupRootProvider>

export const ToggleGroupItem = withContext(ToggleGroup.Item, "item")
export type ToggleGroupItemProps = ComponentProps<typeof ToggleGroupItem>

export const ToggleGroupContext = ToggleGroup.Context
export type ToggleGroupContextProps = ToggleGroup.ContextProps
