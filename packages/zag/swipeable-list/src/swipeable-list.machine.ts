import { createMachine, type Params } from "@zag-js/core"
import { addDomEvent, contains, getEventTarget, raf } from "@zag-js/dom-query"
import { callAll } from "@zag-js/utils"
import * as dom from "./swipeable-list.dom"
import type { DragData, OpenItem, SwipeableListSchema } from "./swipeable-list.types"
import {
  SETTLE_DURATION,
  applyResistance,
  createSpring,
  getFullSwipeDistance,
  getSideFromSign,
  getSnapSign,
  getSpringOptions,
  getSwipeAxis,
  getVelocity,
  type SpringOptions,
} from "./swipeable-list.utils"

export const machine = createMachine<SwipeableListSchema>({
  props({ props }) {
    return {
      dir: "ltr",
      fullSwipe: false,
      fullSwipeThreshold: 0.5,
      resistance: 0.55,
      snapBounce: 0.14,
      swipeThreshold: 10,
      threshold: 0.5,
      ...props,
    }
  },

  context({ bindable, prop }) {
    return {
      openItem: bindable<OpenItem | null>(() => ({
        defaultValue: prop("defaultOpenItem") ?? null,
        value: prop("openItem"),
        isEqual: isOpenItemEqual,
        hash: hashOpenItem,
        onChange(openItem) {
          prop("onOpenItemChange")?.({ openItem })
        },
      })),
      activeValue: bindable<string | null>(() => ({ defaultValue: null })),
      armed: bindable<SwipeableListSchema["context"]["armed"]>(() => ({ defaultValue: null })),
    }
  },

  refs() {
    return {
      drag: null,
      offsets: new Map(),
      animations: new Map(),
      committing: new Set(),
      cleanupClickSuppression: null,
    }
  },

  entry: ["syncOffsetsImmediately"],

  exit: ["stopAnimations", "cleanupClickSuppression"],

  watch({ track, action, context }) {
    track([() => context.hash("openItem")], () => {
      action(["syncOffsets"])
    })
  },

  initialState() {
    return "idle"
  },

  on: {
    "OPEN_ITEM.SET": {
      actions: ["setOpenItem"],
    },
    "ACTION.CLICK": {
      guard: "shouldCloseOnActionClick",
      actions: ["closeOpenItem"],
    },
  },

  states: {
    idle: {
      effects: ["trackInteractOutside"],
      on: {
        "CONTENT.POINTER_DOWN": {
          guard: "canSwipe",
          target: "tracking",
          actions: ["startTracking"],
        },
        INTERACT_OUTSIDE: {
          actions: ["closeOpenItem"],
        },
      },
    },

    tracking: {
      effects: ["trackPointer"],
      on: {
        "POINTER.MOVE": [
          {
            guard: "isHorizontalSwipe",
            target: "dragging",
            actions: ["startDragging", "updateDrag"],
          },
          {
            guard: "isVerticalSwipe",
            target: "idle",
            actions: ["resumeSettle", "clearDrag"],
          },
        ],
        "POINTER.UP": {
          target: "idle",
          actions: ["closeOnTap", "resumeSettle", "clearDrag"],
        },
        "POINTER.CANCEL": {
          target: "idle",
          actions: ["resumeSettle", "clearDrag"],
        },
      },
    },

    dragging: {
      effects: ["trackPointer"],
      on: {
        "POINTER.MOVE": {
          actions: ["updateDrag"],
        },
        "POINTER.UP": {
          target: "idle",
          actions: ["suppressClick", "release", "clearDrag"],
        },
        "POINTER.CANCEL": {
          target: "idle",
          actions: ["release", "clearDrag"],
        },
      },
    },
  },

  implementations: {
    guards: {
      canSwipe({ prop, refs, event }) {
        return !prop("disabled") && !event.disabled && !refs.get("committing").has(event.value)
      },
      isHorizontalSwipe({ prop, refs, event }) {
        const drag = refs.get("drag")
        if (!drag) return false
        return getSwipeAxis(event.point.x - drag.startX, event.point.y - drag.startY, prop("swipeThreshold")) === "x"
      },
      isVerticalSwipe({ prop, refs, event }) {
        const drag = refs.get("drag")
        if (!drag) return false
        return getSwipeAxis(event.point.x - drag.startX, event.point.y - drag.startY, prop("swipeThreshold")) === "y"
      },
      shouldCloseOnActionClick({ context, event }) {
        return event.closeOnClick && context.get("openItem")?.value === event.value
      },
    },

    effects: {
      trackPointer({ scope, send, refs }) {
        const doc = scope.getDoc()

        function isTracked(event: PointerEvent) {
          return refs.get("drag")?.pointerId === event.pointerId
        }

        function onPointerMove(event: PointerEvent) {
          if (!isTracked(event)) return
          send({ type: "POINTER.MOVE", point: { x: event.clientX, y: event.clientY }, timestamp: event.timeStamp })
        }

        function onPointerUp(event: PointerEvent) {
          if (!isTracked(event)) return
          send({ type: "POINTER.UP", point: { x: event.clientX, y: event.clientY }, timestamp: event.timeStamp })
        }

        function onPointerCancel(event: PointerEvent) {
          if (!isTracked(event)) return
          send({ type: "POINTER.CANCEL" })
        }

        return callAll(
          addDomEvent(doc, "pointermove", onPointerMove),
          addDomEvent(doc, "pointerup", onPointerUp),
          addDomEvent(doc, "pointercancel", onPointerCancel),
        )
      },

      trackInteractOutside({ scope, send, context }) {
        function onPointerDown(event: PointerEvent) {
          const openItem = context.get("openItem")
          if (!openItem) return
          if (contains(dom.getItemEl(scope, openItem.value), getEventTarget(event))) return
          send({ type: "INTERACT_OUTSIDE" })
        }

        return addDomEvent(scope.getDoc(), "pointerdown", onPointerDown, { capture: true })
      },
    },

    actions: {
      setOpenItem({ context, event }) {
        context.set("openItem", event.openItem)
      },
      closeOpenItem({ context }) {
        context.set("openItem", null)
      },
      startTracking(params) {
        const { context, event, prop, refs, scope } = params
        stopAnimation(params, event.value)

        refs.set("drag", {
          value: event.value,
          pointerId: event.pointerId,
          startX: event.point.x,
          startY: event.point.y,
          originX: event.point.x,
          startOffset: refs.get("offsets").get(event.value) ?? 0,
          samples: [],
          fullSwipe: event.fullSwipe,
          itemWidth: dom.getItemEl(scope, event.value)?.offsetWidth ?? 0,
          positiveWidth: dom.getActionsWidth(scope, event.value, getSideFromSign(1, prop("dir"))),
          negativeWidth: dom.getActionsWidth(scope, event.value, getSideFromSign(-1, prop("dir"))),
        })
        context.set("activeValue", event.value)
      },
      startDragging({ event, prop, refs, scope }) {
        const drag = refs.get("drag")
        if (!drag) return
        const direction = Math.sign(event.point.x - drag.startX)
        refs.set("drag", { ...drag, originX: drag.startX + direction * prop("swipeThreshold") })
        scope.getWin().getSelection()?.removeAllRanges()
      },
      updateDrag({ context, event, prop, refs, scope }) {
        const drag = refs.get("drag")
        if (!drag) return

        const offset = applyResistance(
          drag.startOffset + event.point.x - drag.originX,
          -getDragLimit(drag, drag.negativeWidth),
          getDragLimit(drag, drag.positiveWidth),
          drag.itemWidth,
          prop("resistance"),
        )

        refs.set("drag", { ...drag, samples: [...drag.samples, { time: event.timestamp, offset }].slice(-8) })
        setOffset(scope, refs, drag.value, offset)
        context.set("armed", getArmedSide(drag, offset, prop("fullSwipeThreshold"), prop("dir")))
      },
      release(params) {
        const { context, event, prop, refs } = params
        const drag = refs.get("drag")
        if (!drag) return

        const offset = refs.get("offsets").get(drag.value) ?? 0
        const velocity = event.type === "POINTER.CANCEL" ? 0 : getVelocity(drag.samples)

        if (context.get("armed")) {
          refs.get("committing").add(drag.value)
          context.set("openItem", null)
          const to = Math.sign(offset) * drag.itemWidth
          animateItem(params, drag.value, to, { from: offset, to, velocity, bounce: 0, duration: SETTLE_DURATION })
          return
        }

        const sign = getSnapSign({
          offset,
          velocity,
          positiveWidth: drag.positiveWidth,
          negativeWidth: drag.negativeWidth,
          threshold: prop("threshold"),
        })

        context.set("openItem", sign === 0 ? null : { value: drag.value, side: getSideFromSign(sign, prop("dir")) })
        settleItem(params, drag.value, velocity)
      },
      closeOnTap(params) {
        const { context, refs } = params
        const drag = refs.get("drag")
        if (!drag || context.get("openItem")?.value !== drag.value) return
        context.set("openItem", null)
        suppressClick(params, drag.value)
      },
      suppressClick(params) {
        const drag = params.refs.get("drag")
        if (drag) suppressClick(params, drag.value)
      },
      resumeSettle(params) {
        const drag = params.refs.get("drag")
        if (drag) settleItem(params, drag.value, 0)
      },
      clearDrag({ context, refs }) {
        refs.set("drag", null)
        context.set("activeValue", null)
        context.set("armed", null)
      },
      syncOffsets(params) {
        const { context, refs, state } = params
        const openItem = context.get("openItem")
        const drag = refs.get("drag")
        const values = new Set(refs.get("offsets").keys())
        if (openItem) values.add(openItem.value)

        for (const value of values) {
          if (drag?.value === value && state.matches("tracking", "dragging")) continue
          if (refs.get("committing").has(value)) continue
          settleItem(params, value, 0)
        }
      },
      syncOffsetsImmediately({ context, prop, refs, scope }) {
        raf(() => {
          const openItem = context.get("openItem")
          if (!openItem) return
          setOffset(scope, refs, openItem.value, dom.getRestOffset(scope, prop("dir"), openItem, openItem.value))
        })
      },
      stopAnimations({ refs }) {
        for (const animation of refs.get("animations").values()) animation.stop()
        refs.get("animations").clear()
      },
      cleanupClickSuppression({ refs }) {
        refs.get("cleanupClickSuppression")?.()
        refs.set("cleanupClickSuppression", null)
      },
    },
  },
})

