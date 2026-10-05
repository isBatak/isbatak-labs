import { createMachine } from "@zag-js/core"
import { raf } from "@zag-js/dom-query"
import * as dom from "./masonry.dom"
import type { Layout, MasonrySchema } from "./masonry.types"
import { computeLayout, isLayoutEqual } from "./masonry.utils"

export const machine = createMachine<MasonrySchema>({
  props({ props }) {
    return {
      dir: "ltr",
      sequential: false,
      ...props,
    }
  },

  context({ bindable, prop }) {
    return {
      layout: bindable<Layout | null>(() => ({
        defaultValue: null,
        isEqual: isLayoutEqual,
        onChange(layout) {
          if (!layout) return
          prop("onLayoutChange")?.({ columns: layout.columns, height: layout.height })
        },
      })),
    }
  },

  initialState() {
    return "idle"
  },

  effects: ["trackSizes"],

  watch({ track, action, prop }) {
    track([() => prop("sequential"), () => prop("columns"), () => prop("minColumnWidth"), () => prop("gap")], () => {
      action(["scheduleLayout"])
    })
  },

  on: {
    REFLOW: {
      actions: ["layout"],
    },
  },

  states: {
    idle: {},
  },

  implementations: {
    effects: {
      trackSizes({ scope, send }) {
        const rootEl = dom.getRootEl(scope)
        if (!rootEl) return

        const win = scope.getWin()
        if (!win.ResizeObserver || !win.MutationObserver) {
          return raf(() => send({ type: "REFLOW" }))
        }

        let rootWidth = -1
        const resizeObserver = new win.ResizeObserver((entries) => {
          const resized = entries.some((entry) => {
            if (entry.target !== rootEl) return true
            const width = entry.contentRect.width
            if (width === rootWidth) return false
            rootWidth = width
            return true
          })
          if (resized) send({ type: "REFLOW" })
        })

        const mutationObserver = new win.MutationObserver((mutations) => {
          const removed = mutations.flatMap((mutation) => Array.from(mutation.removedNodes))
          const added = mutations.flatMap((mutation) => Array.from(mutation.addedNodes))
          for (const node of removed) {
            if (dom.isItemEl(scope, node)) resizeObserver.unobserve(node)
          }
          for (const node of added) {
            if (dom.isItemEl(scope, node) && node.parentNode === rootEl) resizeObserver.observe(node)
          }
          send({ type: "REFLOW" })
        })

        resizeObserver.observe(rootEl)
        for (const el of dom.getItemEls(scope)) resizeObserver.observe(el)
        mutationObserver.observe(rootEl, { childList: true })

        return () => {
          resizeObserver.disconnect()
          mutationObserver.disconnect()
        }
      },
    },

    actions: {
      layout({ scope, prop, context }) {
        const rootEl = dom.getRootEl(scope)
        if (!rootEl) return
        const columns = dom.getColumnCount(rootEl)
        const gap = dom.getRowGap(rootEl)
        context.set("layout", computeLayout(dom.measureItems(scope), columns, gap, prop("sequential")))
      },
      scheduleLayout({ send }) {
        raf(() => send({ type: "REFLOW" }))
      },
    },
  },
})
