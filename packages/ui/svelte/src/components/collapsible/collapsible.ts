import { Collapsible } from "@ark-ui/svelte/collapsible"

export { default as CollapsibleRoot, type CollapsibleRootProps } from "./collapsible-root.svelte"
export {
  default as CollapsibleRootProvider,
  type CollapsibleRootProviderProps,
} from "./collapsible-root-provider.svelte"
export { default as CollapsibleTrigger, type CollapsibleTriggerProps } from "./collapsible-trigger.svelte"
export { default as CollapsibleContent, type CollapsibleContentProps } from "./collapsible-content.svelte"
export { default as CollapsibleIndicator, type CollapsibleIndicatorProps } from "./collapsible-indicator.svelte"
export const CollapsibleContext = Collapsible.Context
export type CollapsibleContextProps = Collapsible.ContextProps
