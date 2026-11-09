import { ark } from "@ark-ui/vue/factory"
import { Popover } from "@ark-ui/vue/popover"
import { type Component, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { actionBar } from "@isbatak/panda-ds/recipes"
import { CloseButton } from "../button"

const { withRootProvider, withContext } = createSlotRecipeContext(actionBar)

export const ActionBarRoot = withRootProvider(Popover.Root, {
  defaultProps: {
    lazyMount: true,
    unmountOnExit: true,
    modal: false,
    autoFocus: false,
    closeOnInteractOutside: false,
  },
})
export type ActionBarRootProps = ComponentProps<typeof ActionBarRoot>

export const ActionBarPositioner = withContext(ark.div, "positioner")
export type ActionBarPositionerProps = ComponentProps<typeof ActionBarPositioner>

export const ActionBarContent = withContext(Popover.Content, "content")
export type ActionBarContentProps = ComponentProps<typeof ActionBarContent>

export const ActionBarSeparator = withContext(ark.div, "separator")
export type ActionBarSeparatorProps = ComponentProps<typeof ActionBarSeparator>

export const ActionBarSelectionTrigger = withContext(ark.button, "selectionTrigger")
export type ActionBarSelectionTriggerProps = ComponentProps<typeof ActionBarSelectionTrigger>

const StyledActionBarCloseTrigger = withContext(Popover.CloseTrigger, "closeTrigger")
export type ActionBarCloseTriggerProps = ComponentProps<typeof StyledActionBarCloseTrigger>

export const ActionBarCloseTrigger = defineComponent({
  name: "ActionBarCloseTrigger",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      slots.default
        ? h(StyledActionBarCloseTrigger as Component, attrs, slots)
        : h(StyledActionBarCloseTrigger as Component, { asChild: true, ...attrs }, () => h(CloseButton, { size: "sm" }))
  },
}) as unknown as typeof StyledActionBarCloseTrigger

export const ActionBarContext = Popover.Context
export type ActionBarContextProps = Popover.ContextProps
