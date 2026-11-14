"use client"

import { ark } from "@ark-ui/react/factory"
import { createContext, useContext, type ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { alert } from "@isbatak/panda-ds/recipes"

import { Icon, type IconProps } from "../icon/icon"

type AlertStatus = "info" | "warning" | "success" | "error" | "neutral"

const AlertStatusContext = createContext<AlertStatus>("info")

const { withProvider, withContext, PropsProvider } = createSlotRecipeContext(alert)

const StyledAlertRoot = withProvider(ark.div, "root", { defaultProps: { role: "alert" } })
export type AlertRootProps = ComponentProps<typeof StyledAlertRoot>

export function AlertRoot(props: AlertRootProps) {
  return (
    <AlertStatusContext.Provider value={(typeof props.status === "string" ? props.status : "info") as AlertStatus}>
      <StyledAlertRoot {...props} />
    </AlertStatusContext.Provider>
  )
}

export const AlertPropsProvider = PropsProvider

export const AlertContent = withContext(ark.div, "content")
export type AlertContentProps = ComponentProps<typeof AlertContent>

export const AlertTitle = withContext(ark.div, "title")
export type AlertTitleProps = ComponentProps<typeof AlertTitle>

export const AlertDescription = withContext(ark.div, "description")
export type AlertDescriptionProps = ComponentProps<typeof AlertDescription>

const statusIcons: Record<AlertStatus, IconProps["name"]> = {
  info: "info-circle",
  warning: "warning",
  success: "check-circle",
  error: "error",
  neutral: "info-circle",
}

const StyledAlertIndicator = withContext(ark.span, "indicator")
export type AlertIndicatorProps = ComponentProps<typeof StyledAlertIndicator>

export function AlertIndicator({ children, ...props }: AlertIndicatorProps) {
  const status = useContext(AlertStatusContext)
  return <StyledAlertIndicator {...props}>{children ?? <Icon name={statusIcons[status]} />}</StyledAlertIndicator>
}
