import { ark } from "@ark-ui/solid/factory"
import { Steps, useStepsItemContext } from "@ark-ui/solid/steps"
import { type ComponentProps, type JSX, Match, Switch, splitProps } from "solid-js"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
import { steps } from "@isbatak/panda-ds/recipes"

import { Icon } from "../icon/icon"

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

export interface StepsStatusProps {
  complete: JSX.Element
  incomplete: JSX.Element
  current?: JSX.Element | undefined
}

export function StepsStatus(props: StepsStatusProps) {
  const item = useStepsItemContext()
  return (
    <Switch fallback={props.incomplete}>
      <Match when={item().current}>{props.current ?? props.incomplete}</Match>
      <Match when={item().completed}>{props.complete}</Match>
    </Switch>
  )
}

export type StepsNumberProps = ComponentProps<typeof ark.span>

export function StepsNumber(props: StepsNumberProps) {
  const [local, rest] = splitProps(props, ["children"])
  const item = useStepsItemContext()
  return <ark.span {...rest}>{local.children ?? item().index + 1}</ark.span>
}

const StyledStepsIndicator = withContext(Steps.Indicator, "indicator")
export type StepsIndicatorProps = ComponentProps<typeof StyledStepsIndicator>

export function StepsIndicator(props: StepsIndicatorProps) {
  const [local, rest] = splitProps(props, ["children"])
  return (
    <StyledStepsIndicator {...rest}>
      {local.children ?? <StepsStatus complete={<Icon name="check" />} incomplete={<StepsNumber />} />}
    </StyledStepsIndicator>
  )
}

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
