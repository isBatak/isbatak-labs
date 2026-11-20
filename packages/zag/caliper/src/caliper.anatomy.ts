import { createAnatomy } from "@zag-js/anatomy"

export const anatomy = createAnatomy("caliper").parts(
  "root",
  "canvas",
  "caption",
  "frame",
  "subject",
  "dimension",
  "dimensionLabel",
  "outline",
  "hatch",
  "legend",
  "legendItem",
  "legendSwatch",
  "callout",
  "calloutLeader",
  "calloutAnchor",
  "calloutLabel",
  "calloutTitle",
)

export const parts = anatomy.build()
