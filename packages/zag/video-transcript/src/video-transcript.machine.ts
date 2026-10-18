import { createMachine, type Scope } from "@zag-js/core"
import * as dom from "./video-transcript.dom"
import type { VideoTranscriptSchema } from "./video-transcript.types"
import { findActiveCue } from "./video-transcript.utils"

function scrollToCue(scope: Scope, index: number, following: boolean) {
  if (!following || index < 0) return
  const root = dom.getRootEl(scope)
  const cue = dom.getCueEl(scope, index)
  if (!root || !cue) return
  const offset = cue.getBoundingClientRect().top - root.getBoundingClientRect().top
  const top = root.scrollTop + offset - root.clientHeight / 2 + cue.clientHeight / 2
  root.scrollTo({ top: Math.max(top, 0), behavior: "smooth" })
}

export const machine = createMachine<VideoTranscriptSchema>({
  props({ props }) {
    return {
      cues: [],
      follow: true,
      ...props,
    }
  },

  context({ bindable, prop }) {
    return {
      currentTime: bindable<number>(() => ({ defaultValue: 0 })),
      following: bindable<boolean>(() => ({ defaultValue: prop("follow") })),
    }
  },

  computed: {
    activeCue: ({ context, prop }) => findActiveCue(prop("cues"), context.get("currentTime")),
  },

  initialState() {
    return "idle"
  },

  effects: ["followActiveCue"],

  watch({ track, prop, context, computed }) {
    track([() => prop("follow")], () => {
      context.set("following", prop("follow"))
    })
    track([() => computed("activeCue")], () => {
      const index = computed("activeCue")
      prop("onActiveCueChange")?.({ index, cue: prop("cues")[index] })
    })
  },

  on: {
    "TIME.SET": { actions: ["setTime"] },
    "CUE.SELECT": { actions: ["selectCue"] },
    "FOLLOW.PAUSE": { actions: ["pauseFollow"] },
    "FOLLOW.RESUME": { actions: ["resumeFollow"] },
  },

  states: {
    idle: {},
  },

  implementations: {
    effects: {
      followActiveCue({ computed, context, scope, watchEffect }) {
        return watchEffect([() => computed("activeCue"), () => context.get("following")], () => {
          scrollToCue(scope, computed("activeCue"), context.get("following"))
        })
      },
    },

    actions: {
      setTime({ context, event }) {
        context.set("currentTime", event.time)
      },
      selectCue({ context, event, prop }) {
        const cue = prop("cues")[event.index]
        if (cue) prop("onSeek")?.({ time: cue.start })
        context.set("following", true)
      },
      pauseFollow({ context }) {
        context.set("following", false)
      },
      resumeFollow({ context }) {
        context.set("following", true)
      },
    },
  },
})
