import { createMachine } from "@zag-js/core"
import type { CaliperSchema } from "./caliper.types"

export const machine = createMachine<CaliperSchema>({
  props({ props }) {
    return {
      defaultOverlay: true,
      ...props,
    }
  },

  context({ bindable, prop }) {
    return {
      overlay: bindable<boolean>(() => ({
        defaultValue: prop("defaultOverlay"),
        value: prop("overlay"),
        onChange(overlay) {
          prop("onOverlayChange")?.({ overlay })
        },
      })),
      toggled: bindable<boolean>(() => ({
        defaultValue: false,
      })),
    }
  },

  initialState() {
    return "idle"
  },

  watch({ track, context }) {
    track([() => context.get("overlay")], () => {
      context.set("toggled", true)
    })
  },

  on: {
    "OVERLAY.SET": {
      actions: ["setOverlay"],
    },
  },

  states: {
    idle: {},
  },

  implementations: {
    actions: {
      setOverlay({ context, event }) {
        context.set("toggled", true)
        context.set("overlay", event.overlay)
      },
    },
  },
})
