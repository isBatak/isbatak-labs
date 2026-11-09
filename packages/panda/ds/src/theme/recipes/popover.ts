import { defineSlotRecipe } from "@pandacss/dev"

export const popoverSlotRecipe = defineSlotRecipe({
  className: "popover",
  description: "Non-modal floating panel anchored to a trigger",
  slots: [
    "backdrop",
    "arrow",
    "arrowTip",
    "anchor",
    "trigger",
    "indicator",
    "positioner",
    "content",
    "title",
    "description",
    "closeTrigger",
    "header",
    "body",
    "footer",
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
      "--popover-z-index": "zIndex.modal",
      zIndex: "calc(var(--popover-z-index) + var(--layer-index, 0) - 1)",
      _open: {
        animationName: "fade-in",
        animationDuration: "slow",
      },
      _closed: {
        animationName: "fade-out",
        animationDuration: "moderate",
      },
    },
    indicator: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transitionProperty: "rotate",
      transitionDuration: "normal",
      _open: {
        rotate: "180deg",
      },
      _icon: {
        boxSize: "4",
      },
    },
    content: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      textStyle: "sm",
      "--popover-bg": "colors.bg.panel",
      bg: "var(--popover-bg)",
      boxShadow: "lg",
      "--popover-size": "sizes.xs",
      "--popover-mobile-size": "calc(100dvw - 1rem)",
      width: {
        base: "min(var(--popover-mobile-size), var(--popover-size))",
        sm: "var(--popover-size)",
      },
      borderRadius: "l3",
      "--popover-z-index": "zIndex.popover",
      zIndex: "calc(var(--popover-z-index) + var(--layer-index, 0))",
      outline: "0",
      transformOrigin: "var(--transform-origin)",
      maxHeight: "var(--available-height)",
      borderWidth: "1px",
      "--popover-border-color": "colors.border.muted",
      borderColor: "var(--popover-border-color)",
      _open: {
        animationStyle: "scale-fade-in",
        animationDuration: "fast",
      },
      _closed: {
        animationStyle: "scale-fade-out",
        animationDuration: "faster",
      },
    },
    header: {
      display: "flex",
      flexDirection: "column",
      gap: "1",
      paddingInline: "var(--popover-padding)",
      paddingTop: "var(--popover-padding)",
    },
    title: {
      fontWeight: "semibold",
    },
    description: {
      color: "fg.muted",
    },
    body: {
      padding: "var(--popover-padding)",
      flex: "1",
    },
    footer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: "2",
      paddingInline: "var(--popover-padding)",
      paddingBottom: "var(--popover-padding)",
    },
    closeTrigger: {
      pos: "absolute",
      top: "2",
      insetEnd: "2",
    },
    arrow: {
      "--arrow-size": "sizes.3",
      "--arrow-background": "var(--popover-bg)",
    },
    arrowTip: {
      borderTopWidth: "1px",
      borderInlineStartWidth: "1px",
      borderColor: "var(--popover-border-color)",
    },
  },
  variants: {
    size: {
      xs: {
        content: {
          "--popover-padding": "spacing.3",
        },
      },
      sm: {
        content: {
          "--popover-padding": "spacing.4",
        },
      },
      md: {
        content: {
          "--popover-padding": "spacing.5",
        },
      },
      lg: {
        content: {
          "--popover-padding": "spacing.6",
        },
      },
    },
    modalMode: {
      true: {
        backdrop: {
          display: "block",
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
          "--popover-z-index": "zIndex.modal",
          zIndex: "calc(var(--popover-z-index) + var(--layer-index, 0))",
          "&:has([data-popover-content][data-state=closed])": {
            visibility: "hidden",
          },
        },
        content: {
          "--popover-size": "sizes.sm",
          "--popover-z-index": "zIndex.modal",
          w: "full",
          maxW: "var(--popover-size)",
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
    modalMode: false,
  },
})
