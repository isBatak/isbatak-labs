"use client"

import { Progress } from "@ark-ui/react/progress"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { progressCircle } from "@isbatak/panda-ds/recipes"
import type { ComponentProps } from "react"

const { withProvider, withContext, PropsProvider } = createSlotRecipeContext(progressCircle)

export const ProgressCircleRoot = withProvider(Progress.Root, "root")
export type ProgressCircleRootProps = ComponentProps<typeof ProgressCircleRoot>

export const ProgressCircleRootProvider = withProvider(Progress.RootProvider, "root")
export type ProgressCircleRootProviderProps = ComponentProps<typeof ProgressCircleRootProvider>

export const ProgressCirclePropsProvider = PropsProvider

export const ProgressCircleLabel = withContext(Progress.Label, "label")
export type ProgressCircleLabelProps = ComponentProps<typeof ProgressCircleLabel>

export const ProgressCircleCircle = withContext(Progress.Circle, "circle")
export type ProgressCircleCircleProps = ComponentProps<typeof ProgressCircleCircle>

export const ProgressCircleTrack = withContext(Progress.CircleTrack, "circleTrack")
export type ProgressCircleTrackProps = ComponentProps<typeof ProgressCircleTrack>

export const ProgressCircleRange = withContext(Progress.CircleRange, "circleRange")
export type ProgressCircleRangeProps = ComponentProps<typeof ProgressCircleRange>

export const ProgressCircleValueText = withContext(Progress.ValueText, "valueText")
export type ProgressCircleValueTextProps = ComponentProps<typeof ProgressCircleValueText>

export const ProgressCircleContext = Progress.Context
export type ProgressCircleContextProps = Progress.ContextProps
