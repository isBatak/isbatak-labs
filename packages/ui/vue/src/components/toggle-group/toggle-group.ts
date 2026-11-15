import { ToggleGroup } from "@ark-ui/vue/toggle-group"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
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
