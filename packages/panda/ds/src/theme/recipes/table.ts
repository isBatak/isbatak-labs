import { defineSlotRecipe } from "@pandacss/dev"

export const tableSlotRecipe = defineSlotRecipe({
  className: "table",
  description: "Semantic HTML table for tabular data",
  slots: ["root", "header", "body", "footer", "columnHeader", "row", "cell", "caption"],
  base: {
    root: {
      fontVariantNumeric: "lining-nums tabular-nums",
      borderCollapse: "collapse",
      width: "full",
      textAlign: "start",
      verticalAlign: "top",
      "--table-border-color": "colors.border",
      "--table-row-hover-bg": "colors.bg.muted",
      "--table-row-selected-bg": "colors.colorPalette.subtle",
      "--table-sticky-cell-bg": "colors.bg",
      "--table-sticky-column-header-bg": "var(--table-header-bg, {colors.bg})",
      "--table-sticky-start-angle": "90deg",
      "--table-sticky-end-angle": "270deg",
      _rtl: {
        "--table-sticky-start-angle": "270deg",
        "--table-sticky-end-angle": "90deg",
      },
    },
    row: {
      _selected: {
        bg: "var(--table-row-selected-bg)",
        "& [data-sticky]": {
          "--table-sticky-cell-bg": "var(--table-row-selected-bg)",
        },
      },
    },
    cell: {
      textAlign: "start",
      verticalAlign: "top",
      borderColor: "var(--table-border-color)",
      position: "relative",
      zIndex: 0,
      "&[data-sticky]": {
        position: "sticky",
        zIndex: 1,
      },
      "&[data-sticky=start]": {
        insetInlineStart: "0",
        bg: "linear-gradient(var(--table-sticky-start-angle), var(--table-sticky-cell-bg) 90%, transparent 100%)",
      },
      "&[data-sticky=end]": {
        insetInlineEnd: "0",
        bg: "linear-gradient(var(--table-sticky-end-angle), var(--table-sticky-cell-bg) 90%, transparent 100%)",
      },
    },
    columnHeader: {
      textAlign: "start",
      verticalAlign: "middle",
      fontWeight: "medium",
      color: "fg.muted",
      bg: "var(--table-header-bg)",
      borderColor: "var(--table-border-color)",
      "&[data-sticky]": {
        position: "sticky",
        zIndex: 1,
      },
      "&[data-sticky=start]": {
        insetInlineStart: "0",
        bg: "linear-gradient(var(--table-sticky-start-angle), var(--table-sticky-column-header-bg) 90%, transparent 100%)",
      },
      "&[data-sticky=end]": {
        insetInlineEnd: "0",
        bg: "linear-gradient(var(--table-sticky-end-angle), var(--table-sticky-column-header-bg) 90%, transparent 100%)",
      },
    },
    caption: {
      captionSide: "bottom",
      mt: "2",
      textStyle: "xs",
      color: "fg.muted",
    },
    footer: {
      fontWeight: "medium",
    },
  },
  variants: {
    interactive: {
      true: {
        body: {
          "& tr": {
            cursor: "pointer",
            _hover: {
              bg: "var(--table-row-hover-bg)",
              "& [data-sticky]": {
                "--table-sticky-cell-bg": "var(--table-row-hover-bg)",
              },
              _selected: {
                bg: "var(--table-row-selected-bg)",
                "& [data-sticky]": {
                  "--table-sticky-cell-bg": "var(--table-row-selected-bg)",
                },
              },
            },
          },
        },
      },
    },
    stickyHeader: {
      true: {
        root: {
          "--table-header-bg": "var(--table-highlighted-header-bg, {colors.bg})",
        },
        header: {
          "& :where(tr)": {
            top: "var(--table-sticky-offset, 0)",
            position: "sticky",
            zIndex: "3",
          },
          "& tr": {
            bg: "var(--table-header-bg)",
          },
        },
      },
    },
    highlightedHeader: {
      true: {
        root: {
          "--table-highlighted-header-bg": "colors.bg.muted",
          "--table-header-bg": "colors.bg.muted",
        },
      },
    },
    showColumnBorder: {
      true: {
        columnHeader: {
          "&:not(:last-child)": {
            borderInlineEndWidth: "1px",
          },
        },
        cell: {
          "&:not(:last-child)": {
            borderInlineEndWidth: "1px",
          },
        },
      },
      false: {
        columnHeader: {
          "&:not(:last-child)": {
            borderInlineEndWidth: "0",
          },
        },
        cell: {
          "&:not(:last-child)": {
            borderInlineEndWidth: "0",
          },
        },
      },
    },
    showRowBorder: {
      true: {
        columnHeader: {
          borderBottomWidth: "1px",
        },
        cell: {
          borderBottomWidth: "1px",
        },
      },
      false: {
        columnHeader: {
          borderBottomWidth: "0",
        },
        cell: {
          borderBottomWidth: "0",
        },
      },
    },
    size: {
      sm: {
        root: {
          textStyle: "xs",
        },
        columnHeader: {
          px: "2",
          h: "8",
        },
        cell: {
          px: "2",
          py: "1.5",
          h: "8",
        },
      },
      md: {
        root: {
          textStyle: "sm",
        },
        columnHeader: {
          px: "3",
          h: "10",
        },
        cell: {
          px: "3",
          py: "2.5",
          h: "10",
        },
      },
      lg: {
        root: {
          textStyle: "md",
        },
        columnHeader: {
          px: "4",
          h: "12",
        },
        cell: {
          px: "4",
          py: "3",
          h: "12",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    showRowBorder: true,
  },
})
