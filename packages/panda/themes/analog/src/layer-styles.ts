import { defineLayerStyles } from "@pandacss/dev"

const grained = (level: string) => ({
  value: {
    backgroundColor: `elevation.${level}`,
    backgroundImage:
      "{assets.grain}, linear-gradient(to bottom, {colors.elevation.highlight}, {colors.elevation.shade})",
    backgroundSize: "{sizes.grain}, auto",
    boxShadow: `elevation.${level}`,
  },
})

export const layerStyles = defineLayerStyles({
  "elevation.sunken": {
    value: {
      backgroundColor: "elevation.sunken",
      backgroundImage: "{assets.grain}",
      backgroundSize: "{sizes.grain}",
      boxShadow: "elevation.sunken",
    },
  },
  "elevation.base": {
    value: {
      backgroundColor: "elevation.base",
      backgroundImage: "{assets.grain}",
      backgroundSize: "{sizes.grain}",
      boxShadow: "elevation.base",
    },
  },
  "elevation.raised": grained("raised"),
  "elevation.floating": grained("floating"),
  "elevation.overlay": grained("overlay"),
  pressed: {
    value: {
      backgroundColor: "elevation.sunken",
      backgroundImage:
        "{assets.grain}, linear-gradient(to bottom, {colors.elevation.shade}, {colors.elevation.highlight})",
      backgroundSize: "{sizes.grain}, auto",
      boxShadow: "pressed",
    },
  },
})
