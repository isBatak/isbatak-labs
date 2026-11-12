import { defineSlotRecipe } from "@pandacss/dev"

const nodeRow = {
  display: "flex",
  alignItems: "center",
  gap: "var(--tree-item-gap)",
  rounded: "l2",
  userSelect: "none",
  position: "relative",
  cursor: "button",
  outline: "none",
  "--tree-depth": "calc(var(--depth) - 1)",
  "--tree-indentation-offset": "calc(var(--tree-indentation) * var(--tree-depth))",
  "--tree-offset": "calc(var(--tree-padding-inline) + var(--tree-indentation-offset))",
  ps: "var(--tree-offset)",
  pe: "var(--tree-padding-inline)",
  py: "var(--tree-padding-block)",
  focusVisibleRing: "inside",
  focusRingColor: "border.emphasized",
  focusRingWidth: "2px",
  "&:hover, &:focus-visible": {
    bg: "bg.muted",
  },
  _disabled: {
    layerStyle: "disabled",
  },
} as const

export const treeViewSlotRecipe = defineSlotRecipe({
  slots: [
    "cell",
    "indentGuide",
    "label",
    "node",
    "nodeCheckbox",
    "nodeExpandTrigger",
    "nodeGroup",
    "nodeGroupContent",
    "nodeIndicator",
    "nodeRenameInput",
    "nodeText",
    "root",
    "tree",
  ],
  className: "tree-view",
  description:
    "Expandable hierarchical list of nodes, such as a file explorer or nested navigation. Use Accordion for a flat list of collapsible sections.",
  base: {
    root: {
      width: "full",
      display: "flex",
      flexDirection: "column",
      gap: "2",
    },
    tree: {
      display: "flex",
      flexDirection: "column",
      outline: "none",
      "--tree-item-gap": "spacing.2",
      "--tree-indentation": "calc(var(--tree-indent-size) + var(--tree-icon-size) * 0.5)",
      _icon: {
        boxSize: "var(--tree-icon-size)",
      },
    },
    label: {
      fontWeight: "medium",
      textStyle: "sm",
    },
    nodeGroup: {
      position: "relative",
    },
    nodeGroupContent: {
      position: "relative",
    },
    indentGuide: {
      height: "full",
      width: "1px",
      bg: "border",
      position: "absolute",
      "--tree-depth": "calc(var(--depth) - 1)",
      "--tree-indentation-offset": "calc(var(--tree-indentation) * var(--tree-depth))",
      "--tree-offset": "calc(var(--tree-padding-inline) + var(--tree-indentation-offset))",
      insetInlineStart: "calc(var(--tree-offset) + var(--tree-icon-size) * 0.5)",
      zIndex: "1",
    },
    node: nodeRow,
    nodeExpandTrigger: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    },
    nodeIndicator: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "fg.muted",
      transformOrigin: "center",
      transitionDuration: "normal",
      transitionProperty: "transform",
      transitionTimingFunction: "default",
      _open: {
        transform: "rotate(90deg)",
      },
      _hidden: {
        display: "none",
      },
    },
    nodeText: {
      flex: "1",
      truncate: true,
    },
    nodeCheckbox: {
      display: "inline-flex",
    },
    nodeRenameInput: {
      flex: "1",
      minW: "0",
      bg: "bg",
      rounded: "l1",
      px: "1",
      outline: "none",
      borderWidth: "1px",
      borderColor: "border.emphasized",
      _hidden: {
        display: "none",
      },
    },
    cell: {
      display: "inline-flex",
      alignItems: "center",
    },
  },
  variants: {
    size: {
      md: {
        tree: {
          textStyle: "sm",
          "--tree-indent-size": "spacing.4",
          "--tree-icon-size": "spacing.4",
          "--tree-padding-inline": "spacing.3",
          "--tree-padding-block": "spacing.1.5",
        },
      },
      sm: {
        tree: {
          textStyle: "sm",
          "--tree-indent-size": "spacing.4",
          "--tree-icon-size": "spacing.3",
          "--tree-padding-inline": "spacing.3",
          "--tree-padding-block": "spacing.1",
        },
      },
      xs: {
        tree: {
          textStyle: "xs",
          "--tree-indent-size": "spacing.4",
          "--tree-icon-size": "spacing.3",
          "--tree-padding-inline": "spacing.2",
          "--tree-padding-block": "spacing.1",
        },
      },
    },
    variant: {
      subtle: {
        node: {
          _selected: {
            bg: "colorPalette.subtle",
            color: "colorPalette.fg",
          },
        },
      },
      solid: {
        node: {
          _selected: {
            layerStyle: "fill.solid",
            "& [data-tree-view-node-indicator]": {
              color: "currentColor",
            },
          },
        },
      },
    },
    animateContent: {
      true: {
        nodeGroupContent: {
          _open: {
            animationName: "expand-height, fade-in",
            animationDuration: "moderate",
          },
          _closed: {
            animationName: "collapse-height, fade-out",
            animationDuration: "moderate",
          },
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "subtle",
  },
})
