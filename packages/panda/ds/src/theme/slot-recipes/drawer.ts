import { defineSlotRecipe } from "@pandacss/dev"

const vertical = {
  maxW: "100%",
  _after: {
    insetInline: 0,
    w: "auto",
    h: "var(--drawer-bleed)",
  },
}

const horizontal = {
  maxW: "var(--drawer-max-width)",
  maxH: "100dvh",
  transformOrigin: "center",
  borderTopRadius: "0",
  pb: "0",
  _after: {
    insetBlock: 0,
    w: "var(--drawer-bleed)",
    h: "auto",
  },
}

const down = {
  positioner: {
    justifyContent: "stretch",
    alignItems: "flex-end",
  },
  content: {
    ...vertical,
    maxH: "calc(100dvh - {spacing.12})",
    transformOrigin: "top",
    translate: "0 calc(var(--drawer-stack-offset) * -1)",
    borderTopRadius: "l3",
    pb: "[env(safe-area-inset-bottom)]",
    _after: {
      ...vertical._after,
      top: "calc(100% - 1px)",
      bottom: "auto",
    },
    _open: {
      animationName: "slide-from-bottom-full, fade-in",
    },
    _closed: {
      animationName: "slide-to-bottom-full, fade-out",
    },
  },
}

const up = {
  positioner: {
    justifyContent: "stretch",
    alignItems: "flex-start",
  },
  content: {
    ...vertical,
    maxH: "100dvh",
    transformOrigin: "bottom",
    translate: "0 var(--drawer-stack-offset)",
    borderTopRadius: "0",
    pb: "0",
    _after: {
      ...vertical._after,
      top: "auto",
      bottom: "calc(100% - 1px)",
    },
    _open: {
      animationName: "slide-from-top-full, fade-in",
    },
    _closed: {
      animationName: "slide-to-top-full, fade-out",
    },
  },
}

const left = {
  positioner: {
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  content: {
    ...horizontal,
    translate: "var(--drawer-stack-offset) 0",
    _after: {
      ...horizontal._after,
      left: "auto",
      right: "calc(100% - 1px)",
    },
    _open: {
      animationName: "slide-from-left-full, fade-in",
    },
    _closed: {
      animationName: "slide-to-left-full, fade-out",
    },
  },
}

const right = {
  positioner: {
    justifyContent: "flex-end",
    alignItems: "stretch",
  },
  content: {
    ...horizontal,
    translate: "calc(var(--drawer-stack-offset) * -1) 0",
    _after: {
      ...horizontal._after,
      left: "calc(100% - 1px)",
      right: "auto",
    },
    _open: {
      animationName: "slide-from-right-full, fade-in",
    },
    _closed: {
      animationName: "slide-to-right-full, fade-out",
    },
  },
}

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
    "swipeArea",
    "indent",
    "indentBackground",
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
        "--fade-out-from": "calc(1 - var(--drawer-swipe-progress, 0))",
        animationName: "fade-out-from",
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
      "&[data-swipe-direction=down]": down.positioner,
      "&[data-swipe-direction=up]": up.positioner,
      "&[data-swipe-direction=left]": left.positioner,
      "&[data-swipe-direction=right]": right.positioner,
    },
    content: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      "--drawer-z-index": "zIndex.popover",
      "--drawer-bleed": "spacing.12",
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
      _after: {
        content: '""',
        position: "absolute",
        bg: "inherit",
        pointerEvents: "none",
      },
      _open: {
        animationDuration: "slowest",
        animationTimingFunction: "ease-in-smooth",
      },
      _closed: {
        animationDuration: "calc(var(--drawer-swipe-strength, 1) * {durations.slower})",
        animationTimingFunction: "ease-in-smooth",
      },
      "&[data-swipe-direction=down]": down.content,
      "&[data-swipe-direction=up]": up.content,
      "&[data-swipe-direction=left]": left.content,
      "&[data-swipe-direction=right]": right.content,
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
    swipeArea: {
      pos: "fixed",
      zIndex: "docked",
      "&[data-swipe-direction=up]": {
        insetInline: 0,
        bottom: 0,
        h: "6",
      },
      "&[data-swipe-direction=down]": {
        insetInline: 0,
        top: 0,
        h: "6",
      },
      "&[data-swipe-direction=left]": {
        insetBlock: 0,
        right: 0,
        w: "6",
      },
      "&[data-swipe-direction=right]": {
        insetBlock: 0,
        left: 0,
        w: "6",
      },
    },
    indentBackground: {
      pos: "absolute",
      inset: 0,
      bg: "black",
      opacity: 0,
      transitionProperty: "opacity",
      transitionDuration: "slowest",
      transitionTimingFunction: "ease-in-smooth",
      "&[data-active]": {
        opacity: 1,
      },
    },
    indent: {
      pos: "relative",
      minH: "100dvh",
      bg: "bg",
      transformOrigin: "center top",
      transitionProperty: "scale, translate, border-radius",
      transitionDuration: "slowest",
      transitionTimingFunction: "ease-in-smooth",
      "&[data-active]": {
        rounded: "l3",
        overflow: "hidden",
        scale: "calc(0.94 + 0.06 * var(--drawer-swipe-progress, 0))",
        translate: "0 calc({spacing.3} * (1 - var(--drawer-swipe-progress, 0)))",
      },
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
        positioner: { ...left.positioner, _rtl: right.positioner },
        content: { ...left.content, _rtl: right.content },
      },
      end: {
        positioner: { ...right.positioner, _rtl: left.positioner },
        content: { ...right.content, _rtl: left.content },
      },
      top: up,
      bottom: down,
    },
    float: {
      true: {
        positioner: {
          padding: "4",
        },
        content: {
          borderRadius: "l3",
          _after: {
            display: "none",
          },
        },
      },
    },
  },
  defaultVariants: {
    size: "xs",
  },
})
