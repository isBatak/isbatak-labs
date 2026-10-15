import type { NormalizeProps, PropTypes } from "@zag-js/types"

export interface WheelPickerItem {
  value: string
  label: string
  disabled?: boolean | undefined
}

export interface ValueChangeDetails {
  value: string
  item: WheelPickerItem
}

export interface ElementIds {
  root?: string | undefined
  label?: string | undefined
  viewport?: string | undefined
}

export interface WheelPickerProps {
  /** The unique id of the wheel picker. */
  id: string
  /** The ids of the elements in the wheel picker. Useful for composition. */
  ids?: ElementIds | undefined
  /** The items to pick from. */
  items: WheelPickerItem[]
  /** The selected value. */
  value: string
  /** Function called when the selected value changes. */
  onValueChange?: ((details: ValueChangeDetails) => void) | undefined
  /** Whether the items repeat, so the wheel never reaches an end. @default false */
  loop?: boolean | undefined
  /** The height of each row in pixels. @default 36 */
  itemHeight?: number | undefined
  /** The number of rows in view. Keep it odd so one row sits in the middle. @default 5 */
  visibleCount?: number | undefined
  /** Whether the wheel picker is disabled. */
  disabled?: boolean | undefined
  /** The name of the hidden input, for native forms. */
  name?: string | undefined
  /** The id of the form that owns the hidden input. */
  form?: string | undefined
  /** The accessible label for the wheel picker. */
  "aria-label"?: string | undefined
  /** The id of the element that labels the wheel picker. */
  "aria-labelledby"?: string | undefined
}

export interface WheelPickerRow {
  row: number
  item: WheelPickerItem
}

export interface ItemProps {
  /** The row to render, from `api.rows`. */
  row: number
}

export interface WheelPickerApi<P extends PropTypes = PropTypes> {
  /** The selected value. */
  value: string
  /** The selected item. */
  selectedItem: WheelPickerItem | undefined
  /** The rows to render. A looping wheel renders its items several times. */
  rows: WheelPickerRow[]
  getRootProps: () => P["element"]
  getLabelProps: () => P["element"]
  getControlProps: () => P["element"]
  getViewportProps: () => P["element"]
  getItemGroupProps: () => P["element"]
  getItemProps: (props: ItemProps) => P["element"]
  getHighlightProps: () => P["element"]
  getHiddenInputProps: () => P["input"]
}

export interface WheelPickerController {
  /** Get the props of each part of the wheel picker. */
  connect: <P extends PropTypes>(props: WheelPickerProps, normalize: NormalizeProps<P>) => WheelPickerApi<P>
  /** Start listening for the scroll to settle. Call once the viewport is rendered and clean up on unmount. */
  mount: (getProps: () => WheelPickerProps) => () => void
  /** Move the scroll position to the value. Call after every render that changes `value` or `items`. */
  sync: (props: WheelPickerProps) => void
}
