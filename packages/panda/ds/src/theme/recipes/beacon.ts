import { defineRecipe } from "@pandacss/dev"

export const beaconRecipe = defineRecipe({
  className: "beacon",
  description: "Pulsing dot that draws attention to a spot, such as a new feature or a live state",
  base: {
    display: "inline-block",
    flexShrink: 0,
    borderRadius: "full",
    forcedColorAdjust: "none",
    bg: "colorPalette.solid",
    "--ping-transform-scale": "2",
    _before: {
      content: '""',
      display: "block",
      boxSize: "full",
      borderRadius: "full",
      bg: "colorPalette.solid",
      animation: "ping 1s ease-in-out infinite",
      _motionReduce: {
        animation: "none",
      },
    },
  },
  variants: {
    size: {
      sm: {
        boxSize: "1",
        "--ping-transform-scale": "4",
      },
      md: {
        boxSize: "2",
      },
      lg: {
        boxSize: "3",
      },
      xl: {
        boxSize: "4",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})
