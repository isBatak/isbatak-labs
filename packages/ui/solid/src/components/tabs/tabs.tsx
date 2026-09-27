import { Tabs } from "@ark-ui/solid/tabs"
import type { ComponentProps } from "solid-js"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
import { tabs } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext } = createSlotRecipeContext(tabs)

export const TabsRoot = withProvider(Tabs.Root, "root")
export type TabsRootProps = ComponentProps<typeof TabsRoot>

export const TabsList = withContext(Tabs.List, "list")
export type TabsListProps = ComponentProps<typeof TabsList>

export const TabsTrigger = withContext(Tabs.Trigger, "trigger")
export type TabsTriggerProps = ComponentProps<typeof TabsTrigger>

export const TabsContent = withContext(Tabs.Content, "content")
export type TabsContentProps = ComponentProps<typeof TabsContent>

export const TabsIndicator = withContext(Tabs.Indicator, "indicator")
export type TabsIndicatorProps = ComponentProps<typeof TabsIndicator>

export const TabsContext = Tabs.Context
export type TabsContextProps = Tabs.ContextProps
