import { Collapsible } from "@ark-ui/vue/collapsible"
import { type Component, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { collapsible } from "@isbatak/panda-ds/recipes"
import { Icon } from "../icon"

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

export const CollapsibleIndicator = defineComponent({
  name: "CollapsibleIndicator",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      h(StyledCollapsibleIndicator as Component, attrs, () => slots.default?.() ?? h(Icon, { name: "chevron-down" }))
  },
}) as unknown as typeof StyledCollapsibleIndicator

export const CollapsibleContext = Collapsible.Context
export type CollapsibleContextProps = Collapsible.ContextProps
