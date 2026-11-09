import { ark } from "@ark-ui/solid/factory"
import { Toast, Toaster as ArkToaster, createToaster, useToastContext } from "@ark-ui/solid/toast"
import { type ComponentProps, type JSX, Match, Show, splitProps, Switch } from "solid-js"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
import { toast } from "@isbatak/panda-ds/recipes"

import { Button } from "../button/button"
import { CloseButton } from "../button/close-button"
import { Icon } from "../icon/icon"
import { Spinner } from "../spinner/spinner"

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

export function ToastCloseTrigger(props: ToastCloseTriggerProps) {
  const [local, rest] = splitProps(props, ["children"])
  return (
    <Show
      when={local.children}
      fallback={
        <StyledToastCloseTrigger asChild={(triggerProps) => <CloseButton {...triggerProps()} size="xs" />} {...rest} />
      }
    >
      <StyledToastCloseTrigger {...rest}>{local.children}</StyledToastCloseTrigger>
    </Show>
  )
}

const typeIcons = {
  success: "check-circle",
  error: "error",
  info: "info-circle",
  warning: "warning",
} as const

const StyledToastIndicator = withContext(ark.span, "indicator")
export type ToastIndicatorProps = ComponentProps<typeof StyledToastIndicator>

export function ToastIndicator(props: ToastIndicatorProps) {
  const [local, rest] = splitProps(props, ["children"])
  const toast = useToastContext()
  const icon = () => {
    const type = toast().type
    return type && type in typeIcons ? typeIcons[type as keyof typeof typeIcons] : undefined
  }
  return (
    <Show when={local.children || toast().type === "loading" || icon()}>
      <StyledToastIndicator {...rest}>
        <Switch>
          <Match when={local.children}>{local.children}</Match>
          <Match when={toast().type === "loading"}>
            <Spinner size="sm" />
          </Match>
          <Match when={icon()}>{(name) => <Icon name={name()} />}</Match>
        </Switch>
      </StyledToastIndicator>
    </Show>
  )
}

export type ToasterProps = Omit<ComponentProps<typeof ArkToaster>, "children"> & {
  children?: ComponentProps<typeof ArkToaster>["children"]
}

export function Toaster(props: ToasterProps) {
  const [local, rest] = splitProps(props, ["children"])
  const render: ComponentProps<typeof ArkToaster>["children"] = (toast) => (
    <ToastRoot>
      <ToastIndicator />
      <ToastBody>
        <Show when={toast().title}>
          <ToastTitle>{toast().title as JSX.Element}</ToastTitle>
        </Show>
        <Show when={toast().description}>
          <ToastDescription>{toast().description as JSX.Element}</ToastDescription>
        </Show>
      </ToastBody>
      <Show when={toast().action}>
        {(action) => (
          <ToastActionTrigger
            asChild={(triggerProps) => (
              <Button {...triggerProps()} size="sm" variant="outline">
                {action().label}
              </Button>
            )}
          />
        )}
      </Show>
      <Show when={toast().closable !== false}>
        <ToastCloseTrigger />
      </Show>
    </ToastRoot>
  )
  return <ArkToaster {...rest}>{local.children ?? render}</ArkToaster>
}
