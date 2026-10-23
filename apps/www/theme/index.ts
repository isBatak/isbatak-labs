import type { ExtendableTheme } from "@pandacss/types"

import { avatar } from "./recipes/avatar"
import { hint } from "./recipes/hint"
import { layoutContainer } from "./recipes/layout-container"

export const theme = {
  extend: {
    tokens: {
      fonts: {
        body: { value: "var(--font-body), ui-sans-serif, system-ui, sans-serif" },
        heading: { value: "var(--font-body), ui-sans-serif, system-ui, sans-serif" },
        mono: { value: "var(--font-mono), ui-monospace, SFMono-Regular, monospace" },
      },
      sizes: {
        header: { value: "3.5rem" },
        layout: { value: "{sizes.6xl}" },
        layoutWide: { value: "86rem" },
        subnav: { value: "3.25rem" },
      },
    },
    semanticTokens: {
      colors: {
        code: {
          keyword: { value: { base: "#C8381C", _dark: "#E6583E" } },
          string: { value: { base: "#15803D", _dark: "#1EB322" } },
          class: { value: { base: "#4D7C0F", _dark: "#A6E22E" } },
          identifier: { value: { base: "#A16207", _dark: "#FCB065" } },
          sign: { value: { base: "#52525B", _dark: "#D1D8E0" } },
          property: { value: { base: "#B45309", _dark: "#FD971F" } },
          entity: { value: { base: "#0F766E", _dark: "#1DD1A1" } },
          jsxliterals: { value: { base: "#27272A", _dark: "#F8F2F2" } },
          comment: { value: { base: "#78716C", _dark: "#75715E" } },
        },
      },
    },
    keyframes: {
      "scroll-blur-out": {
        to: { opacity: "0", backdropFilter: "blur(0)" },
      },
    },
    viewTransitions: {
      "drawer-slide": {
        group: {
          animationDuration: "moderate",
          animationTimingFunction: "ease-in-smooth",
        },
        old: {
          animationName: "slide-to-bottom-full, fade-out",
        },
        new: {
          animationName: "slide-from-bottom-full, fade-in",
        },
      },
    },
    recipes: {
      layoutContainer,
      // Icons default to the surrounding font size; `size` variants override it
      icon: { base: { boxSize: "1em" } },
    },
    slotRecipes: {
      avatar,
      hint,
    },
  },
} satisfies ExtendableTheme
