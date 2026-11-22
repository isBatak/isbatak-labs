import { defineSlotRecipe } from "@pandacss/dev"

export const timerSlotRecipe = defineSlotRecipe({
  className: "timer",
  description:
    "Running stopwatch or countdown that shows days, hours, minutes and seconds with start, pause, resume and reset actions",
  slots: ["root", "area", "itemGroup", "item", "itemLabel", "separator", "control", "actionTrigger"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "4",
      color: "fg",
    },
    area: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--timer-gap)",
    },
    itemGroup: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minWidth: "var(--timer-group-min-width)",
    },
    item: {
      fontWeight: "semibold",
      fontVariantNumeric: "tabular-nums",
      minWidth: "[2ch]",
      textAlign: "center",
      color: "fg",
    },
    itemLabel: {
      color: "fg.muted",
      userSelect: "none",
    },
    separator: {
      fontWeight: "semibold",
      color: "fg.subtle",
      userSelect: "none",
    },
    control: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "2",
    },
    actionTrigger: {
      display: "inline-flex",
      appearance: "none",
      alignItems: "center",
      justifyContent: "center",
      gap: "2",
      flexShrink: "0",
      position: "relative",
      h: "var(--timer-trigger-height)",
      minW: "var(--timer-trigger-height)",
      px: "var(--timer-trigger-padding)",
      textStyle: "sm",
      fontWeight: "medium",
      lineHeight: "1.2",
      whiteSpace: "nowrap",
      userSelect: "none",
      color: "colorPalette.fg",
      bg: "transparent",
      borderWidth: "1px",
      borderColor: "colorPalette.border",
      borderRadius: "l2",
      cursor: "button",
      outline: "0",
      transitionProperty: "common",
      transitionDuration: "moderate",
      focusVisibleRing: "outside",
      _hover: {
        bg: "colorPalette.subtle",
      },
      _disabled: {
        layerStyle: "disabled",
      },
      _hidden: {
        display: "none",
      },
      _icon: {
        flexShrink: "0",
        pointerEvents: "none",
        boxSize: "4",
      },
      _iconStart: {
        iconPullStart: "0.5",
      },
      _iconEnd: {
        iconPullEnd: "0.5",
      },
    },
  },
  variants: {
    variant: {
      plain: {},
      outline: {
        itemGroup: {
          px: "var(--timer-group-padding)",
          py: "1",
          borderWidth: "1px",
          borderColor: "border",
          borderRadius: "l2",
          bg: "bg",
        },
        separator: {
          alignSelf: "center",
        },
      },
      subtle: {
        itemGroup: {
          px: "var(--timer-group-padding)",
          py: "1",
          borderWidth: "1px",
          borderColor: "transparent",
          borderRadius: "l2",
          bg: "bg.muted",
        },
        separator: {
          alignSelf: "center",
        },
      },
    },
    size: {
      sm: {
        root: {
          "--timer-gap": "spacing.1.5",
          "--timer-group-min-width": "sizes.12",
          "--timer-group-padding": "spacing.2",
          "--timer-trigger-height": "sizes.8",
          "--timer-trigger-padding": "spacing.2.5",
        },
        item: {
          textStyle: "xl",
        },
        itemLabel: {
          textStyle: "xs",
        },
        separator: {
          textStyle: "xl",
        },
      },
      md: {
        root: {
          "--timer-gap": "spacing.2",
          "--timer-group-min-width": "sizes.14",
          "--timer-group-padding": "spacing.2.5",
          "--timer-trigger-height": "sizes.9",
          "--timer-trigger-padding": "spacing.3.5",
        },
        item: {
          textStyle: "2xl",
        },
        itemLabel: {
          textStyle: "xs",
        },
        separator: {
          textStyle: "2xl",
        },
      },
      lg: {
        root: {
          "--timer-gap": "spacing.3",
          "--timer-group-min-width": "sizes.20",
          "--timer-group-padding": "spacing.3",
          "--timer-trigger-height": "sizes.10",
          "--timer-trigger-padding": "spacing.4",
        },
        item: {
          textStyle: "4xl",
        },
        itemLabel: {
          textStyle: "sm",
        },
        separator: {
          textStyle: "4xl",
        },
      },
    },
  },
  defaultVariants: {
    variant: "plain",
    size: "md",
  },
})
