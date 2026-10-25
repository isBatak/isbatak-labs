import { defineSlotRecipe } from "@pandacss/dev"

export const tocSlotRecipe = defineSlotRecipe({
  slots: ["root", "title", "list", "item", "link", "indicator", "track"],
  className: "toc",
  base: {
    root: {
      "--toc-indent": "spacing.2.5",
      "--toc-link-offset": "spacing.4",
    },
    title: {
      display: "block",
      mb: "3",
      textStyle: "sm",
      fontWeight: "semibold",
    },
    list: {
      position: "relative",
      display: "grid",
    },
    item: {
      display: "block",
    },
    link: {
      display: "block",
      ps: "calc(var(--toc-link-offset) + (var(--depth, 1) - 1) * var(--toc-indent))",
      color: "fg.muted",
      transitionProperty: "color",
      transitionDuration: "fast",
      focusVisibleRing: "inside",
      _hover: {
        color: "fg",
      },
      "&[data-active]": {
        color: "fg",
      },
    },
    indicator: {
      position: "absolute",
      pointerEvents: "none",
      bg: "fg",
      borderRadius: "full",
      transitionDuration: "moderate",
      transitionTimingFunction: "ease-in-out",
      "&[hidden]": {
        display: "none",
      },
    },
    track: {
      position: "absolute",
      top: "0",
      insetStart: "0",
      overflow: "visible",
      pointerEvents: "none",
      fill: "none",
      _rtl: {
        transform: "scaleX(-1)",
      },
      "& path": {
        stroke: "border",
        strokeWidth: "1",
      },
      "&[data-active]": {
        clipPath: "inset(var(--top, 0px) -2px calc(100% - var(--top, 0px) - var(--height, 0px)) -2px)",
        transitionProperty: "clip-path",
        transitionDuration: "moderate",
        transitionTimingFunction: "ease-in-out",
        "& path": {
          stroke: "fg",
          strokeWidth: "1.5",
        },
      },
    },
  },
  variants: {
    variant: {
      line: {
        list: {
          borderStartWidth: "1px",
        },
        link: {
          "&[data-active]": {
            fontWeight: "medium",
          },
        },
        indicator: {
          insetStart: "-1px",
          top: "var(--top)",
          w: "2px",
          h: "var(--height)",
          transitionProperty: "top, height",
        },
        track: {
          display: "none",
        },
      },
      track: {
        root: {
          ps: "1",
        },
        indicator: {
          insetStart: "var(--toc-dot-x, 1px)",
          top: "calc(var(--top) + var(--height))",
          w: "1.5",
          h: "1.5",
          translate: "-50% -50%",
          transitionProperty: "top, inset-inline-start",
          _rtl: {
            translate: "50% -50%",
          },
          "[data-scroll-direction=up] > &": {
            top: "var(--top)",
          },
        },
      },
    },
    size: {
      sm: {
        link: {
          py: "1",
          textStyle: "xs",
        },
      },
      md: {
        link: {
          py: "1.5",
          textStyle: "sm",
        },
      },
    },
  },
  defaultVariants: {
    variant: "line",
    size: "md",
  },
})