type MachineParams = Params<SwipeableListSchema>

function isOpenItemEqual(a: OpenItem | null, b: OpenItem | null | undefined) {
  return a?.value === b?.value && a?.side === b?.side
}

function hashOpenItem(openItem: OpenItem | null) {
  return openItem ? `${openItem.value}:${openItem.side}` : ""
}

function getDragLimit(drag: DragData, actionsWidth: number) {
  if (actionsWidth <= 0) return 0
  return drag.fullSwipe ? drag.itemWidth : actionsWidth
}

function getArmedSide(drag: DragData, offset: number, threshold: number, dir: SwipeableListSchema["props"]["dir"]) {
  if (!drag.fullSwipe || offset === 0) return null
  const actionsWidth = offset > 0 ? drag.positiveWidth : drag.negativeWidth
  if (actionsWidth <= 0) return null
  if (Math.abs(offset) < getFullSwipeDistance(drag.itemWidth, actionsWidth, threshold)) return null
  return getSideFromSign(offset, dir)
}

function setOffset(scope: MachineParams["scope"], refs: MachineParams["refs"], value: string, offset: number) {
  if (offset === 0) refs.get("offsets").delete(value)
  else refs.get("offsets").set(value, offset)
  dom.setItemOffset(scope, value, offset)
}

