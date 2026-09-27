import { styled } from "@isbatak/ui-vue/jsx"
import type { ComponentProps } from "vue-component-type-helpers"

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

LoaderOverlay.displayName = "LoaderOverlay"

export type LoaderOverlayProps = ComponentProps<typeof LoaderOverlay>
