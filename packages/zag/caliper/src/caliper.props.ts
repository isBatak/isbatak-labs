import { createProps } from "@zag-js/types"
import { createSplitProps } from "@zag-js/utils"
import type {
  BoxProps,
  CalloutProps,
  DimensionProps,
  FrameProps,
  IconGridProps,
  LegendSwatchProps,
} from "./caliper.types"

export const frameProps = createProps<FrameProps>()(["annotated", "magnify"])
export const splitFrameProps = createSplitProps<FrameProps>(frameProps)

export const boxProps = createProps<BoxProps>()(["spanX", "spanY"])
export const splitBoxProps = createSplitProps<BoxProps>(boxProps)

export const dimensionProps = createProps<DimensionProps>()([
  "distance",
  "extension",
  "line",
  "placement",
  "reach",
  "span",
  "ticks",
])
export const splitDimensionProps = createSplitProps<DimensionProps>(dimensionProps)

export const legendSwatchProps = createProps<LegendSwatchProps>()(["kind"])
export const splitLegendSwatchProps = createSplitProps<LegendSwatchProps>(legendSwatchProps)

export const calloutProps = createProps<CalloutProps>()(["align", "anchors", "bend", "to"])
export const splitCalloutProps = createSplitProps<CalloutProps>(calloutProps)

export const iconGridProps = createProps<IconGridProps>()(["spanX", "spanY", "trim", "units"])
export const splitIconGridProps = createSplitProps<IconGridProps>(iconGridProps)
