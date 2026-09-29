import { dataAttr, getEventPoint, getEventTarget, isEditableElement, isLeftClick } from "@zag-js/dom-query"
import type { NormalizeProps, PropTypes } from "@zag-js/types"
import { parts } from "./swipeable-list.anatomy"
import * as dom from "./swipeable-list.dom"
import type { ItemProps, ItemState, SwipeableListApi, SwipeableListService } from "./swipeable-list.types"

export function connect<T extends PropTypes>(
  service: SwipeableListService,
  normalize: NormalizeProps<T>,
): SwipeableListApi<T> {
  const { context, prop, scope, send, state } = service
  const openItem = context.get("openItem")
  const activeValue = context.get("activeValue")
  const armed = context.get("armed")
  const swiping = state.matches("dragging")
  const listDisabled = !!prop("disabled")

  function getItemState(props: ItemProps): ItemState {
    const open = openItem?.value === props.value
    const active = activeValue === props.value

    return {
      value: props.value,
      open,
      side: open ? openItem.side : null,
      swiping: swiping && active,
      armed: active && armed !== null,
      disabled: listDisabled || !!props.disabled,
    }
  }

  return {
    openItem,
    swiping,

    open(value, side) {
      send({ type: "OPEN_ITEM.SET", openItem: { value, side } })
    },
    close() {
      send({ type: "OPEN_ITEM.SET", openItem: null })
    },
    getItemState,

    getRootProps() {
      return normalize.element({
        ...parts.root.attrs,
        id: dom.getRootId(scope),
        dir: prop("dir"),
        "data-disabled": dataAttr(listDisabled),
        "data-swiping": dataAttr(swiping),
      })
    },

    getItemProps(props) {
      const itemState = getItemState(props)

      return normalize.element({
        ...parts.item.attrs,
        id: dom.getItemId(scope, props.value),
        dir: prop("dir"),
        "data-value": props.value,
        "data-state": itemState.open ? "open" : "closed",
        "data-side": itemState.side ?? undefined,
        "data-swiping": dataAttr(itemState.swiping),
        "data-armed": dataAttr(itemState.armed),
        "data-disabled": dataAttr(itemState.disabled),
        style: {
          position: "relative",
          overflow: "clip",
          isolation: "isolate",
        },
        onKeyDown(event) {
          if (event.defaultPrevented || itemState.disabled) return

          if (event.key === "Escape") {
            if (!itemState.open) return
            send({ type: "OPEN_ITEM.SET", openItem: null })
            event.preventDefault()
            return
          }

          const direction = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0
          if (direction === 0 || isEditableElement(getEventTarget(event))) return

          const nextOpenItem = dom.getKeySwipeTarget(scope, prop("dir"), openItem, props.value, direction)
          if (nextOpenItem === undefined) return

          send({ type: "OPEN_ITEM.SET", openItem: nextOpenItem })
          event.preventDefault()
        },
      })
    },

    getItemContentProps(props) {
      const itemState = getItemState(props)

      return normalize.element({
        ...parts.itemContent.attrs,
        id: dom.getItemContentId(scope, props.value),
        dir: prop("dir"),
        "data-state": itemState.open ? "open" : "closed",
        "data-swiping": dataAttr(itemState.swiping),
        "data-armed": dataAttr(itemState.armed),
        "data-disabled": dataAttr(itemState.disabled),
        style: {
          position: "relative",
          zIndex: 1,
          touchAction: itemState.disabled ? undefined : "pan-y",
        },
        onPointerDown(event) {
          if (itemState.disabled || !isLeftClick(event)) return
          send({
            type: "CONTENT.POINTER_DOWN",
            value: props.value,
            pointerId: event.pointerId,
            point: getEventPoint(event),
            fullSwipe: props.fullSwipe ?? prop("fullSwipe"),
          })
        },
      })
    },

    getItemActionsProps(props) {
      const itemState = getItemState(props)
      const visible = itemState.open && itemState.side === props.side

      return normalize.element({
        ...parts.itemActions.attrs,
        id: dom.getItemActionsId(scope, props.value, props.side),
        dir: prop("dir"),
        "data-side": props.side,
        "data-state": visible ? "open" : "closed",
        "data-armed": dataAttr(itemState.armed && armed === props.side),
        "aria-hidden": visible ? undefined : true,
        inert: visible ? undefined : true,
        style: {
          position: "absolute",
          top: 0,
          bottom: 0,
          zIndex: 0,
          display: "flex",
          boxSizing: "border-box",
          overflow: "hidden",
          width: `var(${dom.DISTANCE_VAR[props.side]}, 0px)`,
          [props.side === "start" ? "insetInlineStart" : "insetInlineEnd"]: 0,
        },
      })
    },

    getItemActionProps(props) {
      return normalize.button({
        ...parts.itemAction.attrs,
        type: "button",
        dir: prop("dir"),
        "data-side": props.side,
        "data-armed": dataAttr(activeValue === props.value && armed === props.side),
        onClick(event) {
          if (event.defaultPrevented) return
          send({ type: "ACTION.CLICK", value: props.value, closeOnClick: props.closeOnClick ?? true })
        },
      })
    },
  }
}
