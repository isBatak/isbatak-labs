import { styled } from "styled-system/jsx"

export const DemoFrame = styled("div", {
  variants: {
    size: {
      sm: { w: "60" },
      lg: { w: "full", maxW: "xl" },
    },
  },
  defaultVariants: {
    size: "sm",
  },
})
