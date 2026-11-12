import { ark } from "@ark-ui/vue/factory"
import { gridTable } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { type Component, type PropType, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

const { withProvider, withContext } = createSlotRecipeContext(gridTable)

const StyledGridTableRoot = withProvider(ark.div, "root", {
  defaultProps: { role: "table" },
})
export type GridTableRootProps = ComponentProps<typeof StyledGridTableRoot> & { columns?: string | undefined }

export const GridTableRoot = defineComponent({
  name: "GridTableRoot",
  inheritAttrs: false,
  props: { columns: { type: String, default: "repeat(auto-fit, minmax(10rem, 1fr))" } },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        StyledGridTableRoot as Component,
        { ...attrs, style: [{ "--grid-template-columns": props.columns }, attrs.style] },
        slots,
      )
  },
}) as unknown as new () => { $props: GridTableRootProps }

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
export type GridTableColumnHeaderProps = ComponentProps<typeof StyledGridTableColumnHeader> & {
  sticky?: "start" | "end" | undefined
}

export const GridTableColumnHeader = defineComponent({
  name: "GridTableColumnHeader",
  inheritAttrs: false,
  props: { sticky: String as PropType<"start" | "end"> },
  setup(props, { attrs, slots }) {
    return () => h(StyledGridTableColumnHeader as Component, { ...attrs, "data-sticky": props.sticky }, slots)
  },
}) as unknown as new () => { $props: GridTableColumnHeaderProps }

const StyledGridTableRow = withContext(ark.div, "row", {
  defaultProps: { role: "row" },
})
export type GridTableRowProps = ComponentProps<typeof StyledGridTableRow> & { selected?: boolean | undefined }

export const GridTableRow = defineComponent({
  name: "GridTableRow",
  inheritAttrs: false,
  props: { selected: Boolean },
  setup(props, { attrs, slots }) {
    return () => h(StyledGridTableRow as Component, { ...attrs, "aria-selected": props.selected || undefined }, slots)
  },
}) as unknown as new () => { $props: GridTableRowProps }

const StyledGridTableCell = withContext(ark.div, "cell", {
  defaultProps: { role: "cell" },
})
export type GridTableCellProps = ComponentProps<typeof StyledGridTableCell> & { sticky?: "start" | "end" | undefined }

export const GridTableCell = defineComponent({
  name: "GridTableCell",
  inheritAttrs: false,
  props: { sticky: String as PropType<"start" | "end"> },
  setup(props, { attrs, slots }) {
    return () => h(StyledGridTableCell as Component, { ...attrs, "data-sticky": props.sticky }, slots)
  },
}) as unknown as new () => { $props: GridTableCellProps }
