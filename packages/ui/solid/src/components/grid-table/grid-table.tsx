import { ark } from "@ark-ui/solid/factory"
import { gridTable } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
import { type ComponentProps, type JSX, splitProps } from "solid-js"

const { withProvider, withContext } = createSlotRecipeContext(gridTable)

const StyledGridTableRoot = withProvider(ark.div, "root", {
  defaultProps: { role: "table" },
})

export interface GridTableRootProps extends ComponentProps<typeof StyledGridTableRoot> {
  columns?: string | undefined
}

export function GridTableRoot(props: GridTableRootProps) {
  const [local, rest] = splitProps(props, ["columns", "style"])
  return (
    <StyledGridTableRoot
      style={
        {
          "--grid-template-columns": local.columns ?? "repeat(auto-fit, minmax(10rem, 1fr))",
          ...(typeof local.style === "object" ? local.style : {}),
        } as JSX.CSSProperties
      }
      {...rest}
    />
  )
}

export const GridTableHeader = withContext(ark.div, "header", {
  defaultProps: { role: "rowgroup" },
})
export type GridTableHeaderProps = ComponentProps<typeof GridTableHeader>

export const GridTableHeaderRow = withContext(ark.div, "headerRow", {
  defaultProps: { role: "row" },
})
export type GridTableHeaderRowProps = ComponentProps<typeof GridTableHeaderRow>

export const GridTableBody = withContext(ark.div, "body", {
  defaultProps: { role: "rowgroup" },
})
export type GridTableBodyProps = ComponentProps<typeof GridTableBody>

const StyledGridTableColumnHeader = withContext(ark.div, "columnHeader", {
  defaultProps: { role: "columnheader" },
})

export interface GridTableColumnHeaderProps extends ComponentProps<typeof StyledGridTableColumnHeader> {
  sticky?: "start" | "end" | undefined
}

export function GridTableColumnHeader(props: GridTableColumnHeaderProps) {
  const [local, rest] = splitProps(props, ["sticky"])
  return <StyledGridTableColumnHeader data-sticky={local.sticky} {...rest} />
}

const StyledGridTableRow = withContext(ark.div, "row", {
  defaultProps: { role: "row" },
})

export interface GridTableRowProps extends ComponentProps<typeof StyledGridTableRow> {
  selected?: boolean | undefined
}

export function GridTableRow(props: GridTableRowProps) {
  const [local, rest] = splitProps(props, ["selected"])
  return <StyledGridTableRow aria-selected={local.selected || undefined} {...rest} />
}

const StyledGridTableCell = withContext(ark.div, "cell", {
  defaultProps: { role: "cell" },
})

export interface GridTableCellProps extends ComponentProps<typeof StyledGridTableCell> {
  sticky?: "start" | "end" | undefined
}

export function GridTableCell(props: GridTableCellProps) {
  const [local, rest] = splitProps(props, ["sticky"])
  return <StyledGridTableCell data-sticky={local.sticky} {...rest} />
}
