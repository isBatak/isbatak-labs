import { styled } from "@isbatak/solid-ui/jsx"
import type { ComponentProps } from "solid-js"

export const LoaderOverlay = styled("div", {
  base: {
    position: "absolute",
    inset: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "full",
    gap: "2",
  },
})

export type LoaderOverlayProps = ComponentProps<typeof LoaderOverlay>
