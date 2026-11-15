"use client"

import { Timer } from "@ark-ui/react/timer"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { timer } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext } = createSlotRecipeContext(timer)

export const TimerRoot = withProvider(Timer.Root, "root")
export type TimerRootProps = ComponentProps<typeof TimerRoot>

export const TimerRootProvider = withProvider(Timer.RootProvider, "root")
export type TimerRootProviderProps = ComponentProps<typeof TimerRootProvider>

export const TimerArea = withContext(Timer.Area, "area")
export type TimerAreaProps = ComponentProps<typeof TimerArea>

export const TimerItemGroup = withContext("div", "itemGroup")
export type TimerItemGroupProps = ComponentProps<typeof TimerItemGroup>

export const TimerItem = withContext(Timer.Item, "item")
export type TimerItemProps = ComponentProps<typeof TimerItem>

export const TimerItemLabel = withContext("span", "itemLabel")
export type TimerItemLabelProps = ComponentProps<typeof TimerItemLabel>

export const TimerSeparator = withContext(Timer.Separator, "separator")
export type TimerSeparatorProps = ComponentProps<typeof TimerSeparator>

export const TimerControl = withContext(Timer.Control, "control")
export type TimerControlProps = ComponentProps<typeof TimerControl>

export const TimerActionTrigger = withContext(Timer.ActionTrigger, "actionTrigger")
export type TimerActionTriggerProps = ComponentProps<typeof TimerActionTrigger>

export const TimerContext = Timer.Context
export type TimerContextProps = Timer.ContextProps