function stopAnimation({ refs }: MachineParams, value: string) {
  refs.get("animations").get(value)?.stop()
  refs.get("animations").delete(value)
}

function settleItem(params: MachineParams, value: string, velocity: number) {
  const { context, prop, refs, scope } = params
  const to = dom.getRestOffset(scope, prop("dir"), context.get("openItem"), value)
  const animation = refs.get("animations").get(value)
  if (animation?.target === to) return
  if (!animation && (refs.get("offsets").get(value) ?? 0) === to) return

  const from = refs.get("offsets").get(value) ?? 0
  animateItem(params, value, to, getSpringOptions(from, to, velocity, prop("snapBounce")))
}

function animateItem(params: MachineParams, value: string, to: number, spring: SpringOptions) {
  const { refs, scope } = params
  stopAnimation(params, value)

  const win = scope.getWin()
  const reduceMotion = win.matchMedia?.("(prefers-reduced-motion: reduce)").matches

  if (reduceMotion || (spring.from === to && spring.velocity === 0)) {
    setOffset(scope, refs, value, to)
    onItemSettled(params, value)
    return
  }

  const frame = createSpring(spring)
  const startTime = win.performance.now()
  let frameId = 0

  const tick = (time: number) => {
    const { value: offset, done } = frame(Math.max(0, time - startTime) / 1000)
    setOffset(scope, refs, value, offset)

    if (done) {
      refs.get("animations").delete(value)
      onItemSettled(params, value)
      return
    }

    frameId = win.requestAnimationFrame(tick)
  }

  frameId = win.requestAnimationFrame(tick)
  refs.get("animations").set(value, { target: to, stop: () => win.cancelAnimationFrame(frameId) })
}

function onItemSettled(params: MachineParams, value: string) {
  const { prop, refs, scope } = params
  const committing = refs.get("committing")
  if (!committing.has(value)) return
  committing.delete(value)

  const offset = refs.get("offsets").get(value) ?? 0
  const side = getSideFromSign(offset, prop("dir"))
  dom.getOutermostActionEl(scope, value, side)?.click()
  prop("onFullSwipe")?.({ value, side })

  if (!dom.getItemEl(scope, value)) {
    refs.get("offsets").delete(value)
    return
  }

  settleItem(params, value, 0)
}

function suppressClick({ refs, scope }: MachineParams, value: string) {
  refs.get("cleanupClickSuppression")?.()

  const win = scope.getWin()

  function onClick(event: MouseEvent) {
    if (!event.isTrusted || !contains(dom.getItemEl(scope, value), getEventTarget(event))) return
    event.preventDefault()
    event.stopPropagation()
    cleanup()
  }

  const removeListener = addDomEvent(scope.getDoc(), "click", onClick, { capture: true })
  const timer = win.setTimeout(cleanup, 100)

  function cleanup() {
    removeListener()
    win.clearTimeout(timer)
    if (refs.get("cleanupClickSuppression") === cleanup) refs.set("cleanupClickSuppression", null)
  }

  refs.set("cleanupClickSuppression", cleanup)
}
