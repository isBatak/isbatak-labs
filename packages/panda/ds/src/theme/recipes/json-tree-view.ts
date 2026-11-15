import { defineSlotRecipe } from "@pandacss/dev"

export const jsonTreeViewSlotRecipe = defineSlotRecipe({
  slots: ["root", "tree"],
  className: "json-tree-view",
  description:
    "Read-only, expandable view of a JavaScript value (objects, arrays, maps, sets, functions, errors) with syntax colours. Use TreeView for a navigable list of your own nodes, CodePreview for formatted source text.",
  base: {
    root: {
      width: "full",
      fontFamily: "mono",
      color: "fg",
    },
    tree: {
      display: "flex",
      flexDirection: "column",
      outline: "none",
      lineHeight: "taller",
      "--tree-gap": "spacing.1",
      _icon: {
        boxSize: "var(--tree-icon-size)",
      },
      "& [data-tree-view-node-group], & [data-tree-view-node-group-content]": {
        position: "relative",
      },
      "& [data-tree-view-node]": {
        display: "flex",
        alignItems: "flex-start",
        position: "relative",
        rounded: "l1",
        outline: "none",
        userSelect: "none",
        "--tree-depth": "calc(var(--depth) - 1)",
        "--tree-indentation-offset": "calc((var(--tree-icon-size) + var(--tree-gap)) * var(--tree-depth))",
        "--tree-offset": "calc(var(--tree-padding-inline) + var(--tree-indentation-offset))",
        ps: "var(--tree-offset)",
        pe: "var(--tree-padding-inline)",
        focusVisibleRing: "inside",
        focusRingColor: "border.emphasized",
        focusRingWidth: "2px",
        "&:hover, &:focus-visible": {
          bg: "bg.muted",
        },
        _selected: {
          bg: "colorPalette.subtle",
        },
        "&:not([data-branch])": {
          ps: "calc(var(--tree-offset) + var(--tree-icon-size) + var(--tree-gap))",
        },
        "&[data-branch]": {
          cursor: "button",
        },
      },
      "& [data-tree-view-cell]": {
        display: "flex",
        alignItems: "flex-start",
        gap: "var(--tree-gap)",
        minW: "0",
      },
      "& [data-tree-view-node-indicator]": {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: "0",
        height: "[2em]",
        color: "fg.muted",
        transformOrigin: "center",
        transitionDuration: "normal",
        transitionProperty: "transform",
        transitionTimingFunction: "default",
        _open: {
          transform: "rotate(90deg)",
        },
      },
      "& [data-tree-view-node-text]": {
        minW: "0",
        overflowWrap: "anywhere",
      },
      "& [data-tree-view-indent-guide]": {
        position: "absolute",
        height: "full",
        width: "1px",
        bg: "border",
        zIndex: "1",
        "--tree-depth": "calc(var(--depth) - 1)",
        "--tree-indentation-offset": "calc((var(--tree-icon-size) + var(--tree-gap)) * var(--tree-depth))",
        "--tree-offset": "calc(var(--tree-padding-inline) + var(--tree-indentation-offset))",
        insetInlineStart: "calc(var(--tree-offset) + var(--tree-icon-size) * 0.5)",
      },
      "& [data-type=string]": {
        color: "green.fg",
      },
      "& [data-type=number], & [data-type=bigint], & [data-type=date]": {
        color: "blue.fg",
      },
      "& [data-type=boolean]": {
        color: "orange.fg",
        fontWeight: "semibold",
      },
      "& [data-type=null], & [data-type=undefined]": {
        color: "fg.muted",
        fontWeight: "semibold",
        fontStyle: "italic",
      },
      "& [data-type=function]": {
        color: "orange.fg",
        fontStyle: "italic",
      },
      "& [data-type=error]": {
        color: "fg.error",
        fontWeight: "medium",
      },
      "& [data-type=regex], & [data-type=symbol]": {
        color: "pink.fg",
      },
      "& [data-kind=brace]": {
        color: "fg",
        fontWeight: "bold",
      },
      "& [data-kind=key]": {
        color: "purple.fg",
        fontWeight: "medium",
      },
      "& [data-kind=key][data-non-enumerable]": {
        opacity: "0.7",
      },
      "& [data-kind=colon], & [data-kind=operator]": {
        color: "fg.muted",
      },
      "& [data-kind=preview-text]": {
        color: "fg.muted",
        fontStyle: "italic",
      },
      "& [data-kind=constructor]": {
        color: "teal.fg",
        fontWeight: "medium",
      },
      "& a": {
        textDecoration: "underline",
        textUnderlineOffset: "[0.2em]",
      },
    },
  },
  variants: {
    variant: {
      plain: {},
      outline: {
        root: {
          p: "2",
          rounded: "l2",
          borderWidth: "1px",
          borderColor: "border",
        },
      },
      subtle: {
        root: {
          p: "2",
          rounded: "l2",
          bg: "bg.subtle",
        },
      },
    },
    size: {
      sm: {
        tree: {
          textStyle: "xs",
          lineHeight: "taller",
          "--tree-icon-size": "spacing.3",
          "--tree-padding-inline": "spacing.1",
        },
      },
      md: {
        tree: {
          textStyle: "sm",
          lineHeight: "taller",
          "--tree-icon-size": "spacing.4",
          "--tree-padding-inline": "spacing.1.5",
        },
      },
      lg: {
        tree: {
          textStyle: "md",
          lineHeight: "taller",
          "--tree-icon-size": "spacing.4",
          "--tree-padding-inline": "spacing.2",
        },
      },
    },
  },
  defaultVariants: {
    variant: "plain",
    size: "md",
  },
})
