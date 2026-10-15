import type { NormalizeProps, PropTypes } from "@zag-js/types"
import { parts } from "./text-flip.anatomy"
import * as dom from "./text-flip.dom"
import type { TextFlipApi, TextFlipService } from "./text-flip.types"
import { getItemState } from "./text-flip.utils"

export function connect<T extends PropTypes>(service: TextFlipService, normalize: NormalizeProps<T>): TextFlipApi<T> {
  const { context, scope, send, state } = service
  const index = context.get("index")
  const previousIndex = context.get("previousIndex")
  const playing = state.matches("playing")

  return {
    index,
    playing,

    next() {
      send({ type: "NEXT" })
    },

    prev() {
      send({ type: "PREV" })
    },

    goTo(index) {
      send({ type: "GOTO", index })
    },

    play() {
      send({ type: "PLAY" })
    },

    pause() {
      send({ type: "PAUSE" })
    },

    getItemState(props) {
      return getItemState(props.index, index, previousIndex)
    },

    getRootProps() {
      return normalize.element({
        ...parts.root.attrs(scope.id),
        id: dom.getRootId(scope),
        "data-state": playing ? "playing" : "paused",
        style: {
          display: "inline-grid",
        },
      })
    },

    getItemProps(props) {
      const itemState = getItemState(props.index, index, previousIndex)

      return normalize.element({
        ...parts.item.attrs(scope.id),
        id: dom.getItemId(scope, props.index),
        "data-index": props.index,
        "data-state": itemState,
        "data-ownedby": dom.getRootId(scope),
        "aria-hidden": props.index === index ? undefined : true,
        style: {
          gridArea: "1 / 1",
          visibility: itemState === "hidden" ? "hidden" : undefined,
        },
      })
    },
  }
}
