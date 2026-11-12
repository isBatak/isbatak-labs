import { ark } from "@ark-ui/solid/factory"
import { table } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
import { type ComponentProps, splitProps } from "solid-js"

const { withProvider, withContext, PropsProvider } = createSlotRecipeContext(table)

export const TableRoot = withProvider(ark.table, "root")
export type TableRootProps = ComponentProps<typeof TableRoot>

export const TablePropsProvider = PropsProvider

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

export function TableRow(props: TableRowProps) {
  const [local, rest] = splitProps(props, ["selected"])
  return <StyledTableRow aria-selected={local.selected || undefined} {...rest} />
}

const StyledTableColumnHeader = withContext(ark.th, "columnHeader")

export interface TableColumnHeaderProps extends ComponentProps<typeof StyledTableColumnHeader> {
  sticky?: "start" | "end" | undefined
}

export function TableColumnHeader(props: TableColumnHeaderProps) {
  const [local, rest] = splitProps(props, ["sticky"])
  return <StyledTableColumnHeader data-sticky={local.sticky} {...rest} />
}

const StyledTableCell = withContext(ark.td, "cell")

export interface TableCellProps extends ComponentProps<typeof StyledTableCell> {
  sticky?: "start" | "end" | undefined
}

export function TableCell(props: TableCellProps) {
  const [local, rest] = splitProps(props, ["sticky"])
  return <StyledTableCell data-sticky={local.sticky} {...rest} />
}

export const TableCaption = withContext(ark.caption, "caption")
export type TableCaptionProps = ComponentProps<typeof TableCaption>
