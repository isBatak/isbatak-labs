import { createMachine } from "@zag-js/core"
import * as dom from "./video-player.dom"
import type { DraggingSlider, VideoPlayerSchema } from "./video-player.types"
import { clamp } from "./video-player.utils"

export const machine = createMachine<VideoPlayerSchema>({
  props({ props }) {
    return {
      seekStep: 5,
      skipStep: 10,
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
      loop: bindable<boolean>(() => ({ defaultValue: false })),
      previewFraction: bindable<number>(() => ({ defaultValue: -1 })),
      dragging: bindable<DraggingSlider | null>(() => ({ defaultValue: null })),
    }
  },

  initialState() {
    return "paused"
  },

  effects: ["trackVideo"],

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
    "PREVIEW.SET": { actions: ["setPreview"] },
    "PREVIEW.CLEAR": { actions: ["clearPreview"] },
    "DRAG.START": { actions: ["startDrag"] },
    "DRAG.END": { actions: ["endDrag"] },
    "LOOP.TOGGLE": { actions: ["toggleLoop"] },
    "PIP.TOGGLE": { actions: ["togglePip"] },
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
        if (video && context.get("dragging") !== "seek") context.set("currentTime", video.currentTime)
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
        context.set("fullscreen", dom.getFullscreenElement(scope) === dom.getFrameEl(scope))
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
        send({
          type: "SEEK",
          time: clamp(video.currentTime + event.seconds, 0, context.get("duration")),
        })
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
        const frame = dom.getFrameEl(scope)
        if (doc.fullscreenElement) void doc.exitFullscreen()
        else void frame?.requestFullscreen()
      },
      setPreview({ context, event }) {
        context.set("previewFraction", clamp(event.fraction, 0, 1))
      },
      clearPreview({ context }) {
        context.set("previewFraction", -1)
      },
      startDrag({ context, event }) {
        context.set("dragging", event.slider)
      },
      endDrag({ context }) {
        context.set("dragging", null)
      },
      toggleLoop({ scope, context }) {
        const video = dom.getVideoEl(scope)
        if (!video) return
        video.loop = !video.loop
        context.set("loop", video.loop)
      },
      togglePip({ scope }) {
        const video = dom.getVideoEl(scope)
        const doc = scope.getDoc()
        if (doc.pictureInPictureElement) void doc.exitPictureInPicture()
        else void video?.requestPictureInPicture()
      },
    },
  },
})
