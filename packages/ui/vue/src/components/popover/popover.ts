import { ark } from "@ark-ui/vue/factory"
import { Popover } from "@ark-ui/vue/popover"
import { usePresenceContext } from "@ark-ui/vue/presence"
import { type Component, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { popover } from "@isbatak/panda-ds/recipes"
import { CloseButton } from "../button"
import { Icon } from "../icon"

const { withRootProvider, withContext } = createSlotRecipeContext(popover)

export const PopoverRoot = withRootProvider(Popover.Root)
export type PopoverRootProps = ComponentProps<typeof PopoverRoot>

export const PopoverTrigger = withContext(Popover.Trigger, "trigger")
export type PopoverTriggerProps = ComponentProps<typeof PopoverTrigger>

const StyledPopoverIndicator = withContext(Popover.Indicator, "indicator")
export type PopoverIndicatorProps = ComponentProps<typeof StyledPopoverIndicator>

export const PopoverIndicator = defineComponent({
  name: "PopoverIndicator",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      h(StyledPopoverIndicator as Component, attrs, () => slots.default?.() ?? h(Icon, { name: "chevron-down" }))
  },
}) as unknown as typeof StyledPopoverIndicator

const StyledPopoverBackdrop = withContext(ark.div, "backdrop")
export type PopoverBackdropProps = ComponentProps<typeof StyledPopoverBackdrop>

export const PopoverBackdrop = defineComponent({
  name: "PopoverBackdrop",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    const presence = usePresenceContext()
    return () => {
      if (presence.value.unmounted) return null
      const { hidden, "data-state": state } = presence.value.presenceProps
      return h(StyledPopoverBackdrop as Component, { hidden, "data-state": state, ...attrs }, slots)
    }
  },
}) as unknown as typeof StyledPopoverBackdrop

export const PopoverAnchor = withContext(Popover.Anchor, "anchor")
export type PopoverAnchorProps = ComponentProps<typeof PopoverAnchor>

export const PopoverPositioner = withContext(Popover.Positioner, "positioner")
export type PopoverPositionerProps = ComponentProps<typeof PopoverPositioner>

export const PopoverContent = withContext(Popover.Content, "content")
export type PopoverContentProps = ComponentProps<typeof PopoverContent>

export const PopoverArrow = withContext(Popover.Arrow, "arrow")
export type PopoverArrowProps = ComponentProps<typeof PopoverArrow>

export const PopoverArrowTip = withContext(Popover.ArrowTip, "arrowTip")
export type PopoverArrowTipProps = ComponentProps<typeof PopoverArrowTip>

export const PopoverTitle = withContext(Popover.Title, "title")
export type PopoverTitleProps = ComponentProps<typeof PopoverTitle>

export const PopoverDescription = withContext(Popover.Description, "description")
export type PopoverDescriptionProps = ComponentProps<typeof PopoverDescription>

const StyledPopoverCloseTrigger = withContext(Popover.CloseTrigger, "closeTrigger")
export type PopoverCloseTriggerProps = ComponentProps<typeof StyledPopoverCloseTrigger>

export const PopoverCloseTrigger = defineComponent({
  name: "PopoverCloseTrigger",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      slots.default
        ? h(StyledPopoverCloseTrigger as Component, attrs, slots)
        : h(StyledPopoverCloseTrigger as Component, { asChild: true, ...attrs }, () => h(CloseButton, { size: "sm" }))
  },
}) as unknown as typeof StyledPopoverCloseTrigger

export const PopoverHeader = withContext("div", "header")
export type PopoverHeaderProps = ComponentProps<typeof PopoverHeader>

export const PopoverBody = withContext("div", "body")
export type PopoverBodyProps = ComponentProps<typeof PopoverBody>

export const PopoverFooter = withContext("div", "footer")
export type PopoverFooterProps = ComponentProps<typeof PopoverFooter>

export const PopoverActionTrigger = Popover.CloseTrigger
export type PopoverActionTriggerProps = ComponentProps<typeof PopoverActionTrigger>

export const PopoverContext = Popover.Context
export type PopoverContextProps = Popover.ContextProps
