import { defineRecipe } from "@pandacss/dev"

export const rippleRecipe = defineRecipe({
  className: "ripple",
  description:
    "Ink ripple that spreads from the press point on a clickable surface, as press feedback for cards, tiles or buttons",
  base: {
    position: "relative",
    overflow: "hidden",
    "& > [data-ripple]": {
      position: "absolute",
      left: "var(--ripple-x)",
      top: "var(--ripple-y)",
      boxSize: "var(--ripple-size)",
      translate: "-50% -50%",
      borderRadius: "full",
      pointerEvents: "none",
      bg: { base: "blackAlpha.200", _dark: "whiteAlpha.100" },
      "--scale-in-from": "0",
      animationName: "scale-in, fade-out",
      animationDuration: "slowest",
      animationTimingFunction: "ease-out",
      animationFillMode: "forwards",
      _motionReduce: {
        "--scale-in-from": "1",
      },
    },
    _disabled: {
      "& > [data-ripple]": {
        visibility: "hidden",
      },
    },
  },
})
