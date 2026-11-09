import { ark } from "@ark-ui/vue/factory"
import { Toast, Toaster as ArkToaster, type ToastOptions, createToaster, useToastContext } from "@ark-ui/vue/toast"
import { type Component, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { toast } from "@isbatak/panda-ds/recipes"
import { Button, CloseButton } from "../button"
import { Icon } from "../icon"
import { Spinner } from "../spinner"

const { withProvider, withContext } = createSlotRecipeContext(toast)

export { createToaster }

export const ToastRoot = withProvider(Toast.Root, "root")
export type ToastRootProps = ComponentProps<typeof ToastRoot>

export const ToastBody = withContext(ark.div, "body")
export type ToastBodyProps = ComponentProps<typeof ToastBody>

export const ToastTitle = withContext(Toast.Title, "title")
export type ToastTitleProps = ComponentProps<typeof ToastTitle>

export const ToastDescription = withContext(Toast.Description, "description")
export type ToastDescriptionProps = ComponentProps<typeof ToastDescription>

export const ToastActionTrigger = withContext(Toast.ActionTrigger, "actionTrigger")
export type ToastActionTriggerProps = ComponentProps<typeof ToastActionTrigger>

const StyledToastCloseTrigger = withContext(Toast.CloseTrigger, "closeTrigger")
export type ToastCloseTriggerProps = ComponentProps<typeof StyledToastCloseTrigger>

export const ToastCloseTrigger = defineComponent({
  name: "ToastCloseTrigger",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      slots.default
        ? h(StyledToastCloseTrigger as Component, attrs, slots)
        : h(StyledToastCloseTrigger as Component, { asChild: true, ...attrs }, () => h(CloseButton, { size: "xs" }))
  },
}) as unknown as typeof StyledToastCloseTrigger

const typeIcons = {
  success: "check-circle",
  error: "error",
  info: "info-circle",
  warning: "warning",
} as const

const StyledToastIndicator = withContext(ark.span, "indicator")
export type ToastIndicatorProps = ComponentProps<typeof StyledToastIndicator>

export const ToastIndicator = defineComponent({
  name: "ToastIndicator",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    const toast = useToastContext()
    return () => {
      const type = toast.value.type
      const content = slots.default
        ? slots.default()
        : type === "loading"
          ? h(Spinner, { size: "sm" })
          : type && type in typeIcons
            ? h(Icon, { name: typeIcons[type as keyof typeof typeIcons] })
            : null
      if (!content) return null
      return h(StyledToastIndicator as Component, attrs, () => content)
    }
  },
}) as unknown as typeof StyledToastIndicator

export type ToasterProps = ComponentProps<typeof ArkToaster>

export const Toaster = defineComponent({
  name: "Toaster",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    const render = (toast: ToastOptions) =>
      h(ToastRoot as Component, { key: toast.id }, () => [
        h(ToastIndicator as Component),
        h(ToastBody as Component, null, () => [
          toast.title ? h(ToastTitle as Component, null, () => toast.title) : null,
          toast.description ? h(ToastDescription as Component, null, () => toast.description) : null,
        ]),
        toast.action
          ? h(ToastActionTrigger as Component, { asChild: true }, () =>
              h(Button, { size: "sm", variant: "outline" }, () => toast.action?.label),
            )
          : null,
        toast.closable !== false ? h(ToastCloseTrigger as Component) : null,
      ])
    return () => h(ArkToaster as Component, attrs, { default: slots.default ?? render })
  },
}) as unknown as typeof ArkToaster
