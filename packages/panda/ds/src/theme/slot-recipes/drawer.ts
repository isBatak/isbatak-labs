import { defineSlotRecipe } from "@pandacss/dev"

export const drawerSlotRecipe = defineSlotRecipe({
  slots: [
    "trigger",
    "backdrop",
    "positioner",
    "content",
    "title",
    "description",
    "closeTrigger",
    "header",
    "body",
    "footer",
    "grabber",
    "grabberIndicator",
  ],
  className: "drawer",
  base: {
    backdrop: {
      bg: "blackAlpha.500",
      pos: "fixed",
      insetInlineStart: 0,
      top: 0,
      w: "100vw",
      h: "100dvh",
      "--drawer-z-index": "zIndex.popover",
      zIndex: "calc(var(--drawer-z-index) + var(--layer-index, 0) - 1)",
      opacity: "calc(1 - var(--drawer-swipe-progress, 0))",
      transitionProperty: "opacity",
      transitionDuration: "calc(var(--drawer-swipe-strength, 1) * {durations.slowest})",
      transitionTimingFunction: "ease-in-smooth",
      "&[data-swiping]": {
        transitionDuration: "0s",
      },
      _open: {
        animationName: "fade-in",
        animationDuration: "slow",
      },
      _closed: {
        animationName: "fade-out",
        animationDuration: "calc(var(--drawer-swipe-strength, 1) * {durations.slower})",
      },
    },
    positioner: {
      display: "flex",
      width: "100vw",
      height: "100dvh",
      position: "fixed",
      insetInlineStart: 0,
      top: 0,
      "--drawer-z-index": "zIndex.popover",
      zIndex: "calc(var(--drawer-z-index) + var(--layer-index, 0))",
      overscrollBehaviorY: "none",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      "--drawer-z-index": "zIndex.popover",
      zIndex: "calc(var(--drawer-z-index) + var(--layer-index, 0))",
      textStyle: "sm",
      maxW: "var(--drawer-max-width)",
      maxH: "100dvh",
      color: "inherit",
      bg: "bg.panel",
      boxShadow: "lg",
      "--drawer-stack-scale": "calc(1 - var(--nested-drawers, 0) * 0.05)",
      "--drawer-stack-offset": "calc(var(--nested-drawers, 0) * {spacing.2})",
      scale: "var(--drawer-stack-scale)",
      transitionProperty: "transform, scale, translate",
      transitionDuration: "calc(var(--drawer-swipe-strength, 1) * {durations.slowest})",
      transitionTimingFunction: "ease-in-smooth",
      _open: {
        animationDuration: "slowest",
        animationTimingFunction: "ease-in-smooth",
      },
      _closed: {
        animationDuration: "calc(var(--drawer-swipe-strength, 1) * {durations.slower})",
        animationTimingFunction: "ease-in-smooth",
      },
    },
    header: {
      display: "flex",
      alignItems: "center",
      gap: "2",
      flex: 0,
      px: "6",
      pt: "6",
      pb: "4",
    },
    body: {
      px: "6",
      py: "2",
      flex: "1",
      overflow: "auto",
    },
    footer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: "3",
      px: "6",
      pt: "2",
      pb: "4",
    },
    grabber: {
      display: "flex",
      justifyContent: "center",
      flexShrink: 0,
      pt: "3",
      pb: "1",
      cursor: "grab",
      touchAction: "none",
      _active: { cursor: "grabbing" },
    },
    grabberIndicator: {
      w: "10",
      h: "1",
      rounded: "full",
      bg: "border.emphasized",
    },
    title: {
      flex: "1",
      textStyle: "lg",
      fontWeight: "semibold",
    },
    description: {
      color: "fg.muted",
    },
    closeTrigger: {
      pos: "absolute",
      top: "3",
      insetEnd: "2",
    },
  },
  variants: {
    size: {
      xs: {
        content: {
          "--drawer-max-width": "sizes.xs",
        },
      },
      sm: {
        content: {
          "--drawer-max-width": "sizes.md",
        },
      },
      md: {
        content: {
          "--drawer-max-width": "sizes.lg",
        },
      },
      lg: {
        content: {
          "--drawer-max-width": "sizes.2xl",
        },
      },
      xl: {
        content: {
          "--drawer-max-width": "sizes.4xl",
        },
      },
      full: {
        content: {
          "--drawer-max-width": "100vw",
          h: "100dvh",
        },
      },
    },
    placement: {
      start: {
        positioner: {
          justifyContent: "flex-start",
          alignItems: "stretch",
        },
        content: {
          translate: "var(--drawer-stack-offset) 0",
          _open: {
            animationName: {
              base: "slide-from-left-full, fade-in",
              _rtl: "slide-from-right-full, fade-in",
            },
          },
          _closed: {
            animationName: {
              base: "slide-to-left-full, fade-out",
              _rtl: "slide-to-right-full, fade-out",
            },
          },
        },
      },
      end: {
        positioner: {
          justifyContent: "flex-end",
          alignItems: "stretch",
        },
        content: {
          translate: "calc(var(--drawer-stack-offset) * -1) 0",
          _open: {
            animationName: {
              base: "slide-from-right-full, fade-in",
              _rtl: "slide-from-left-full, fade-in",
            },
          },
          _closed: {
            animationName: {
              base: "slide-to-right-full, fade-out",
              _rtl: "slide-to-left-full, fade-out",
            },
          },
        },
      },
      top: {
        positioner: {
          justifyContent: "stretch",
          alignItems: "flex-start",
        },
        content: {
          maxW: "100%",
          transformOrigin: "bottom",
          translate: "0 var(--drawer-stack-offset)",
          _open: {
            animationName: "slide-from-top-full, fade-in",
          },
          _closed: {
            animationName: "slide-to-top-full, fade-out",
          },
        },
      },
      bottom: {
        positioner: {
          justifyContent: "stretch",
          alignItems: "flex-end",
        },
        content: {
          maxW: "100%",
          transformOrigin: "top",
          translate: "0 calc(var(--drawer-stack-offset) * -1)",
          maxH: "calc(100dvh - {spacing.12})",
          borderTopRadius: "l3",
          pb: "[env(safe-area-inset-bottom)]",
          _open: {
            animationName: "slide-from-bottom-full, fade-in",
          },
          _closed: {
            animationName: "slide-to-bottom-full, fade-out",
          },
        },
      },
    },
    contained: {
      true: {
        positioner: {
          padding: "4",
        },
        content: {
          borderRadius: "l3",
        },
      },
    },
  },
  defaultVariants: {
    size: "xs",
    placement: "end",
  },
})
