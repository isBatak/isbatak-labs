import { ark } from "@ark-ui/solid/factory"
import { splitProps } from "@isbatak/panda-ds/helpers"
import { stat, type StatVariantProps } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
import { type ComponentProps, Show, splitProps as splitSolidProps } from "solid-js"

import { Group, type GroupProps } from "../group"
import { Icon } from "../icon/icon"

const { withProvider, withContext, PropsProvider } = createSlotRecipeContext(stat)

export const StatRoot = withProvider(ark.dl, "root")
export type StatRootProps = ComponentProps<typeof StatRoot>

export const StatPropsProvider = PropsProvider

export const StatLabel = withContext(ark.dt, "label")
export type StatLabelProps = ComponentProps<typeof StatLabel>

export const StatValueText = withContext(ark.dd, "valueText")
export type StatValueTextProps = ComponentProps<typeof StatValueText>

export const StatHelpText = withContext(ark.span, "helpText")
export type StatHelpTextProps = ComponentProps<typeof StatHelpText>

export const StatValueUnit = withContext(ark.span, "valueUnit")
export type StatValueUnitProps = ComponentProps<typeof StatValueUnit>

const StyledStatUpIndicator = withContext(ark.span, "indicator", { defaultProps: { "data-type": "up" } })
export type StatUpIndicatorProps = ComponentProps<typeof StyledStatUpIndicator>

export function StatUpIndicator(props: StatUpIndicatorProps) {
  const [local, rest] = splitSolidProps(props, ["children"])
  return (
    <StyledStatUpIndicator {...rest}>
      <Show when={local.children} fallback={<Icon name="arrow-up" />}>
        {local.children}
      </Show>
    </StyledStatUpIndicator>
  )
}

const StyledStatDownIndicator = withContext(ark.span, "indicator", { defaultProps: { "data-type": "down" } })
export type StatDownIndicatorProps = ComponentProps<typeof StyledStatDownIndicator>

export function StatDownIndicator(props: StatDownIndicatorProps) {
  const [local, rest] = splitSolidProps(props, ["children"])
  return (
    <StyledStatDownIndicator {...rest}>
      <Show when={local.children} fallback={<Icon name="arrow-down" />}>
        {local.children}
      </Show>
    </StyledStatDownIndicator>
  )
}

export interface StatGroupProps extends GroupProps, StatVariantProps {}

export function StatGroup(props: StatGroupProps) {
  const [variantProps, groupProps] = splitProps(props, stat.variantKeys)
  return (
    <PropsProvider value={variantProps}>
      <Group role="group" flexWrap="wrap" justifyContent="space-around" alignItems="flex-start" {...groupProps} />
    </PropsProvider>
  )
}
