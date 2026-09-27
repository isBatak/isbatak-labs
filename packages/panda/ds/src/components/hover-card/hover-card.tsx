"use client"

import { HoverCard } from "@ark-ui/react/hover-card"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { hoverCard } from "@isbatak/panda-ds/recipes"

const { withRootProvider, withContext } = createSlotRecipeContext(hoverCard)

export const HoverCardRoot = withRootProvider(HoverCard.Root)
export type HoverCardRootProps = ComponentProps<typeof HoverCardRoot>

export const HoverCardTrigger = withContext(HoverCard.Trigger, "trigger")
export type HoverCardTriggerProps = ComponentProps<typeof HoverCardTrigger>

export const HoverCardPositioner = withContext(HoverCard.Positioner, "positioner")
export type HoverCardPositionerProps = ComponentProps<typeof HoverCardPositioner>

export const HoverCardContent = withContext(HoverCard.Content, "content")
export type HoverCardContentProps = ComponentProps<typeof HoverCardContent>

export const HoverCardArrow = withContext(HoverCard.Arrow, "arrow")
export type HoverCardArrowProps = ComponentProps<typeof HoverCardArrow>

export const HoverCardArrowTip = withContext(HoverCard.ArrowTip, "arrowTip")
export type HoverCardArrowTipProps = ComponentProps<typeof HoverCardArrowTip>

export const HoverCardContext = HoverCard.Context
export type HoverCardContextProps = HoverCard.ContextProps
