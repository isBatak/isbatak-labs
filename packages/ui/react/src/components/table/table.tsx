"use client"

import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { table } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext } = createSlotRecipeContext(table)

export const TableRoot = withProvider(ark.table, "root")
export type TableRootProps = ComponentProps<typeof TableRoot>

export const TableHeader = withContext(ark.thead, "header")
export type TableHeaderProps = ComponentProps<typeof TableHeader>

export const TableBody = withContext(ark.tbody, "body")
export type TableBodyProps = ComponentProps<typeof TableBody>

export const TableFooter = withContext(ark.tfoot, "footer")
export type TableFooterProps = ComponentProps<typeof TableFooter>

const StyledTableRow = withContext(ark.tr, "row")

export interface TableRowProps extends ComponentProps<typeof StyledTableRow> {
  selected?: boolean | undefined
}

export function TableRow({ selected, ...props }: TableRowProps) {
  return <StyledTableRow aria-selected={selected || undefined} {...props} />
}

const StyledTableColumnHeader = withContext(ark.th, "columnHeader")

export interface TableColumnHeaderProps extends ComponentProps<typeof StyledTableColumnHeader> {
  sticky?: "start" | "end" | undefined
}

export function TableColumnHeader({ sticky, ...props }: TableColumnHeaderProps) {
  return <StyledTableColumnHeader data-sticky={sticky} {...props} />
}

const StyledTableCell = withContext(ark.td, "cell")

export interface TableCellProps extends ComponentProps<typeof StyledTableCell> {
  sticky?: "start" | "end" | undefined
}

export function TableCell({ sticky, ...props }: TableCellProps) {
  return <StyledTableCell data-sticky={sticky} {...props} />
}

export const TableCaption = withContext(ark.caption, "caption")
export type TableCaptionProps = ComponentProps<typeof TableCaption>
