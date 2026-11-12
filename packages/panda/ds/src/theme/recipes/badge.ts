import { defineRecipe } from "@pandacss/dev"

export const badgeRecipe = defineRecipe({
  className: "badge",
  description: "Small non-interactive label for status or counts; use tag when it can be removed",
  base: {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: "l1",
    gap: "1",
    fontWeight: "medium",
    fontVariantNumeric: "tabular-nums",
    whiteSpace: "nowrap",
    userSelect: "none",
    _icon: {
      flexShrink: 0,
      boxSize: "var(--badge-icon-size)",
    },
    _iconStart: {
      ms: "calc(var(--badge-icon-offset) * -1)",
    },
    _iconEnd: {
      me: "calc(var(--badge-icon-offset) * -1)",
    },
  },
  variants: {
    variant: {
      solid: {
        bg: "colorPalette.solid",
        color: "colorPalette.contrast",
      },
      subtle: {
        bg: "colorPalette.subtle",
        color: "colorPalette.fg",
      },
      outline: {
        color: "colorPalette.fg",
        "--outline-shadow-legacy": "colors.colorPalette.muted",
        "--outline-shadow": "colors.colorPalette.border",
        shadow: "inset 0 0 0px 1px var(--shadow-color)",
        shadowColor: "var(--outline-shadow, var(--outline-shadow-legacy))",
      },
      surface: {
        bg: "colorPalette.subtle",
        color: "colorPalette.fg",
        shadow: "inset 0 0 0px 1px var(--shadow-color)",
        shadowColor: "colorPalette.muted",
      },
      plain: {
        color: "colorPalette.fg",
      },
    },
    size: {
      "2xs": {
        "--badge-icon-size": "sizes.2.5",
        "--badge-icon-offset": "spacing.0.5",
        textStyle: "2xs",
        px: "1",
        minH: "3.5",
        gap: "0.5",
      },
      xs: {
        "--badge-icon-size": "sizes.2.5",
        "--badge-icon-offset": "spacing.0.5",
        textStyle: "2xs",
        px: "1.5",
        minH: "4",
      },
      sm: {
        "--badge-icon-size": "sizes.3",
        "--badge-icon-offset": "spacing.0.5",
        textStyle: "xs",
        px: "2",
        minH: "5",
      },
      md: {
        "--badge-icon-size": "sizes.3.5",
        "--badge-icon-offset": "spacing.0.5",
        textStyle: "sm",
        px: "2.5",
        minH: "6",
      },
      lg: {
        "--badge-icon-size": "sizes.4",
        "--badge-icon-offset": "spacing.1",
        textStyle: "sm",
        px: "3",
        minH: "7",
        gap: "1.5",
      },
    },
    status: {
      true: {
        _before: {
          content: '""',
          width: "0.64em",
          height: "0.64em",
          flexShrink: 0,
          borderRadius: "full",
          forcedColorAdjust: "none",
          bg: "colorPalette.solid",
          ms: "calc(var(--badge-icon-offset) * -1)",
        },
      },
    },
  },
  compoundVariants: [
    {
      variant: "solid",
      status: true,
      css: {
        _before: {
          bg: "colorPalette.contrast",
        },
      },
    },
    {
      variant: "outline",
      status: true,
      css: {
        color: "fg",
        shadowColor: "border",
      },
    },
  ],
  defaultVariants: {
    variant: "subtle",
    size: "sm",
    status: false,
  },
})
