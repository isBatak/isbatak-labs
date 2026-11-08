import { defineSlotRecipe } from "@pandacss/dev"

import { inputVariants } from "./shared/input"

export const comboboxSlotRecipe = defineSlotRecipe({
  className: "combobox",
  description: "Text input that filters a list of options as people type; pick select when typing isn't needed",
  slots: [
    "root",
    "label",
    "control",
    "input",
    "indicatorGroup",
    "trigger",
    "clearTrigger",
    "positioner",
    "content",
    "list",
    "item",
    "itemText",
    "itemContent",
    "itemDescription",
    "itemIndicator",
    "itemGroup",
    "itemGroupLabel",
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
      "--combobox-input-padding-end": "var(--combobox-input-padding-x)",
      "&:has([data-combobox-trigger]), &:has([data-combobox-clear-trigger]:not([hidden]))": {
        "--combobox-input-padding-end": "calc(var(--combobox-indicator-size) + var(--combobox-input-padding-x) * 2)",
      },
      "&:has([data-combobox-trigger]):has([data-combobox-clear-trigger]:not([hidden]))": {
        "--combobox-input-padding-end":
          "calc(var(--combobox-indicator-size) * 2 + var(--combobox-input-padding-x) * 2 + token(spacing.1))",
      },
    },
    input: {
      "--input-height": "var(--combobox-input-height)",
      "--focus-color": "colors.colorPalette.focusRing",
      "--error-color": "colors.border.error",
      display: "flex",
      width: "full",
      minW: "0",
      h: "var(--combobox-input-height)",
      ps: "var(--combobox-input-padding-x)",
      pe: "var(--combobox-input-padding-end)",
      color: "fg",
      borderRadius: "l2",
      outline: "0",
      appearance: "none",
      textAlign: "start",
      _placeholder: {
        color: "fg.muted",
      },
      _disabled: {
        layerStyle: "disabled",
      },
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
      pe: "var(--combobox-input-padding-x)",
      pointerEvents: "none",
    },
    trigger: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxSize: "var(--combobox-indicator-size)",
      color: "fg",
      cursor: "button",
      pointerEvents: "auto",
      outline: "0",
      borderRadius: "l1",
      focusVisibleRing: "inside",
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
      boxSize: "var(--combobox-indicator-size)",
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
      "--combobox-z-index": "zIndex.popover",
      zIndex: "calc(var(--combobox-z-index) + var(--layer-index, 0)) !important",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      bg: "bg.panel",
      "--combobox-z-index": "zIndex.popover",
      zIndex: "calc(var(--combobox-z-index) + var(--layer-index, 0))",
      borderRadius: "l2",
      borderWidth: "1px",
      borderColor: "border.muted",
      outline: "0",
      maxH: "96",
      overflowY: "auto",
      p: "var(--combobox-content-padding)",
      boxShadow: "md",
      _open: {
        animationStyle: "slide-fade-in",
        animationDuration: "fast",
      },
      _closed: {
        animationStyle: "slide-fade-out",
        animationDuration: "fastest",
      },
      "&[data-empty]:not(:has([data-combobox-empty]))": {
        opacity: "0",
      },
    },
    list: {
      display: "flex",
      flexDirection: "column",
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
    itemContent: {
      display: "flex",
      flexDirection: "column",
      flex: "1",
    },
    itemDescription: {
      textStyle: "xs",
      color: "fg.muted",
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
    empty: {
      py: "2",
      textAlign: "center",
      color: "fg.muted",
      "&:empty": {
        py: "0",
      },
    },
  },
  variants: {
    variant: {
      outline: {
        input: inputVariants.outline,
      },
      subtle: {
        input: inputVariants.subtle,
      },
      plain: {
        input: inputVariants.plain,
      },
      flushed: {
        input: inputVariants.flushed,
        indicatorGroup: {
          pe: "0",
        },
      },
    },
    size: {
      xs: {
        root: {
          "--combobox-input-height": "sizes.8",
          "--combobox-input-padding-x": "spacing.2",
          "--combobox-indicator-size": "sizes.4",
        },
        input: {
          textStyle: "xs",
        },
        content: {
          "--combobox-content-padding": "spacing.1",
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
          "--combobox-input-height": "sizes.9",
          "--combobox-input-padding-x": "spacing.2.5",
          "--combobox-indicator-size": "sizes.5",
        },
        input: {
          textStyle: "sm",
        },
        content: {
          "--combobox-content-padding": "spacing.1",
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
          "--combobox-input-height": "sizes.10",
          "--combobox-input-padding-x": "spacing.3",
          "--combobox-indicator-size": "sizes.6",
        },
        input: {
          textStyle: "sm",
        },
        content: {
          "--combobox-content-padding": "spacing.1",
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
          "--combobox-input-height": "sizes.12",
          "--combobox-input-padding-x": "spacing.4",
          "--combobox-indicator-size": "sizes.6",
        },
        input: {
          textStyle: "md",
        },
        content: {
          "--combobox-content-padding": "spacing.1.5",
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
  },
  compoundVariants: [
    {
      variant: ["outline", "subtle", "plain"],
      css: {
        input: {
          _invalid: {
            focusRingColor: "var(--error-color)",
            borderColor: "var(--error-color)",
          },
        },
      },
    },
    {
      variant: "flushed",
      css: {
        input: {
          _invalid: {
            borderBottomColor: "var(--error-color)",
          },
        },
      },
    },
  ],
  defaultVariants: {
    size: "md",
    variant: "outline",
  },
})
