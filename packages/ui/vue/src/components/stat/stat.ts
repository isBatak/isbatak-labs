import { ark } from "@ark-ui/vue/factory"
import { splitProps } from "@isbatak/panda-ds/helpers"
import { stat, type StatVariantProps } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { type Component, type FunctionalComponent, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

import { Group, type GroupProps } from "../group"
import { Icon } from "../icon"

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

export const StatUpIndicator = defineComponent({
  name: "StatUpIndicator",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      h(StyledStatUpIndicator as Component, attrs, slots.default ? slots : () => h(Icon, { name: "arrow-up" }))
  },
}) as unknown as typeof StyledStatUpIndicator

const StyledStatDownIndicator = withContext(ark.span, "indicator", { defaultProps: { "data-type": "down" } })
export type StatDownIndicatorProps = ComponentProps<typeof StyledStatDownIndicator>

export const StatDownIndicator = defineComponent({
  name: "StatDownIndicator",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      h(StyledStatDownIndicator as Component, attrs, slots.default ? slots : () => h(Icon, { name: "arrow-down" }))
  },
}) as unknown as typeof StyledStatDownIndicator

export type StatGroupProps = GroupProps & StatVariantProps

export const StatGroup: FunctionalComponent<StatGroupProps> = (props, { slots }) => {
  const [variantProps, groupProps] = splitProps(props, stat.variantKeys)
  return h(PropsProvider, { value: variantProps }, () =>
    h(
      Group,
      { role: "group", flexWrap: "wrap", justifyContent: "space-around", alignItems: "flex-start", ...groupProps },
      slots,
    ),
  )
}
