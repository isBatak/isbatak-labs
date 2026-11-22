import { Caliper as ArkCaliper } from "@isbatak/ark-caliper/react"

import { createSlotRecipeContext } from "../../styled-system/jsx"
import { caliper } from "../../styled-system/recipes"

const { withProvider, withContext } = createSlotRecipeContext(caliper)

export const Root = withProvider(ArkCaliper.Root, "root")
export const Frame = withContext(ArkCaliper.Frame, "frame")
export const Subject = withContext(ArkCaliper.Subject, "subject")
export const Outline = withContext(ArkCaliper.Outline, "outline")
export const Hatch = withContext(ArkCaliper.Hatch, "hatch")
export const Dimension = withContext(ArkCaliper.Dimension, "dimension")
export const DimensionLabel = withContext(ArkCaliper.DimensionLabel, "dimensionLabel")
export const Legend = withContext(ArkCaliper.Legend, "legend")
export const LegendItem = withContext(ArkCaliper.LegendItem, "legendItem")
export const LegendSwatch = withContext(ArkCaliper.LegendSwatch, "legendSwatch")
export const Callout = withContext(ArkCaliper.Callout, "callout")
export const CalloutLabel = withContext(ArkCaliper.CalloutLabel, "calloutLabel")
export const CalloutTitle = withContext(ArkCaliper.CalloutTitle, "calloutTitle")
export const IconGrid = withContext(ArkCaliper.IconGrid, "iconGrid")
