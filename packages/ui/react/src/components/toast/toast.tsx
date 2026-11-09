"use client"

import { ark } from "@ark-ui/react/factory"
import { Toast, Toaster as ArkToaster, createToaster, useToastContext } from "@ark-ui/react/toast"
import type { ComponentProps, ReactNode } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
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

export function ToastCloseTrigger({ children, ...props }: ToastCloseTriggerProps) {
  if (children) return <StyledToastCloseTrigger {...props}>{children}</StyledToastCloseTrigger>
  return (
    <StyledToastCloseTrigger asChild {...props}>
      <CloseButton size="xs" />
    </StyledToastCloseTrigger>
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

export function ToastIndicator({ children, ...props }: ToastIndicatorProps) {
  const toast = useToastContext()
  const type = toast.type
  const content: ReactNode =
    children ??
    (type === "loading" ? (
      <Spinner size="sm" />
    ) : type && type in typeIcons ? (
      <Icon name={typeIcons[type as keyof typeof typeIcons]} />
    ) : null)
  if (!content) return null
  return <StyledToastIndicator {...props}>{content}</StyledToastIndicator>
}

export type ToasterProps = Omit<ComponentProps<typeof ArkToaster>, "children"> & {
  children?: ComponentProps<typeof ArkToaster>["children"]
}

export function Toaster({ children, ...props }: ToasterProps) {
  return (
    <ArkToaster {...props}>
      {children ??
        ((toast) => (
          <ToastRoot key={toast.id}>
            <ToastIndicator />
            <ToastBody>
              {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
              {toast.description && <ToastDescription>{toast.description}</ToastDescription>}
            </ToastBody>
            {toast.action && (
              <ToastActionTrigger asChild>
                <Button size="sm" variant="outline">
                  {toast.action.label}
                </Button>
              </ToastActionTrigger>
            )}
            {toast.closable !== false && <ToastCloseTrigger />}
          </ToastRoot>
        ))}
    </ArkToaster>
  )
}
