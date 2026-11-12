"use client"

import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { splitProps } from "@isbatak/panda-ds/helpers"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { stat, type StatVariantProps } from "@isbatak/panda-ds/recipes"

import { Icon } from "../icon/icon"
import { Group, type GroupProps } from "../group"

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

export function StatUpIndicator({ children, ...props }: StatUpIndicatorProps) {
  return <StyledStatUpIndicator {...props}>{children ?? <Icon name="arrow-up" />}</StyledStatUpIndicator>
}

const StyledStatDownIndicator = withContext(ark.span, "indicator", { defaultProps: { "data-type": "down" } })
export type StatDownIndicatorProps = ComponentProps<typeof StyledStatDownIndicator>

export function StatDownIndicator({ children, ...props }: StatDownIndicatorProps) {
  return <StyledStatDownIndicator {...props}>{children ?? <Icon name="arrow-down" />}</StyledStatDownIndicator>
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
