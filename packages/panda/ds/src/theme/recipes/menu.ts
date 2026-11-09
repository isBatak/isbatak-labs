import { defineSlotRecipe } from "@pandacss/dev"

const itemStyles = {
  textDecoration: "none",
  color: "fg",
  userSelect: "none",
  borderRadius: "l1",
  width: "100%",
  display: "flex",
  cursor: "menuitem",
  alignItems: "center",
  textAlign: "start",
  position: "relative",
  flex: "0 0 auto",
  outline: 0,
  _disabled: {
    layerStyle: "disabled",
  },
} as const

export const menuSlotRecipe = defineSlotRecipe({
  className: "menu",
  description: "Dropdown of actions opened from a trigger",
  slots: [
    "backdrop",
    "closeTrigger",
    "arrow",
    "arrowTip",
    "content",
    "contextTrigger",
    "indicator",
    "item",
    "itemGroup",
    "itemGroupLabel",
    "itemIndicator",
    "itemText",
    "positioner",
    "separator",
    "trigger",
    "triggerItem",
    "itemCommand",
  ],
  base: {
    backdrop: {
      display: "none",
      bg: "blackAlpha.500",
      pos: "fixed",
      left: 0,
      top: 0,
      w: "100dvw",
      h: "100dvh",
      "--menu-z-index": "zIndex.modal",
      zIndex: "calc(var(--menu-z-index) + var(--layer-index, 0) - 1)",
      _open: {
        animationName: "fade-in",
        animationDuration: "slow",
      },
      _closed: {
        animationName: "fade-out",
        animationDuration: "moderate",
      },
    },
    closeTrigger: {
      display: "none",
      pos: "absolute",
      top: "2",
      insetEnd: "2",
    },
    content: {
      outline: 0,
      "--menu-bg": "colors.bg.panel",
      bg: "var(--menu-bg)",
      boxShadow: "lg",
      color: "fg",
      maxHeight: "var(--available-height)",
      maxW: "60",
      "--menu-z-index": "zIndex.popover",
      zIndex: "calc(var(--menu-z-index) + var(--layer-index, 0))",
      borderRadius: "l2",
      borderWidth: "1px",
      borderColor: "border.muted",
      overflow: "hidden",
      overflowY: "auto",
      _open: {
        animationStyle: "slide-fade-in",
        animationDuration: "fast",
      },
      _closed: {
        animationStyle: "slide-fade-out",
        animationDuration: "faster",
      },
    },
    item: itemStyles,
    triggerItem: {
      ...itemStyles,
      _icon: {
        ms: "auto",
        boxSize: "4",
        color: "fg.muted",
      },
    },
    itemText: {
      flex: "1",
      minW: "0",
      truncate: true,
    },
    itemIndicator: {
      position: "absolute",
      insetStart: "2",
      transform: "translateY(-50%)",
      top: "50%",
    },
    itemGroupLabel: {
      px: "2",
      py: "1.5",
      fontWeight: "semibold",
      textStyle: "sm",
    },
    indicator: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: "0",
    },
    itemCommand: {
      opacity: "0.6",
      textStyle: "xs",
      ms: "auto",
      ps: "4",
      letterSpacing: "widest",
      fontFamily: "inherit",
    },
    separator: {
      height: "1px",
      bg: "border.muted",
      my: "1",
      mx: "-1",
    },
    arrow: {
      "--arrow-size": "sizes.3",
      "--arrow-background": "var(--menu-bg)",
    },
    arrowTip: {
      borderTopWidth: "1px",
      borderInlineStartWidth: "1px",
      borderColor: "border.muted",
    },
  },
  variants: {
    variant: {
      subtle: {
        item: {
          _highlighted: {
            bg: "bg.emphasized/60",
          },
        },
        triggerItem: {
          _highlighted: {
            bg: "bg.emphasized/60",
          },
        },
      },
      solid: {
        item: {
          _highlighted: {
            bg: "colorPalette.solid",
            color: "colorPalette.contrast",
          },
        },
        triggerItem: {
          _highlighted: {
            bg: "colorPalette.solid",
            color: "colorPalette.contrast",
          },
        },
      },
    },
    size: {
      sm: {
        content: {
          minW: "8rem",
          padding: "1",
          scrollPadding: "1",
        },
        item: {
          gap: "1",
          textStyle: "xs",
          py: "1",
          ps: "1.5",
          pe: "3",
          "&[data-type]": {
            ps: "7",
          },
        },
        triggerItem: {
          gap: "1",
          textStyle: "xs",
          py: "1",
          ps: "1.5",
          pe: "1.5",
        },
      },
      md: {
        content: {
          minW: "8rem",
          padding: "1.5",
          scrollPadding: "1.5",
        },
        item: {
          gap: "2",
          textStyle: "sm",
          py: "1.5",
          ps: "2",
          pe: "2.5",
          "&[data-type]": {
            ps: "8",
          },
        },
        triggerItem: {
          gap: "2",
          textStyle: "sm",
          py: "1.5",
          ps: "2",
          pe: "1.5",
        },
      },
    },
    modalMode: {
      true: {
        backdrop: {
          display: "block",
        },
        closeTrigger: {
          display: "inline-flex",
        },
        positioner: {
          display: "flex",
          position: "fixed!",
          insetBlockStart: "unset!",
          insetBlockEnd: "0!",
          insetInlineStart: "0!",
          insetInlineEnd: "unset!",
          w: "100dvw",
          h: "100dvh",
          minW: "0!",
          px: "4",
          py: "8",
          alignItems: "flex-end",
          justifyContent: "center",
          transform: "translateZ(0)!",
          "--menu-z-index": "zIndex.modal",
          zIndex: "calc(var(--menu-z-index) + var(--layer-index, 0))",
          "&:has([data-menu-content][data-state=closed])": {
            visibility: "hidden",
          },
        },
        content: {
          position: "relative",
          "--menu-z-index": "zIndex.modal",
          w: "full",
          maxW: "sm",
          pt: "12",
          maxH: "calc(100dvh - token(spacing.16))",
          _open: {
            animationName: "slide-from-bottom, fade-in",
            animationDuration: "moderate",
          },
          _closed: {
            animationName: "slide-to-bottom, fade-out",
            animationDuration: "faster",
          },
        },
        arrow: {
          display: "none",
        },
      },
      false: {},
    },
  },
  defaultVariants: {
    size: "md",
    variant: "subtle",
    modalMode: false,
  },
})
