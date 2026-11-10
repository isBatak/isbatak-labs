import { ark } from "@ark-ui/vue/factory"
import { Steps, useStepsItemContext } from "@ark-ui/vue/steps"
import { type Component, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { steps } from "@isbatak/panda-ds/recipes"
import { Icon } from "../icon"

const { withProvider, withContext } = createSlotRecipeContext(steps)

export const StepsRoot = withProvider(Steps.Root, "root", { forwardProps: ["orientation"] })
export type StepsRootProps = ComponentProps<typeof StepsRoot>

export const StepsRootProvider = withProvider(Steps.RootProvider, "root")
export type StepsRootProviderProps = ComponentProps<typeof StepsRootProvider>

export const StepsList = withContext(Steps.List, "list")
export type StepsListProps = ComponentProps<typeof StepsList>

export const StepsItem = withContext(Steps.Item, "item")
export type StepsItemProps = ComponentProps<typeof StepsItem>

export const StepsTrigger = withContext(Steps.Trigger, "trigger")
export type StepsTriggerProps = ComponentProps<typeof StepsTrigger>

export const StepsStatus = defineComponent({
  name: "StepsStatus",
  setup(_, { slots }) {
    const item = useStepsItemContext()
    return () => {
      if (item.value.current) return (slots.current ?? slots.incomplete)?.()
      if (item.value.completed) return slots.complete?.()
      return slots.incomplete?.()
    }
  },
})
export type StepsStatusProps = ComponentProps<typeof StepsStatus>

export const StepsNumber = defineComponent({
  name: "StepsNumber",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    const item = useStepsItemContext()
    return () => h(ark.span as Component, attrs, () => slots.default?.() ?? item.value.index + 1)
  },
})
export type StepsNumberProps = ComponentProps<typeof StepsNumber>

const StyledStepsIndicator = withContext(Steps.Indicator, "indicator")
export type StepsIndicatorProps = ComponentProps<typeof StyledStepsIndicator>

export const StepsIndicator = defineComponent({
  name: "StepsIndicator",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      h(
        StyledStepsIndicator as Component,
        attrs,
        () =>
          slots.default?.() ??
          h(StepsStatus, null, { complete: () => h(Icon, { name: "check" }), incomplete: () => h(StepsNumber) }),
      )
  },
}) as unknown as typeof StyledStepsIndicator

export const StepsSeparator = withContext(Steps.Separator, "separator")
export type StepsSeparatorProps = ComponentProps<typeof StepsSeparator>

export const StepsTitle = withContext(ark.div, "title")
export type StepsTitleProps = ComponentProps<typeof StepsTitle>

export const StepsDescription = withContext(ark.div, "description")
export type StepsDescriptionProps = ComponentProps<typeof StepsDescription>

export const StepsContent = withContext(Steps.Content, "content")
export type StepsContentProps = ComponentProps<typeof StepsContent>

export const StepsCompletedContent = withContext(Steps.CompletedContent, "content")
export type StepsCompletedContentProps = ComponentProps<typeof StepsCompletedContent>

export const StepsPrevTrigger = withContext(Steps.PrevTrigger, "prevTrigger")
export type StepsPrevTriggerProps = ComponentProps<typeof StepsPrevTrigger>

export const StepsNextTrigger = withContext(Steps.NextTrigger, "nextTrigger")
export type StepsNextTriggerProps = ComponentProps<typeof StepsNextTrigger>

export const StepsProgress = withContext(Steps.Progress, "progress")
export type StepsProgressProps = ComponentProps<typeof StepsProgress>

export const StepsContext = Steps.Context
export type StepsContextProps = Steps.ContextProps

export const StepsItemContext = Steps.ItemContext
export type StepsItemContextProps = Steps.ItemContextProps
