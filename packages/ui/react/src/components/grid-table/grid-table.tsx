"use client"

import { ark } from "@ark-ui/react/factory"
import type { ComponentProps, CSSProperties } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { gridTable } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext } = createSlotRecipeContext(gridTable)

const StyledGridTableRoot = withProvider(ark.div, "root", {
  defaultProps: { role: "table" },
})

export interface GridTableRootProps extends ComponentProps<typeof StyledGridTableRoot> {
  columns?: string | undefined
}

export function GridTableRoot({
  columns = "repeat(auto-fit, minmax(10rem, 1fr))",
  style,
  ...props
}: GridTableRootProps) {
  return <StyledGridTableRoot style={{ "--grid-template-columns": columns, ...style } as CSSProperties} {...props} />
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

export function GridTableColumnHeader({ sticky, ...props }: GridTableColumnHeaderProps) {
  return <StyledGridTableColumnHeader data-sticky={sticky} {...props} />
}

const StyledGridTableRow = withContext(ark.div, "row", {
  defaultProps: { role: "row" },
})

export interface GridTableRowProps extends ComponentProps<typeof StyledGridTableRow> {
  selected?: boolean | undefined
}

export function GridTableRow({ selected, ...props }: GridTableRowProps) {
  return <StyledGridTableRow aria-selected={selected || undefined} {...props} />
}

const StyledGridTableCell = withContext(ark.div, "cell", {
  defaultProps: { role: "cell" },
})

export interface GridTableCellProps extends ComponentProps<typeof StyledGridTableCell> {
  sticky?: "start" | "end" | undefined
}

export function GridTableCell({ sticky, ...props }: GridTableCellProps) {
  return <StyledGridTableCell data-sticky={sticky} {...props} />
}
