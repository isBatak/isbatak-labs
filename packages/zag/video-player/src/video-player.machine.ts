import { createMachine } from "@zag-js/core"
import * as dom from "./video-player.dom"
import type { VideoPlayerSchema } from "./video-player.types"
import { clamp, findActiveCue } from "./video-player.utils"

export const machine = createMachine<VideoPlayerSchema>({
  props({ props }) {
    return {
      cues: [],
      follow: true,
      seekStep: 5,
      ...props,
    }
  },

  context({ bindable, prop }) {
    return {
      currentTime: bindable<number>(() => ({
        defaultValue: 0,
        onChange(time) {
          prop("onTimeChange")?.({ time })
        },
      })),
      duration: bindable<number>(() => ({ defaultValue: 0 })),
      volume: bindable<number>(() => ({ defaultValue: 1 })),
      muted: bindable<boolean>(() => ({ defaultValue: false })),
      fullscreen: bindable<boolean>(() => ({ defaultValue: false })),
      following: bindable<boolean>(() => ({ defaultValue: prop("follow") })),
    }
  },

  computed: {
    activeCue: ({ context, prop }) => findActiveCue(prop("cues"), context.get("currentTime")),
  },

  initialState() {
    return "paused"
  },

  effects: ["trackVideo", "followTranscript"],

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
    "TIME.UPDATE": { actions: ["syncTime"] },
    "DURATION.CHANGE": { actions: ["syncDuration"] },
    "VOLUME.SYNC": { actions: ["syncVolume"] },
    "FULLSCREEN.SYNC": { actions: ["syncFullscreen"] },
    SEEK: { actions: ["seek"] },
    "SEEK.BY": { actions: ["seekBy"] },
    "VOLUME.SET": { actions: ["setVolume"] },
    "MUTE.TOGGLE": { actions: ["toggleMute"] },
    "FULLSCREEN.TOGGLE": { actions: ["toggleFullscreen"] },
    "FOLLOW.PAUSE": { actions: ["pauseFollow"] },
    "FOLLOW.RESUME": { actions: ["resumeFollow"] },
  },

  states: {
    paused: {
      on: {
        PLAY: { actions: ["playVideo"] },
        TOGGLE: { actions: ["playVideo"] },
        "VIDEO.PLAY": { target: "playing" },
      },
    },

    playing: {
      entry: ["notifyPlaying"],
      exit: ["notifyPlaying"],
      on: {
        PAUSE: { actions: ["pauseVideo"] },
        TOGGLE: { actions: ["pauseVideo"] },
        "VIDEO.PAUSE": { target: "paused" },
      },
    },
  },

  implementations: {
    effects: {
      trackVideo({ scope, send }) {
        const video = dom.getVideoEl(scope)
        const doc = scope.getDoc()
        const listeners: [string, () => void][] = [
          ["play", () => send({ type: "VIDEO.PLAY" })],
          ["pause", () => send({ type: "VIDEO.PAUSE" })],
          ["ended", () => send({ type: "VIDEO.PAUSE" })],
          ["timeupdate", () => send({ type: "TIME.UPDATE" })],
          ["seeked", () => send({ type: "TIME.UPDATE" })],
          ["loadedmetadata", () => send({ type: "DURATION.CHANGE" })],
          ["durationchange", () => send({ type: "DURATION.CHANGE" })],
          ["volumechange", () => send({ type: "VOLUME.SYNC" })],
        ]
        if (video) {
          for (const [name, listener] of listeners) video.addEventListener(name, listener)
          send({ type: "DURATION.CHANGE" })
          send({ type: "VOLUME.SYNC" })
          send({ type: "TIME.UPDATE" })
          if (!video.paused) send({ type: "VIDEO.PLAY" })
        }
        const onFullscreen = () => send({ type: "FULLSCREEN.SYNC" })
        doc.addEventListener("fullscreenchange", onFullscreen)
        return () => {
          if (video) for (const [name, listener] of listeners) video.removeEventListener(name, listener)
          doc.removeEventListener("fullscreenchange", onFullscreen)
        }
      },

      followTranscript({ computed, context, scope, watchEffect }) {
        const transcript = dom.getTranscriptEl(scope)
        if (!transcript) return
        return watchEffect([() => computed("activeCue"), () => context.get("following")], () => {
          scrollToCue(scope, computed("activeCue"), context.get("following"))
        })
      },
    },

    actions: {
      playVideo({ scope }) {
        void dom.getVideoEl(scope)?.play()
      },
      pauseVideo({ scope }) {
        dom.getVideoEl(scope)?.pause()
      },
      notifyPlaying({ prop, state }) {
        prop("onPlayingChange")?.({ playing: state.matches("playing") })
      },
      syncTime({ scope, context }) {
        const video = dom.getVideoEl(scope)
        if (video) context.set("currentTime", video.currentTime)
      },
      syncDuration({ scope, context }) {
        const video = dom.getVideoEl(scope)
        if (video && Number.isFinite(video.duration)) context.set("duration", video.duration)
      },
      syncVolume({ scope, context }) {
        const video = dom.getVideoEl(scope)
        if (!video) return
        context.set("volume", video.volume)
        context.set("muted", video.muted)
      },
      syncFullscreen({ scope, context }) {
        context.set("fullscreen", scope.getDoc().fullscreenElement === dom.getRootEl(scope))
      },
      seek({ scope, event, context }) {
        const video = dom.getVideoEl(scope)
        if (!video) return
        const time = clamp(event.time, 0, context.get("duration") || video.duration || 0)
        video.currentTime = time
        context.set("currentTime", time)
      },
      seekBy({ scope, event, context, send }) {
        const video = dom.getVideoEl(scope)
        if (!video) return
        send({ type: "SEEK", time: clamp(video.currentTime + event.seconds, 0, context.get("duration")) })
      },
      setVolume({ scope, event }) {
        const video = dom.getVideoEl(scope)
        if (!video) return
        video.volume = clamp(event.volume, 0, 1)
        video.muted = video.volume === 0
      },
      toggleMute({ scope }) {
        const video = dom.getVideoEl(scope)
        if (video) video.muted = !video.muted
      },
      toggleFullscreen({ scope }) {
        const doc = scope.getDoc()
        const root = dom.getRootEl(scope)
        if (doc.fullscreenElement) void doc.exitFullscreen()
        else void root?.requestFullscreen()
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

function scrollToCue(scope: Parameters<typeof dom.getCueEl>[0], index: number, following: boolean) {
  if (!following || index < 0) return
  const transcript = dom.getTranscriptEl(scope)
  const cue = dom.getCueEl(scope, index)
  if (!transcript || !cue) return
  const offset = cue.getBoundingClientRect().top - transcript.getBoundingClientRect().top
  const top = transcript.scrollTop + offset - transcript.clientHeight / 2 + cue.clientHeight / 2
  transcript.scrollTo({ top: Math.max(top, 0), behavior: "smooth" })
}
