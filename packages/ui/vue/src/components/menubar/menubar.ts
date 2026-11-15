import { Menu } from "@ark-ui/vue/menu"
import { Menubar } from "@ark-ui/vue/menubar"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { menubar } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext } = createSlotRecipeContext(menubar)

export const MenubarRoot = withProvider(Menubar.Root, "root")
export type MenubarRootProps = ComponentProps<typeof MenubarRoot>

export const MenubarRootProvider = withProvider(Menubar.RootProvider, "root")
export type MenubarRootProviderProps = ComponentProps<typeof MenubarRootProvider>

export const MenubarTrigger = withContext(Menu.Trigger, "trigger")
export type MenubarTriggerProps = ComponentProps<typeof MenubarTrigger>

export const MenubarContext = Menubar.Context
export type MenubarContextProps = Menubar.ContextProps
