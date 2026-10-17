import type { NormalizeProps, PropTypes } from "@zag-js/types"
import { parts } from "./video-player.anatomy"
import * as dom from "./video-player.dom"
import type { DraggingSlider, VideoPlayerApi, VideoPlayerService } from "./video-player.types"
import { clamp, formatTime, fractionAt } from "./video-player.utils"

interface SliderOptions {
  name: DraggingSlider
  value: number
  max: number
  step: number
  pageStep: number
  label: string
  valueText: string
  onChange: (value: number) => void
}

const sliderParts = {
  seek: {
    control: parts.seek,
    track: parts.seekTrack,
    range: parts.seekRange,
    thumb: parts.seekThumb,
    input: parts.seekInput,
  },
  volume: {
    control: parts.volume,
    track: parts.volumeTrack,
    range: parts.volumeRange,
    thumb: parts.volumeThumb,
    input: parts.volumeInput,
  },
}

export function connect<T extends PropTypes>(
  service: VideoPlayerService,
  normalize: NormalizeProps<T>,
): VideoPlayerApi<T> {
  const { context, prop, scope, send, state } = service
  const playing = state.matches("playing")
  const currentTime = context.get("currentTime")
  const duration = context.get("duration")
  const volume = context.get("volume")
  const muted = context.get("muted")
  const fullscreen = context.get("fullscreen")
  const loop = context.get("loop")
  const previewFraction = context.get("previewFraction")
  const previewTime = previewFraction < 0 ? -1 : previewFraction * duration

  const dragging = context.get("dragging")

  const seek = (time: number) => send({ type: "SEEK", time })
  const setVolume = (volume: number) => send({ type: "VOLUME.SET", volume })

  const seekSlider = createSlider({
    name: "seek",
    value: currentTime,
    max: duration,
    step: prop("seekStep"),
    pageStep: prop("skipStep"),
    label: "Seek",
    valueText: `${formatTime(currentTime)} of ${formatTime(duration)}`,
    onChange: seek,
  })

  const volumeSlider = createSlider({
    name: "volume",
    value: muted ? 0 : volume,
    max: 1,
    step: 0.05,
    pageStep: 0.1,
    label: "Volume",
    valueText: `${Math.round((muted ? 0 : volume) * 100)}%`,
    onChange: setVolume,
  })

  function createSlider(options: SliderOptions) {
    const { name, value, max, step, pageStep, label, valueText, onChange } = options
    const percent = max > 0 ? `${(clamp(value, 0, max) / max) * 100}%` : "0%"
    const active = dragging === name
    const anatomy = sliderParts[name]
    const valueAt = (element: HTMLElement, clientX: number) =>
      fractionAt(element.getBoundingClientRect(), clientX) * max

    return {
      control: normalize.element({
        ...anatomy.control.attrs(scope.id),
        "data-dragging": active ? "" : undefined,
        style: {
          "--value-percent": percent,
          touchAction: "none",
        },
        onPointerDown(event) {
          if (event.button !== 0) return
          const element = event.currentTarget as HTMLElement
          event.preventDefault()
          element.setPointerCapture(event.pointerId)
          element.querySelector<HTMLElement>("[role=slider]")?.focus({ preventScroll: true })
          send({ type: "DRAG.START", slider: name })
          onChange(valueAt(element, event.clientX))
        },
        onPointerMove(event) {
          const element = event.currentTarget as HTMLElement
          if (!element.hasPointerCapture(event.pointerId)) return
          onChange(valueAt(element, event.clientX))
        },
        onPointerUp() {
          send({ type: "DRAG.END" })
        },
        onPointerCancel() {
          send({ type: "DRAG.END" })
        },
      }),

      track: normalize.element({
        ...anatomy.track.attrs(scope.id),
        "data-dragging": active ? "" : undefined,
      }),

      range: normalize.element({
        ...anatomy.range.attrs(scope.id),
        "data-dragging": active ? "" : undefined,
      }),

      thumb: normalize.element({
        ...anatomy.thumb.attrs(scope.id),
        role: "slider",
        tabIndex: 0,
        "aria-label": label,
        "aria-valuemin": 0,
        "aria-valuemax": max,
        "aria-valuenow": value,
        "aria-valuetext": valueText,
        "aria-orientation": "horizontal",
        "data-dragging": active ? "" : undefined,
        onKeyDown(event) {
          const keys: Record<string, number> = {
            ArrowLeft: value - step,
            ArrowDown: value - step,
            ArrowRight: value + step,
            ArrowUp: value + step,
            PageDown: value - pageStep,
            PageUp: value + pageStep,
            Home: 0,
            End: max,
          }
          const next = keys[event.key]
          if (next === undefined) return
          event.preventDefault()
          onChange(clamp(next, 0, max))
        },
      }),

      input: normalize.input({
        ...anatomy.input.attrs(scope.id),
        type: "hidden",
        value: String(value),
      }),
    }
  }

  return {
    playing,
    currentTime,
    duration,
    volume,
    muted,
    fullscreen,
    loop,
    previewTime,
    previewText: previewTime < 0 ? "" : (prop("getPreviewText")?.(previewTime) ?? ""),
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
    setVolume,
    toggleMute() {
      send({ type: "MUTE.TOGGLE" })
    },
    toggleFullscreen() {
      send({ type: "FULLSCREEN.TOGGLE" })
    },
    toggleLoop() {
      send({ type: "LOOP.TOGGLE" })
    },
    togglePip() {
      send({ type: "PIP.TOGGLE" })
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
          if (event.defaultPrevented || target.matches("input, textarea")) return
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

    getFrameProps() {
      return normalize.element({
        ...parts.frame.attrs(scope.id),
        id: dom.getFrameId(scope),
        "data-state": playing ? "playing" : "paused",
        "data-fullscreen": fullscreen ? "" : undefined,
      })
    },

    getOverlayProps() {
      return normalize.element({
        ...parts.overlay.attrs(scope.id),
        "aria-hidden": true,
        "data-state": playing ? "playing" : "paused",
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

    getSeekGroupProps() {
      return normalize.element({
        ...parts.seekGroup.attrs(scope.id),
        onPointerMove(event) {
          const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
          send({
            type: "PREVIEW.SET",
            fraction: fractionAt(rect, event.clientX),
          })
        },
        onPointerLeave() {
          send({ type: "PREVIEW.CLEAR" })
        },
      })
    },

    getPreviewProps() {
      return normalize.element({
        ...parts.preview.attrs(scope.id),
        hidden: previewFraction < 0,
        "aria-hidden": true,
        style: {
          "--preview-x": `${previewFraction * 100}%`,
        },
      })
    },

    getPreviewVideoProps() {
      return normalize.element({
        ...parts.previewVideo.attrs(scope.id),
        muted: true,
        playsInline: true,
        preload: "auto",
        tabIndex: -1,
        "aria-hidden": true,
      })
    },

    getSkipBackTriggerProps() {
      return normalize.element({
        ...parts.skipBackTrigger.attrs(scope.id),
        type: "button",
        "aria-label": `Back ${prop("skipStep")} seconds`,
        onClick() {
          send({ type: "SEEK.BY", seconds: -prop("skipStep") })
        },
      })
    },

    getSkipForwardTriggerProps() {
      return normalize.element({
        ...parts.skipForwardTrigger.attrs(scope.id),
        type: "button",
        "aria-label": `Forward ${prop("skipStep")} seconds`,
        onClick() {
          send({ type: "SEEK.BY", seconds: prop("skipStep") })
        },
      })
    },

    getPipTriggerProps() {
      return normalize.element({
        ...parts.pipTrigger.attrs(scope.id),
        type: "button",
        "aria-label": "Picture in picture",
        hidden: !scope.getDoc().pictureInPictureEnabled,
        onClick() {
          send({ type: "PIP.TOGGLE" })
        },
      })
    },

    getLoopTriggerProps() {
      return normalize.element({
        ...parts.loopTrigger.attrs(scope.id),
        type: "button",
        "aria-label": "Loop",
        "aria-pressed": loop,
        "data-state": loop ? "on" : "off",
        onClick() {
          send({ type: "LOOP.TOGGLE" })
        },
      })
    },

    getSeekProps() {
      return seekSlider.control
    },

    getSeekTrackProps() {
      return seekSlider.track
    },

    getSeekRangeProps() {
      return seekSlider.range
    },

    getSeekThumbProps() {
      return seekSlider.thumb
    },

    getSeekInputProps() {
      return seekSlider.input
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
      return volumeSlider.control
    },

    getVolumeTrackProps() {
      return volumeSlider.track
    },

    getVolumeRangeProps() {
      return volumeSlider.range
    },

    getVolumeThumbProps() {
      return volumeSlider.thumb
    },

    getVolumeInputProps() {
      return volumeSlider.input
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
  }
}
