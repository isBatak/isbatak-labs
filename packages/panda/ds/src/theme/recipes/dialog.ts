import { defineSlotRecipe } from "@pandacss/dev"

export const dialogSlotRecipe = defineSlotRecipe({
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
  ],
  className: "dialog",
  description: "Modal window that blocks the page",
  base: {
    backdrop: {
      bg: "blackAlpha.500",
      pos: "fixed",
      left: 0,
      top: 0,
      w: "100dvw",
      h: "100dvh",
      "--dialog-z-index": "zIndex.modal",
      zIndex: "calc(var(--dialog-z-index) + var(--layer-index, 0) - 1)",
      _open: {
        animationName: "fade-in",
        animationDuration: "slow",
      },
      _closed: {
        animationName: "fade-out",
        animationDuration: "moderate",
      },
    },
    positioner: {
      display: "flex",
      width: "100dvw",
      height: "100dvh",
      position: "fixed",
      left: 0,
      top: 0,
      px: "4",
      "--dialog-z-index": "zIndex.modal",
      zIndex: "calc(var(--dialog-z-index) + var(--layer-index, 0))",
      justifyContent: "center",
      overscrollBehaviorY: "none",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      borderRadius: "l3",
      textStyle: "sm",
      color: "fg",
      my: "var(--dialog-margin, var(--dialog-base-margin))",
      "--dialog-z-index": "zIndex.modal",
      zIndex: "calc(var(--dialog-z-index) + var(--layer-index, 0))",
      bg: "bg.panel",
      borderWidth: "1px",
      borderColor: "border.muted",
      boxShadow: "xl",
      _open: {
        animationDuration: "moderate",
      },
      _closed: {
        animationDuration: "faster",
      },
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "2",
      flex: 0,
      borderBottomWidth: "1px",
      borderBottomColor: "border.muted",
      ps: "4",
      pe: "12",
    },
    body: {
      flex: "1",
      px: "4",
      py: "3",
    },
    footer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: "3",
      p: "4",
      borderTopWidth: "1px",
      borderTopColor: "border.muted",
    },
    title: {
      fontWeight: "semibold",
    },
    description: {
      color: "fg.muted",
    },
    closeTrigger: {
      pos: "absolute",
      insetEnd: "3",
    },
  },
  variants: {
    placement: {
      center: {
        positioner: {
          alignItems: "center",
        },
        content: {
          "--dialog-base-margin": "auto",
          mx: "auto",
        },
      },
      top: {
        positioner: {
          alignItems: "flex-start",
        },
        content: {
          "--dialog-base-margin": "spacing.16",
          mx: "auto",
        },
      },
      bottom: {
        positioner: {
          alignItems: "flex-end",
        },
        content: {
          "--dialog-base-margin": "spacing.16",
          mx: "auto",
        },
      },
    },
    scrollBehavior: {
      inside: {
        positioner: {
          overflow: "hidden",
        },
        content: {
          maxH: "calc(100% - 7.5rem)",
        },
        body: {
          overflow: "auto",
        },
      },
      outside: {
        positioner: {
          overflow: "auto",
          pointerEvents: "auto",
        },
      },
    },
    size: {
      sm: {
        header: {
          py: "1.5",
          minH: "11",
        },
        title: {
          textStyle: "md",
        },
        closeTrigger: {
          top: "1.5",
        },
      },
      md: {
        header: {
          py: "2",
          minH: "12",
        },
        title: {
          textStyle: "lg",
        },
        closeTrigger: {
          top: "2",
        },
      },
    },
    contentSize: {
      xs: {
        content: {
          maxW: "xs",
        },
      },
      sm: {
        content: {
          maxW: "sm",
        },
      },
      md: {
        content: {
          maxW: "md",
        },
      },
      lg: {
        content: {
          maxW: "lg",
        },
      },
      xl: {
        content: {
          maxW: "xl",
        },
      },
      "2xl": {
        content: {
          maxW: "2xl",
        },
      },
      "3xl": {
        content: {
          maxW: "3xl",
        },
      },
      "4xl": {
        content: {
          maxW: "4xl",
        },
      },
      cover: {
        positioner: {
          padding: { base: "4", sm: "6", xl: "10" },
        },
        content: {
          w: "full",
          h: "full",
          "--dialog-margin": "0",
        },
      },
      full: {
        positioner: {
          padding: "0",
        },
        content: {
          w: "full",
          h: "full",
          maxW: "100dvw",
          maxH: "full",
          "--dialog-margin": "0",
          borderRadius: "0",
          borderWidth: "0",
          boxShadow: "none",
        },
      },
    },
    motionPreset: {
      scale: {
        content: {
          _open: {
            animationName: "scale-in, fade-in",
          },
          _closed: {
            animationName: "scale-out, fade-out",
          },
        },
      },
      "slide-in-bottom": {
        content: {
          _open: {
            animationName: "slide-from-bottom, fade-in",
          },
          _closed: {
            animationName: "slide-to-bottom, fade-out",
          },
        },
      },
      "slide-in-top": {
        content: {
          _open: {
            animationName: "slide-from-top, fade-in",
          },
          _closed: {
            animationName: "slide-to-top, fade-out",
          },
        },
      },
      "slide-in-left": {
        content: {
          _open: {
            animationName: "slide-from-left, fade-in",
          },
          _closed: {
            animationName: "slide-to-left, fade-out",
          },
        },
      },
      "slide-in-right": {
        content: {
          _open: {
            animationName: "slide-from-right, fade-in",
          },
          _closed: {
            animationName: "slide-to-right, fade-out",
          },
        },
      },
      none: {},
    },
  },
  defaultVariants: {
    size: "md",
    contentSize: "md",
    scrollBehavior: "outside",
    placement: "top",
    motionPreset: "scale",
  },
})
