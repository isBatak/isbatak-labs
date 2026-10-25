import { defineSlotRecipe, type defineStyles } from "@pandacss/dev"

type SystemStyleObject = ReturnType<typeof defineStyles>

const stickyStart = (bg: string): SystemStyleObject => ({
  position: "sticky",
  insetInlineStart: "0",
  zIndex: 1,
  bg: `linear-gradient(var(--table-sticky-start-angle), ${bg} 90%, transparent 100%)`,
})

const stickyEnd = (bg: string): SystemStyleObject => ({
  position: "sticky",
  insetInlineEnd: "0",
  zIndex: 1,
  bg: `linear-gradient(var(--table-sticky-end-angle), ${bg} 90%, transparent 100%)`,
})

export const gridTableSlotRecipe = defineSlotRecipe({
  className: "grid-table",
  slots: ["root", "header", "headerRow", "columnHeader", "body", "row", "cell"],
  base: {
    root: {
      display: "grid",
      gridTemplateColumns: "var(--grid-template-columns)",
      width: "full",
      fontVariantNumeric: "lining-nums tabular-nums",
      textAlign: "start",
      overflow: "auto",
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
    header: {
      display: "grid",
      gridTemplateColumns: "subgrid",
      gridColumn: "1 / -1",
    },
    headerRow: {
      display: "grid",
      gridTemplateColumns: "subgrid",
      gridColumn: "1 / -1",
    },
    columnHeader: {
      display: "flex",
      alignItems: "center",
      textAlign: "start",
      fontWeight: "medium",
      color: "fg.muted",
      bg: "var(--table-header-bg)",
      borderColor: "var(--table-border-color)",
      position: "relative",
      zIndex: 0,
      "&[data-sticky=start]": stickyStart("var(--table-sticky-column-header-bg)"),
      "&[data-sticky=end]": stickyEnd("var(--table-sticky-column-header-bg)"),
    },
    body: {
      display: "grid",
      gridTemplateColumns: "subgrid",
      gridColumn: "1 / -1",
    },
    row: {
      display: "grid",
      gridTemplateColumns: "subgrid",
      gridColumn: "1 / -1",
      _selected: {
        bg: "var(--table-row-selected-bg)",
        "& > [data-sticky]": {
          "--table-sticky-cell-bg": "var(--table-row-selected-bg)",
        },
      },
    },
    cell: {
      display: "flex",
      alignItems: "center",
      textAlign: "start",
      borderColor: "var(--table-border-color)",
      position: "relative",
      zIndex: 0,
      "&[data-sticky=start]": stickyStart("var(--table-sticky-cell-bg)"),
      "&[data-sticky=end]": stickyEnd("var(--table-sticky-cell-bg)"),
    },
  },
  variants: {
    interactive: {
      true: {
        row: {
          cursor: "pointer",
          _hover: {
            bg: "var(--table-row-hover-bg)",
            "& > [data-sticky]": {
              "--table-sticky-cell-bg": "var(--table-row-hover-bg)",
            },
            _selected: {
              bg: "var(--table-row-selected-bg)",
              "& > [data-sticky]": {
                "--table-sticky-cell-bg": "var(--table-row-selected-bg)",
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
          position: "sticky",
          top: "var(--table-sticky-offset, 0)",
          zIndex: "3",
        },
        headerRow: {
          bg: "var(--table-header-bg)",
        },
        columnHeader: {
          "&[data-sticky]": {
            zIndex: "4",
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
          minH: "8",
        },
        cell: {
          px: "2",
          py: "1.5",
          minH: "8",
        },
      },
      md: {
        root: {
          textStyle: "sm",
        },
        columnHeader: {
          px: "3",
          minH: "10",
        },
        cell: {
          px: "3",
          py: "2.5",
          minH: "10",
        },
      },
      lg: {
        root: {
          textStyle: "md",
        },
        columnHeader: {
          px: "4",
          minH: "12",
        },
        cell: {
          px: "4",
          py: "3",
          minH: "12",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    showRowBorder: true,
  },
})
