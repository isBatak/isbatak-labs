import type { NormalizeProps, PropTypes } from "@zag-js/types"
import { parts } from "./video-player.anatomy"
import * as dom from "./video-player.dom"
import type { VideoPlayerApi, VideoPlayerService } from "./video-player.types"
import { formatTime } from "./video-player.utils"

export function connect<T extends PropTypes>(
  service: VideoPlayerService,
  normalize: NormalizeProps<T>,
): VideoPlayerApi<T> {
  const { computed, context, prop, scope, send, state } = service
  const playing = state.matches("playing")
  const currentTime = context.get("currentTime")
  const duration = context.get("duration")
  const volume = context.get("volume")
  const muted = context.get("muted")
  const fullscreen = context.get("fullscreen")
  const following = context.get("following")
  const activeCue = computed("activeCue")
  const cues = prop("cues")

  const seek = (time: number) => send({ type: "SEEK", time })

  return {
    playing,
    currentTime,
    duration,
    volume,
    muted,
    fullscreen,
    following,
    activeCue,
    timeLabel: `${formatTime(currentTime)} / ${formatTime(duration)}`,

    play() {
      send({ type: "PLAY" })
    },
    pause() {
      send({ type: "PAUSE" })
    },
    toggle() {
      send({ type: "TOGGLE" })
    },
    seek,
    seekBy(seconds) {
      send({ type: "SEEK.BY", seconds })
    },
    setVolume(volume) {
      send({ type: "VOLUME.SET", volume })
    },
    toggleMute() {
      send({ type: "MUTE.TOGGLE" })
    },
    toggleFullscreen() {
      send({ type: "FULLSCREEN.TOGGLE" })
    },
    resumeFollow() {
      send({ type: "FOLLOW.RESUME" })
    },
    seekToCue(index) {
      const cue = cues[index]
      if (cue) seek(cue.start)
    },
    isCueActive(props) {
      return props.index === activeCue
    },

    getRootProps() {
      return normalize.element({
        ...parts.root.attrs(scope.id),
        id: dom.getRootId(scope),
        tabIndex: 0,
        "data-state": playing ? "playing" : "paused",
        "data-fullscreen": fullscreen ? "" : undefined,
        onKeyDown(event) {
          const target = event.target as HTMLElement
          if (target.matches("input, textarea")) return
          const actions: Record<string, () => void> = {
            " ": () => send({ type: "TOGGLE" }),
            k: () => send({ type: "TOGGLE" }),
            ArrowLeft: () => send({ type: "SEEK.BY", seconds: -prop("seekStep") }),
            ArrowRight: () => send({ type: "SEEK.BY", seconds: prop("seekStep") }),
            m: () => send({ type: "MUTE.TOGGLE" }),
            f: () => send({ type: "FULLSCREEN.TOGGLE" }),
          }
          const action = actions[event.key]
          if (!action || target.closest("button")) return
          event.preventDefault()
          action()
        },
      })
    },

    getVideoProps() {
      return normalize.element({
        ...parts.video.attrs(scope.id),
        id: dom.getVideoId(scope),
        playsInline: true,
        onClick() {
          send({ type: "TOGGLE" })
        },
      })
    },

    getControlsProps() {
      return normalize.element({
        ...parts.controls.attrs(scope.id),
        role: "group",
        "aria-label": "Video controls",
      })
    },

    getPlayTriggerProps() {
      return normalize.element({
        ...parts.playTrigger.attrs(scope.id),
        type: "button",
        "aria-label": playing ? "Pause" : "Play",
        "data-state": playing ? "playing" : "paused",
        onClick() {
          send({ type: "TOGGLE" })
        },
      })
    },

    getSeekProps() {
      return normalize.input({
        ...parts.seek.attrs(scope.id),
        type: "range",
        min: 0,
        max: duration,
        step: 0.1,
        value: currentTime,
        "aria-label": "Seek",
        "aria-valuetext": `${formatTime(currentTime)} of ${formatTime(duration)}`,
        style: {
          "--progress": duration > 0 ? `${(currentTime / duration) * 100}%` : "0%",
        },
        onInput(event) {
          seek(Number((event.currentTarget as HTMLInputElement).value))
        },
      })
    },

    getTimeProps() {
      return normalize.element({
        ...parts.time.attrs(scope.id),
        "aria-hidden": true,
      })
    },

    getMuteTriggerProps() {
      return normalize.element({
        ...parts.muteTrigger.attrs(scope.id),
        type: "button",
        "aria-label": muted ? "Unmute" : "Mute",
        "data-state": muted ? "muted" : "unmuted",
        onClick() {
          send({ type: "MUTE.TOGGLE" })
        },
      })
    },

    getVolumeProps() {
      return normalize.input({
        ...parts.volume.attrs(scope.id),
        type: "range",
        min: 0,
        max: 1,
        step: 0.05,
        value: muted ? 0 : volume,
        "aria-label": "Volume",
        style: {
          "--progress": `${(muted ? 0 : volume) * 100}%`,
        },
        onInput(event) {
          send({ type: "VOLUME.SET", volume: Number((event.currentTarget as HTMLInputElement).value) })
        },
      })
    },

    getFullscreenTriggerProps() {
      return normalize.element({
        ...parts.fullscreenTrigger.attrs(scope.id),
        type: "button",
        "aria-label": fullscreen ? "Exit fullscreen" : "Enter fullscreen",
        "data-state": fullscreen ? "fullscreen" : "windowed",
        onClick() {
          send({ type: "FULLSCREEN.TOGGLE" })
        },
      })
    },

    getTranscriptProps() {
      const detach = () => {
        if (following) send({ type: "FOLLOW.PAUSE" })
      }
      return normalize.element({
        ...parts.transcript.attrs(scope.id),
        id: dom.getTranscriptId(scope),
        role: "list",
        "aria-label": "Transcript",
        "data-following": following ? "" : undefined,
        onWheel: detach,
        onTouchStart: detach,
      })
    },

    getCueProps(props) {
      const active = props.index === activeCue
      const cue = cues[props.index]
      return normalize.element({
        ...parts.cue.attrs(scope.id),
        id: dom.getCueId(scope, props.index),
        role: "listitem",
        tabIndex: 0,
        "data-index": props.index,
        "data-start": cue?.start,
        "data-time": cue ? formatTime(cue.start) : undefined,
        "data-active": active ? "" : undefined,
        "aria-current": active ? "true" : undefined,
        onClick() {
          if (cue) seek(cue.start)
          send({ type: "FOLLOW.RESUME" })
        },
        onKeyDown(event) {
          if (event.key !== "Enter" && event.key !== " ") return
          event.preventDefault()
          event.stopPropagation()
          if (cue) seek(cue.start)
          send({ type: "FOLLOW.RESUME" })
        },
      })
    },

    getFollowTriggerProps() {
      return normalize.element({
        ...parts.followTrigger.attrs(scope.id),
        type: "button",
        hidden: following,
        onClick() {
          send({ type: "FOLLOW.RESUME" })
        },
      })
    },
  }
}
