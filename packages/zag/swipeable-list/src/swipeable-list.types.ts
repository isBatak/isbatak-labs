import type { EventObject, Machine, Service } from "@zag-js/core"
import type { CommonProperties, DirectionProperty, PropTypes, RequiredBy } from "@zag-js/types"

export type SwipeSide = "start" | "end"

export interface OpenItem {
  /** The value of the open item. */
  value: string
  /** The side whose actions are revealed. */
  side: SwipeSide
}

export interface OpenItemChangeDetails {
  openItem: OpenItem | null
}

export interface FullSwipeDetails {
  value: string
  side: SwipeSide
}

export interface ElementIds {
  root?: string | undefined
  item?: ((value: string) => string) | undefined
  itemContent?: ((value: string) => string) | undefined
  itemActions?: ((value: string, side: SwipeSide) => string) | undefined
}

export interface SwipeableListProps extends DirectionProperty, CommonProperties {
  /** The ids of the elements in the swipeable list. Useful for composition. */
  ids?: ElementIds | undefined
  /** The controlled open item. */
  openItem?: OpenItem | null | undefined
  /** The initial open item when rendered. */
  defaultOpenItem?: OpenItem | null | undefined
  /** Function called when an item opens or closes. */
  onOpenItemChange?: ((details: OpenItemChangeDetails) => void) | undefined
  /** Function called when a full swipe runs the outermost action of a side. */
  onFullSwipe?: ((details: FullSwipeDetails) => void) | undefined
  /** Whether swiping all items is disabled. */
  disabled?: boolean | undefined
  /** Whether a swipe past `fullSwipeThreshold` runs the outermost action on release. @default false */
  fullSwipe?: boolean | undefined
  /** Fraction of the actions width a swipe must pass to snap open. @default 0.5 */
  threshold?: number | undefined
  /** Fraction of the item width a swipe must pass to arm a full swipe. @default 0.5 */
  fullSwipeThreshold?: number | undefined
  /** Distance in pixels the pointer must travel before the swipe axis is decided. @default 10 */
  swipeThreshold?: number | undefined
  /** How strongly dragging past a limit is resisted, between 0.05 and 1. @default 0.55 */
  resistance?: number | undefined
  /** How much the item bounces when a flick snaps it into place, between 0 and 1. @default 0.14 */
  snapBounce?: number | undefined
}

type PropsWithDefault =
  | "dir"
  | "fullSwipe"
  | "fullSwipeThreshold"
  | "resistance"
  | "snapBounce"
  | "swipeThreshold"
  | "threshold"

export interface DragSample {
  time: number
  offset: number
}

export interface DragData {
  value: string
  pointerId: number
  startX: number
  startY: number
  originX: number
  startOffset: number
  samples: DragSample[]
  fullSwipe: boolean
  itemWidth: number
  positiveWidth: number
  negativeWidth: number
}

export interface ItemAnimation {
  target: number
  stop: VoidFunction
}

export interface SwipeableListSchema {
  state: "idle" | "tracking" | "dragging"
  props: RequiredBy<SwipeableListProps, PropsWithDefault>
  context: {
    openItem: OpenItem | null
    activeValue: string | null
    armed: SwipeSide | null
  }
  refs: {
    drag: DragData | null
    offsets: Map<string, number>
    animations: Map<string, ItemAnimation>
    committing: Set<string>
    cleanupClickSuppression: VoidFunction | null
  }
  action: string
  effect: string
  guard: string
  event: EventObject
}

export type SwipeableListService = Service<SwipeableListSchema>
export type SwipeableListMachine = Machine<SwipeableListSchema>

export interface ItemProps {
  /** The unique value of the item. */
  value: string
  /** Whether swiping this item is disabled. */
  disabled?: boolean | undefined
  /** Overrides the list's `fullSwipe` for this item. */
  fullSwipe?: boolean | undefined
}

export interface ItemActionsProps extends ItemProps {
  /** The side the actions sit on. `start` is revealed by swiping towards the end. */
  side: SwipeSide
}

export interface ItemActionProps extends ItemActionsProps {
  /** Whether the item closes after the action is clicked. @default true */
  closeOnClick?: boolean | undefined
}

export interface ItemState {
  /** The item value. */
  value: string
  /** Whether the item is open. */
  open: boolean
  /** The open side, when the item is open. */
  side: SwipeSide | null
  /** Whether the item is being swiped. */
  swiping: boolean
  /** Whether releasing now runs the full-swipe action. */
  armed: boolean
  /** Whether swiping the item is disabled. */
  disabled: boolean
}

export interface SwipeableListApi<T extends PropTypes = PropTypes> {
  /** The open item, if any. */
  openItem: OpenItem | null
  /** Whether an item is being swiped. */
  swiping: boolean
  /** Open an item on a side. */
  open: (value: string, side: SwipeSide) => void
  /** Close the open item. */
  close: () => void
  /** Get the derived state of an item. */
  getItemState: (props: ItemProps) => ItemState

  getRootProps: () => T["element"]
  getItemProps: (props: ItemProps) => T["element"]
  getItemContentProps: (props: ItemProps) => T["element"]
  getItemActionsProps: (props: ItemActionsProps) => T["element"]
  getItemActionProps: (props: ItemActionProps) => T["button"]
}
