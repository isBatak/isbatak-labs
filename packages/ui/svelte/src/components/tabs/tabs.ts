import { Tabs } from "@ark-ui/svelte/tabs"

export { default as TabsRoot, type TabsRootProps } from "./tabs-root.svelte"
export { default as TabsList, type TabsListProps } from "./tabs-list.svelte"
export { default as TabsTrigger, type TabsTriggerProps } from "./tabs-trigger.svelte"
export { default as TabsContent, type TabsContentProps } from "./tabs-content.svelte"
export { default as TabsIndicator, type TabsIndicatorProps } from "./tabs-indicator.svelte"
export const TabsContext = Tabs.Context
export type TabsContextProps = Tabs.ContextProps
