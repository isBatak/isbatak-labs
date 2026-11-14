import { ark } from "@ark-ui/vue/factory"
import { alert } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { type Component, computed, defineComponent, h, inject, provide, type ComputedRef } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

import { Icon } from "../icon"

type AlertStatus = "info" | "warning" | "success" | "error" | "neutral"

const alertStatusKey = Symbol("alert-status")

const { withProvider, withContext, PropsProvider } = createSlotRecipeContext(alert)

const StyledAlertRoot = withProvider(ark.div, "root", { defaultProps: { role: "alert" } })
export type AlertRootProps = ComponentProps<typeof StyledAlertRoot>

export const AlertRoot = defineComponent({
  name: "AlertRoot",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    provide(
      alertStatusKey,
      computed(() => (attrs.status as AlertStatus | undefined) ?? "info"),
    )
    return () => h(StyledAlertRoot as Component, attrs, slots)
  },
}) as unknown as typeof StyledAlertRoot

export const AlertPropsProvider = PropsProvider

export const AlertContent = withContext(ark.div, "content")
export type AlertContentProps = ComponentProps<typeof AlertContent>

export const AlertTitle = withContext(ark.div, "title")
export type AlertTitleProps = ComponentProps<typeof AlertTitle>

export const AlertDescription = withContext(ark.div, "description")
export type AlertDescriptionProps = ComponentProps<typeof AlertDescription>

const statusIcons = {
  info: "info-circle",
  warning: "warning",
  success: "check-circle",
  error: "error",
  neutral: "info-circle",
} as const

const StyledAlertIndicator = withContext(ark.span, "indicator")
export type AlertIndicatorProps = ComponentProps<typeof StyledAlertIndicator>

export const AlertIndicator = defineComponent({
  name: "AlertIndicator",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    const status = inject<ComputedRef<AlertStatus>>(
      alertStatusKey,
      computed(() => "info"),
    )
    return () =>
      h(
        StyledAlertIndicator as Component,
        attrs,
        slots.default ? slots : () => h(Icon, { name: statusIcons[status.value] }),
      )
  },
}) as unknown as typeof StyledAlertIndicator
