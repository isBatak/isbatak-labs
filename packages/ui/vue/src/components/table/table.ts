import { ark } from "@ark-ui/vue/factory"
import { table } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { type Component, type PropType, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

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
export type TableRowProps = ComponentProps<typeof StyledTableRow> & { selected?: boolean | undefined }

export const TableRow = defineComponent({
  name: "TableRow",
  inheritAttrs: false,
  props: { selected: Boolean },
  setup(props, { attrs, slots }) {
    return () => h(StyledTableRow as Component, { ...attrs, "aria-selected": props.selected || undefined }, slots)
  },
}) as unknown as new () => { $props: TableRowProps }

const StyledTableColumnHeader = withContext(ark.th, "columnHeader")
export type TableColumnHeaderProps = ComponentProps<typeof StyledTableColumnHeader> & {
  sticky?: "start" | "end" | undefined
}

export const TableColumnHeader = defineComponent({
  name: "TableColumnHeader",
  inheritAttrs: false,
  props: { sticky: String as PropType<"start" | "end"> },
  setup(props, { attrs, slots }) {
    return () => h(StyledTableColumnHeader as Component, { ...attrs, "data-sticky": props.sticky }, slots)
  },
}) as unknown as new () => { $props: TableColumnHeaderProps }

const StyledTableCell = withContext(ark.td, "cell")
export type TableCellProps = ComponentProps<typeof StyledTableCell> & { sticky?: "start" | "end" | undefined }

export const TableCell = defineComponent({
  name: "TableCell",
  inheritAttrs: false,
  props: { sticky: String as PropType<"start" | "end"> },
  setup(props, { attrs, slots }) {
    return () => h(StyledTableCell as Component, { ...attrs, "data-sticky": props.sticky }, slots)
  },
}) as unknown as new () => { $props: TableCellProps }

export const TableCaption = withContext(ark.caption, "caption")
export type TableCaptionProps = ComponentProps<typeof TableCaption>
