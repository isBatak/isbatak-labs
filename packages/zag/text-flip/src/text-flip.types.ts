import type { EventObject, Machine, Service } from "@zag-js/core"
import type { CommonProperties, PropTypes, RequiredBy } from "@zag-js/types"

export type ItemState = "visible" | "entering" | "exiting" | "hidden"

export interface IndexChangeDetails {
  index: number
}

export interface ElementIds {
  root?: string | undefined
  item?: ((index: number) => string) | undefined
}

export interface TextFlipProps extends CommonProperties {
  /** The ids of the elements in the text flip. Useful for composition. */
  ids?: ElementIds | undefined
  /**
   * The time in milliseconds each item stays before the next one flips in.
   * @default 2000
   */
  interval?: number | undefined
  /**
   * Whether the items start flipping on their own.
   * @default true
   */
  autoplay?: boolean | undefined
  /**
   * The index of the item shown first.
   * @default 0
   */
  defaultIndex?: number | undefined
  /** Function called when the shown item changes. */
  onIndexChange?: ((details: IndexChangeDetails) => void) | undefined
}

type PropsWithDefault = "interval" | "autoplay" | "defaultIndex"

export interface TextFlipSchema {
  state: "playing" | "paused"
  props: RequiredBy<TextFlipProps, PropsWithDefault>
  context: {
    index: number
    previousIndex: number
  }
  action: string
  effect: string
  guard: string
  event: EventObject
}

export type TextFlipService = Service<TextFlipSchema>
export type TextFlipMachine = Machine<TextFlipSchema>

export interface ItemProps {
  /** The zero-based position of the item. */
  index: number
}

export interface TextFlipApi<T extends PropTypes = PropTypes> {
  /** The index of the shown item. */
  index: number
  /** Whether the items are flipping on their own. */
  playing: boolean
  /** Show the next item, wrapping around after the last one. */
  next: () => void
  /** Show the previous item, wrapping around before the first one. */
  prev: () => void
  /** Show the item at the given index. */
  goTo: (index: number) => void
  /** Start flipping on a timer. */
  play: () => void
  /** Stop flipping on a timer. */
  pause: () => void
  /** Returns whether an item is shown, flipping in, flipping out or hidden. */
  getItemState: (props: ItemProps) => ItemState

  getRootProps: () => T["element"]
  getItemProps: (props: ItemProps) => T["element"]
}
