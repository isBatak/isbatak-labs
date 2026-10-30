import { defineConditions } from "@pandacss/dev"

import { radiusCondition, radiusPresets } from "./radius"

export const conditions = defineConditions({
  extend: {
    icon: "& :where(svg)",
    iconStart: "& :where([data-icon-start])",
    iconEnd: "& :where([data-icon-end])",
    dark: ".dark &",
    light: ":root &, .light &",
    motionReduce: "@media (prefers-reduced-motion: reduce)",
    ...Object.fromEntries(radiusPresets.map((preset) => [radiusCondition(preset), `[data-radius="${preset}"] &`])),
  },
})
