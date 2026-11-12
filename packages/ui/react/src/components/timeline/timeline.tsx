"use client"

import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { timeline } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext, PropsProvider } = createSlotRecipeContext(timeline)

export const TimelineRoot = withProvider(ark.div, "root")
export type TimelineRootProps = ComponentProps<typeof TimelineRoot>

export const TimelinePropsProvider = PropsProvider

export const TimelineItem = withContext(ark.div, "item")
export type TimelineItemProps = ComponentProps<typeof TimelineItem>

export const TimelineContent = withContext(ark.div, "content")
export type TimelineContentProps = ComponentProps<typeof TimelineContent>

export const TimelineSeparator = withContext(ark.div, "separator")
export type TimelineSeparatorProps = ComponentProps<typeof TimelineSeparator>

export const TimelineIndicator = withContext(ark.div, "indicator")
export type TimelineIndicatorProps = ComponentProps<typeof TimelineIndicator>

export const TimelineConnector = withContext(ark.div, "connector")
export type TimelineConnectorProps = ComponentProps<typeof TimelineConnector>

export const TimelineTitle = withContext(ark.h3, "title")
export type TimelineTitleProps = ComponentProps<typeof TimelineTitle>

export const TimelineDescription = withContext(ark.p, "description")
export type TimelineDescriptionProps = ComponentProps<typeof TimelineDescription>
