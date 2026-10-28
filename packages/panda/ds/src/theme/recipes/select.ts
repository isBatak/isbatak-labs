import { defineSlotRecipe, defineStyles } from "@pandacss/dev"

const triggerInteraction = defineStyles({
  "--input-border-color": "colors.border",
  "--input-border-hover-color": "colors.border.emphasized",
  "--input-border-focus-color": "colors.colorPalette.focusRing",
  "--input-border-error-color": "colors.border.error",
  outline: "0",
  borderWidth: "1px",
  borderColor: "var(--input-border-color)",
  _hover: {
    borderColor: "var(--input-border-hover-color)",
  },
  _focusVisible: {
    borderColor: "var(--input-border-focus-color)",
    _hover: {
      borderColor: "var(--input-border-focus-color)",
    },
  },
  _open: {
    borderColor: "var(--input-border-focus-color)",
    _hover: {
      borderColor: "var(--input-border-focus-color)",
    },
  },
  _invalid: {
    borderColor: "var(--input-border-error-color)",
    _hover: {
      borderColor: "var(--input-border-error-color)",
    },
    _open: {
      outline: "1px solid var(--input-border-error-color)",
      outlineOffset: "0",
    },
  },
  _disabled: {
    layerStyle: "disabled",
  },
})

export const selectSlotRecipe = defineSlotRecipe({
  className: "select",
  description: "Custom select with a trigger and option list",
  slots: [
    "label",
    "positioner",
    "trigger",
    "indicator",
    "clearTrigger",
    "item",
    "itemText",
    "itemIndicator",
    "itemGroup",
    "itemGroupLabel",
    "list",
    "content",
    "root",
    "control",
    "valueText",
    "indicatorGroup",
    "search",
    "empty",
  ],
  base: {
    root: {
      colorPalette: "gray",
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
      width: "full",
    },
    label: {
      display: "flex",
      alignItems: "center",
      gap: "1",
      textAlign: "start",
      textStyle: "sm",
      fontWeight: "medium",
      userSelect: "none",
      _disabled: {
        layerStyle: "disabled",
      },
    },
    control: {
      pos: "relative",
      w: "full",
    },
    trigger: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "full",
      minH: "var(--select-trigger-height)",
      px: "var(--select-trigger-padding-x)",
      borderRadius: "l2",
      userSelect: "none",
      textAlign: "start",
      pos: "relative",
      zIndex: "1",
      _placeholderShown: {
        color: "fg.muted",
      },
      ...triggerInteraction,
    },
    valueText: {
      lineClamp: "1",
      maxW: "80%",
      px: "1",
    },
    indicatorGroup: {
      display: "flex",
      alignItems: "center",
      gap: "1",
      pos: "absolute",
      zIndex: "1",
      insetEnd: "0",
      top: "0",
      bottom: "0",
      pe: "var(--select-trigger-padding-x)",
      ps: "1",
      pointerEvents: "none",
    },
    indicator: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "fg",
      transitionProperty: "rotate",
      transitionDuration: "normal",
      _open: {
        rotate: "180deg",
      },
      _icon: {
        boxSize: "4",
      },
      _disabled: {
        layerStyle: "disabled",
      },
    },
    clearTrigger: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxSize: "var(--select-indicator-size)",
      borderRadius: "l1",
      color: "fg",
      cursor: "button",
      pointerEvents: "auto",
      focusVisibleRing: "inside",
      _hover: {
        bg: "bg.muted",
      },
      _icon: {
        boxSize: "3.5",
      },
      "&[hidden]": {
        display: "none",
      },
    },
    positioner: {
      "--select-z-index": "zIndex.popover",
      zIndex: "calc(var(--select-z-index) + var(--layer-index, 0)) !important",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      bg: "bg.panel",
      "--select-z-index": "zIndex.popover",
      zIndex: "calc(var(--select-z-index) + var(--layer-index, 0))",
      borderRadius: "l2",
      borderWidth: "1px",
      borderColor: "border.muted",
      outline: "0",
      maxH: "96",
      overflowY: "auto",
      p: "var(--select-content-padding)",
      boxShadow: "md",
      "&:has(> [data-select-list])": {
        p: "0",
        overflowY: "hidden",
      },
      _open: {
        animationStyle: "slide-fade-in",
        animationDuration: "fast",
      },
      _closed: {
        animationStyle: "slide-fade-out",
        animationDuration: "fastest",
      },
      "&[data-align-item-with-trigger], &[data-align-item-with-trigger][data-placement]": {
        _open: {
          animationName: "fade-in",
        },
        _closed: {
          animationName: "fade-out",
        },
      },
    },
    list: {
      flex: "1",
      minH: "0",
      overflowY: "auto",
      p: "var(--select-content-padding)",
    },
    item: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "2",
      flex: "1",
      color: "fg",
      textAlign: "start",
      borderRadius: "l1",
      userSelect: "none",
      cursor: "option",
      _highlighted: {
        bg: "bg.muted",
      },
      _disabled: {
        pointerEvents: "none",
        layerStyle: "disabled",
      },
      _icon: {
        boxSize: "4",
      },
    },
    itemText: {
      flex: "1",
    },
    itemIndicator: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    itemGroup: {
      _first: {
        mt: "0",
      },
    },
    itemGroupLabel: {
      fontWeight: "medium",
      color: "fg.muted",
    },
    search: {
      "--input-height": "var(--select-trigger-height)",
      flexShrink: "0",
      w: "full",
      h: "var(--select-trigger-height)",
      px: "var(--select-trigger-padding-x)",
      bg: "transparent",
      color: "fg",
      outline: "0",
      borderBottomWidth: "1px",
      borderColor: "border.muted",
      _placeholder: {
        color: "fg.muted",
      },
    },
    empty: {
      py: "2",
      textAlign: "center",
      color: "fg.muted",
    },
  },
  variants: {
    variant: {
      outline: {
        trigger: {
          bg: "transparent",
        },
      },
      subtle: {
        trigger: {
          "--input-border-color": "transparent",
          "--input-border-hover-color": "transparent",
          bg: "bg.muted",
          _hover: {
            bg: "bg.emphasized",
          },
        },
      },
      ghost: {
        trigger: {
          "--input-border-color": "transparent",
          "--input-border-hover-color": "transparent",
          bg: "transparent",
          _hover: {
            bg: "bg.muted",
          },
        },
      },
    },
    size: {
      xs: {
        root: {
          "--select-trigger-height": "sizes.7",
          "--select-trigger-padding-x": "spacing.1",
          "--select-indicator-size": "sizes.4",
        },
        trigger: {
          textStyle: "xs",
          gap: "1",
        },
        content: {
          "--select-trigger-height": "sizes.7",
          "--select-trigger-padding-x": "spacing.1",
          "--select-indicator-size": "sizes.4",
          "--select-content-padding": "spacing.1",
          textStyle: "xs",
        },
        item: {
          px: "1.5",
          py: "1",
        },
        itemGroup: {
          mt: "1",
        },
        itemGroupLabel: {
          px: "1.5",
          py: "1",
        },
      },
      sm: {
        root: {
          "--select-trigger-height": "sizes.8",
          "--select-trigger-padding-x": "spacing.1.5",
          "--select-indicator-size": "sizes.5",
        },
        trigger: {
          textStyle: "sm",
          gap: "1",
        },
        content: {
          "--select-trigger-height": "sizes.8",
          "--select-trigger-padding-x": "spacing.1.5",
          "--select-indicator-size": "sizes.5",
          "--select-content-padding": "spacing.1",
          textStyle: "sm",
        },
        item: {
          px: "1.5",
          py: "1",
        },
        itemGroup: {
          mt: "1",
        },
        itemGroupLabel: {
          px: "1.5",
          py: "1",
        },
      },
      md: {
        root: {
          "--select-trigger-height": "sizes.10",
          "--select-trigger-padding-x": "spacing.2",
          "--select-indicator-size": "sizes.6",
        },
        trigger: {
          textStyle: "sm",
          gap: "2",
        },
        content: {
          "--select-trigger-height": "sizes.10",
          "--select-trigger-padding-x": "spacing.2",
          "--select-indicator-size": "sizes.6",
          "--select-content-padding": "spacing.1",
          textStyle: "sm",
        },
        item: {
          px: "2",
          py: "1.5",
        },
        itemGroup: {
          mt: "1.5",
        },
        itemGroupLabel: {
          px: "2",
          py: "1.5",
        },
      },
      lg: {
        root: {
          "--select-trigger-height": "sizes.12",
          "--select-trigger-padding-x": "spacing.3",
          "--select-indicator-size": "sizes.6",
        },
        trigger: {
          textStyle: "md",
          gap: "2",
        },
        content: {
          "--select-trigger-height": "sizes.12",
          "--select-trigger-padding-x": "spacing.3",
          "--select-indicator-size": "sizes.6",
          "--select-content-padding": "spacing.1.5",
          textStyle: "md",
        },
        item: {
          px: "3",
          py: "2",
        },
        itemGroup: {
          mt: "2",
        },
        itemGroupLabel: {
          px: "3",
          py: "2",
        },
      },
    },
    fit: {
      true: {
        root: {
          w: "fit",
        },
        control: {
          w: "auto",
        },
        trigger: {
          w: "auto",
          pe: "calc(var(--select-indicator-size) + var(--select-trigger-padding-x))",
        },
        valueText: {
          maxW: "fit",
        },
      },
    },
  },
  defaultVariants: {
    variant: "outline",
    size: "md",
  },
})
