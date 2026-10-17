import type { EventObject, Machine, Service } from "@zag-js/core"
import type { CommonProperties, PropTypes, RequiredBy } from "@zag-js/types"

export interface TimeChangeDetails {
  time: number
}

export interface PlayingChangeDetails {
  playing: boolean
}

export type DraggingSlider = "seek" | "volume"

export interface ElementIds {
  root?: string | undefined
  frame?: string | undefined
  video?: string | undefined
}

export interface VideoPlayerProps extends CommonProperties {
  /** The ids of the elements in the video player. Useful for composition. */
  ids?: ElementIds | undefined
  /**
   * The seconds skipped by the arrow keys.
   * @default 5
   */
  seekStep?: number | undefined
  /**
   * The seconds skipped by the skip buttons.
   * @default 10
   */
  skipStep?: number | undefined
  /** Function called when the playback position changes. */
  onTimeChange?: ((details: TimeChangeDetails) => void) | undefined
  /** Returns the caption shown in the seek preview for a time in seconds. */
  getPreviewText?: ((time: number) => string) | undefined
  /** Function called when the video starts or stops playing. */
  onPlayingChange?: ((details: PlayingChangeDetails) => void) | undefined
}

type PropsWithDefault = "seekStep" | "skipStep"

export interface VideoPlayerSchema {
  state: "paused" | "playing"
  props: RequiredBy<VideoPlayerProps, PropsWithDefault>
  context: {
    currentTime: number
    duration: number
    volume: number
    muted: boolean
    fullscreen: boolean
    loop: boolean
    previewFraction: number
    dragging: DraggingSlider | null
  }
  action: string
  effect: string
  guard: string
  event: EventObject
}

export type VideoPlayerService = Service<VideoPlayerSchema>
export type VideoPlayerMachine = Machine<VideoPlayerSchema>

export interface VideoPlayerApi<T extends PropTypes = PropTypes> {
  /** Whether the video is playing. */
  playing: boolean
  /** The playback position in seconds. */
  currentTime: number
  /** The length of the video in seconds. */
  duration: number
  volume: number
  muted: boolean
  fullscreen: boolean
  loop: boolean
  /** The time under the pointer on the seek bar, or -1. */
  previewTime: number
  /** The caption at the time under the pointer on the seek bar. */
  previewText: string
  /** The playback position and length formatted as `m:ss / m:ss`. */
  timeLabel: string
  play: () => void
  pause: () => void
  toggle: () => void
  seek: (time: number) => void
  seekBy: (seconds: number) => void
  setVolume: (volume: number) => void
  toggleMute: () => void
  toggleFullscreen: () => void
  toggleLoop: () => void
  togglePip: () => void

  getRootProps: () => T["element"]
  getFrameProps: () => T["element"]
  getVideoProps: () => T["element"]
  getOverlayProps: () => T["element"]
  getControlsProps: () => T["element"]
  getPlayTriggerProps: () => T["element"]
  getSeekGroupProps: () => T["element"]
  getSeekProps: () => T["element"]
  getSeekTrackProps: () => T["element"]
  getSeekRangeProps: () => T["element"]
  getSeekThumbProps: () => T["element"]
  getSeekInputProps: () => T["input"]
  getPreviewProps: () => T["element"]
  getPreviewVideoProps: () => T["element"]
  getTimeProps: () => T["element"]
  getSkipBackTriggerProps: () => T["element"]
  getSkipForwardTriggerProps: () => T["element"]
  getMuteTriggerProps: () => T["element"]
  getVolumeProps: () => T["element"]
  getVolumeTrackProps: () => T["element"]
  getVolumeRangeProps: () => T["element"]
  getVolumeThumbProps: () => T["element"]
  getVolumeInputProps: () => T["input"]
  getPipTriggerProps: () => T["element"]
  getLoopTriggerProps: () => T["element"]
  getFullscreenTriggerProps: () => T["element"]
}
