"use client"

import { Caliper as ArkCaliper } from "@isbatak/ark-caliper/react"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "styled-system/jsx"
import { caliper } from "styled-system/recipes"

const { withProvider, withContext } = createSlotRecipeContext(caliper)

export const CaliperRoot = withProvider(ArkCaliper.Root, "root")
export type CaliperRootProps = ComponentProps<typeof CaliperRoot>

export const CaliperCanvas = withContext(ArkCaliper.Canvas, "canvas")
export type CaliperCanvasProps = ComponentProps<typeof CaliperCanvas>

export const CaliperCaption = withContext(ArkCaliper.Caption, "caption")
export type CaliperCaptionProps = ComponentProps<typeof CaliperCaption>

export const CaliperFrame = withContext(ArkCaliper.Frame, "frame")
export type CaliperFrameProps = ComponentProps<typeof CaliperFrame>

export const CaliperSubject = withContext(ArkCaliper.Subject, "subject")
export type CaliperSubjectProps = ComponentProps<typeof CaliperSubject>

export const CaliperOutline = withContext(ArkCaliper.Outline, "outline")
export type CaliperOutlineProps = ComponentProps<typeof CaliperOutline>

export const CaliperHatch = withContext(ArkCaliper.Hatch, "hatch")
export type CaliperHatchProps = ComponentProps<typeof CaliperHatch>

export const CaliperDimension = withContext(ArkCaliper.Dimension, "dimension")
export type CaliperDimensionProps = ComponentProps<typeof CaliperDimension>

export const CaliperDimensionLabel = withContext(ArkCaliper.DimensionLabel, "dimensionLabel")
export type CaliperDimensionLabelProps = ComponentProps<typeof CaliperDimensionLabel>

export const CaliperLegend = withContext(ArkCaliper.Legend, "legend")
export type CaliperLegendProps = ComponentProps<typeof CaliperLegend>

export const CaliperLegendItem = withContext(ArkCaliper.LegendItem, "legendItem")
export type CaliperLegendItemProps = ComponentProps<typeof CaliperLegendItem>

export const CaliperLegendSwatch = withContext(ArkCaliper.LegendSwatch, "legendSwatch")
export type CaliperLegendSwatchProps = ComponentProps<typeof CaliperLegendSwatch>

export const CaliperCallout = withContext(ArkCaliper.Callout, "callout")
export type CaliperCalloutProps = ComponentProps<typeof CaliperCallout>

export const CaliperCalloutLabel = withContext(ArkCaliper.CalloutLabel, "calloutLabel")
export type CaliperCalloutLabelProps = ComponentProps<typeof CaliperCalloutLabel>

export const CaliperCalloutTitle = withContext(ArkCaliper.CalloutTitle, "calloutTitle")
export type CaliperCalloutTitleProps = ComponentProps<typeof CaliperCalloutTitle>
