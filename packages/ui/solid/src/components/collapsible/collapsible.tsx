import { Collapsible } from "@ark-ui/solid/collapsible"
import { type ComponentProps, splitProps } from "solid-js"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
import { collapsible } from "@isbatak/panda-ds/recipes"

import { Icon } from "../icon/icon"

const { withProvider, withContext } = createSlotRecipeContext(collapsible)

export const CollapsibleRoot = withProvider(Collapsible.Root, "root")
export type CollapsibleRootProps = ComponentProps<typeof CollapsibleRoot>

export const CollapsibleRootProvider = withProvider(Collapsible.RootProvider, "root")
export type CollapsibleRootProviderProps = ComponentProps<typeof CollapsibleRootProvider>

export const CollapsibleTrigger = withContext(Collapsible.Trigger, "trigger")
export type CollapsibleTriggerProps = ComponentProps<typeof CollapsibleTrigger>

export const CollapsibleContent = withContext(Collapsible.Content, "content")
export type CollapsibleContentProps = ComponentProps<typeof CollapsibleContent>

const StyledCollapsibleIndicator = withContext(Collapsible.Indicator, "indicator")
export type CollapsibleIndicatorProps = ComponentProps<typeof StyledCollapsibleIndicator>

export function CollapsibleIndicator(props: CollapsibleIndicatorProps) {
  const [local, rest] = splitProps(props, ["children"])
  return (
    <StyledCollapsibleIndicator {...rest}>{local.children ?? <Icon name="chevron-down" />}</StyledCollapsibleIndicator>
  )
}

export const CollapsibleContext = Collapsible.Context
export type CollapsibleContextProps = Collapsible.ContextProps
