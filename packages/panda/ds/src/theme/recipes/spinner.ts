import { defineRecipe } from "@pandacss/dev"

export const spinnerRecipe = defineRecipe({
  className: "spinner",
  description: "Indeterminate loading spinner",
  base: {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderWidth: "{spacing.0.5}",
    borderRadius: "full",
    width: "var(--spinner-size)",
    height: "var(--spinner-size)",
    animation: "spin",
    animationDuration: "slowest",
    "--spinner-track-color": "transparent",
    borderBottomColor: "var(--spinner-track-color)",
    borderInlineStartColor: "var(--spinner-track-color)",
  },
  variants: {
    size: {
      inherit: {
        "--spinner-size": "1em",
      },
      xs: {
        "--spinner-size": "sizes.3",
        borderWidth: "0.09375rem",
      },
      sm: {
        "--spinner-size": "sizes.4",
        borderWidth: "0.09375rem",
      },
      md: {
        "--spinner-size": "sizes.5",
        borderWidth: "{spacing.0.5}",
      },
      lg: {
        "--spinner-size": "sizes.8",
        borderWidth: "0.15625rem",
      },
      xl: {
        "--spinner-size": "sizes.10",
        borderWidth: "0.1875rem",
      },
    },
    showTrack: {
      true: {
        "--spinner-track-color": "colors.colorPalette.subtle",
      },
    },
  },
  defaultVariants: {
    size: "md",
    showTrack: false,
  },
})
