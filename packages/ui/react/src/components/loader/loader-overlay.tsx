"use client"

import { styled } from "@isbatak/panda-ds/jsx"
import type { ComponentProps } from "react"

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
