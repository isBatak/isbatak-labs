import type { EventObject, Machine, Service } from "@zag-js/core"
import type { CommonProperties, DirectionProperty, PropTypes, RequiredBy } from "@zag-js/types"

export interface ItemLayout {
  /** The zero-based column the item starts in. */
  column: number
  /** How many columns the item covers. */
  span: number
  /** The distance in pixels from the top of the root content box. */
  top: number
}

export interface Layout {
  /** The number of columns. */
  columns: number
  /** The height in pixels of the tallest column. */
  height: number
  /** The placement of every visible item, keyed by item value. */
  items: Record<string, ItemLayout>
}

export interface LayoutChangeDetails {
  columns: number
  height: number
}

export interface ElementIds {
  root?: string | undefined
  item?: ((value: string) => string) | undefined
}

export interface MasonryProps extends DirectionProperty, CommonProperties {
  /** The ids of the elements in the masonry. Useful for composition. */
  ids?: ElementIds | undefined
  /**
   * The number of columns. Leave it unset to control it from CSS with the `--masonry-columns` variable, for example
   * to change it per breakpoint.
   * @default 4
   */
  columns?: number | undefined
  /**
   * The minimum column width, for example `"12rem"`. When set, the root fits as many columns as there is room for and
   * `columns` is ignored.
   */
  minColumnWidth?: string | undefined
  /** The space between items, in pixels or as a CSS length. Leave it unset to control it from CSS with `gap`. */
  gap?: number | string | undefined
  /**
   * Whether items fill the columns in order, left to right, instead of going to the shortest column.
   * @default false
   */
  sequential?: boolean | undefined
  /** Function called when the number of columns or the height changes. */
  onLayoutChange?: ((details: LayoutChangeDetails) => void) | undefined
}

type PropsWithDefault = "sequential"

export interface MasonrySchema {
  state: "idle"
  props: RequiredBy<MasonryProps, PropsWithDefault>
  context: {
    layout: Layout | null
  }
  action: string
  effect: string
  guard: string
  event: EventObject
}

export type MasonryService = Service<MasonrySchema>
export type MasonryMachine = Machine<MasonrySchema>

export interface ItemProps {
  /** The unique value of the item. */
  value: string
  /**
   * How many columns the item covers. Capped at the number of columns.
   * @default 1
   */
  span?: number | undefined
}

export interface MasonryApi<T extends PropTypes = PropTypes> {
  /** The number of columns, or `0` before the first layout. */
  columns: number
  /** Whether the items have been measured and placed. Before that they render as a plain grid. */
  measured: boolean
  /** Measure and place the items again. */
  reflow: () => void

  getRootProps: () => T["element"]
  getItemProps: (props: ItemProps) => T["element"]
}
