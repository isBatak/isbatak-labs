import { createMachine, type Params } from "@zag-js/core"
import * as dom from "./text-flip.dom"
import type { TextFlipSchema } from "./text-flip.types"
import { wrapIndex } from "./text-flip.utils"

function setIndex({ context }: Params<TextFlipSchema>, index: number) {
  const current = context.get("index")
  if (index === current) return
  context.set("previousIndex", current)
  context.set("index", index)
}

function stepIndex(params: Params<TextFlipSchema>, step: number) {
  const count = dom.getItemCount(params.scope)
  if (count < 2) return
  setIndex(params, wrapIndex(params.context.get("index") + step, count))
}

const restartTimer = { target: "playing", reenter: true } as const

export const machine = createMachine<TextFlipSchema>({
  props({ props }) {
    return {
      interval: 2000,
      autoplay: true,
      defaultIndex: 0,
      ...props,
    }
  },

  context({ bindable, prop }) {
    return {
      index: bindable<number>(() => ({
        defaultValue: prop("defaultIndex"),
        onChange(index) {
          prop("onIndexChange")?.({ index })
        },
      })),
      previousIndex: bindable<number>(() => ({
        defaultValue: -1,
      })),
    }
  },

  initialState({ prop }) {
    return prop("autoplay") ? "playing" : "paused"
  },

  watch({ track, prop, send }) {
    track([() => prop("autoplay")], () => {
      send({ type: prop("autoplay") ? "PLAY" : "PAUSE" })
    })
    track([() => prop("interval")], () => {
      send({ type: "INTERVAL.CHANGE" })
    })
  },

  on: {
    NEXT: {
      actions: ["showNext"],
    },
    PREV: {
      actions: ["showPrev"],
    },
    GOTO: {
      actions: ["showIndex"],
    },
  },

  states: {
    playing: {
      effects: ["trackInterval"],
      on: {
        TICK: {
          actions: ["showNext"],
        },
        NEXT: {
          ...restartTimer,
          actions: ["showNext"],
        },
        PREV: {
          ...restartTimer,
          actions: ["showPrev"],
        },
        GOTO: {
          ...restartTimer,
          actions: ["showIndex"],
        },
        "INTERVAL.CHANGE": restartTimer,
        PAUSE: {
          target: "paused",
        },
      },
    },

    paused: {
      on: {
        PLAY: {
          target: "playing",
        },
      },
    },
  },

  implementations: {
    effects: {
      trackInterval({ scope, prop, send }) {
        const win = scope.getWin()
        const timer = win.setInterval(() => send({ type: "TICK" }), prop("interval"))
        return () => win.clearInterval(timer)
      },
    },

    actions: {
      showNext(params) {
        stepIndex(params, 1)
      },
      showPrev(params) {
        stepIndex(params, -1)
      },
      showIndex(params) {
        const { index } = params.event
        const count = dom.getItemCount(params.scope)
        if (index < 0 || index >= count) return
        setIndex(params, index)
      },
    },
  },
})
