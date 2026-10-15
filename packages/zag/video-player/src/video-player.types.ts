import type { EventObject, Machine, Service } from "@zag-js/core"
import type { CommonProperties, PropTypes, RequiredBy } from "@zag-js/types"

export interface Cue {
  /** The time in seconds the cue starts. */
  start: number
  /** The time in seconds the cue ends. */
  end: number
  text: string
}

export interface TimeChangeDetails {
  time: number
}

export interface ActiveCueChangeDetails {
  index: number
  cue: Cue | undefined
}

export interface PlayingChangeDetails {
  playing: boolean
}

export interface ElementIds {
  root?: string | undefined
  frame?: string | undefined
  video?: string | undefined
  transcript?: string | undefined
  cue?: ((index: number) => string) | undefined
}

export interface VideoPlayerProps extends CommonProperties {
  /** The ids of the elements in the video player. Useful for composition. */
  ids?: ElementIds | undefined
  /** The transcript cues, sorted by start time. */
  cues?: Cue[] | undefined
  /**
   * Whether the transcript scrolls along with the video.
   * @default true
   */
  follow?: boolean | undefined
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
  /** Function called when the cue at the playback position changes. */
  onActiveCueChange?: ((details: ActiveCueChangeDetails) => void) | undefined
  /** Function called when the video starts or stops playing. */
  onPlayingChange?: ((details: PlayingChangeDetails) => void) | undefined
}

type PropsWithDefault = "cues" | "follow" | "seekStep" | "skipStep"

export interface VideoPlayerSchema {
  state: "paused" | "playing"
  props: RequiredBy<VideoPlayerProps, PropsWithDefault>
  context: {
    currentTime: number
    duration: number
    volume: number
    muted: boolean
    fullscreen: boolean
    following: boolean
    loop: boolean
    previewFraction: number
  }
  computed: {
    activeCue: number
  }
  action: string
  effect: string
  guard: string
  event: EventObject
}

export type VideoPlayerService = Service<VideoPlayerSchema>
export type VideoPlayerMachine = Machine<VideoPlayerSchema>

export interface CueProps {
  /** The zero-based position of the cue. */
  index: number
}

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
  /** Whether the transcript scrolls along with the video. */
  following: boolean
  /** The index of the cue at the playback position, or -1. */
  activeCue: number
  loop: boolean
  /** The time under the pointer on the seek bar, or -1. */
  previewTime: number
  /** The cue text at the time under the pointer on the seek bar. */
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
  /** Scroll the transcript along with the video again. */
  resumeFollow: () => void
  /** Seek to the start of a cue. */
  seekToCue: (index: number) => void
  isCueActive: (props: CueProps) => boolean

  getRootProps: () => T["element"]
  getFrameProps: () => T["element"]
  getVideoProps: () => T["element"]
  getOverlayProps: () => T["element"]
  getControlsProps: () => T["element"]
  getPlayTriggerProps: () => T["element"]
  getSeekGroupProps: () => T["element"]
  getSeekProps: () => T["element"]
  getPreviewProps: () => T["element"]
  getTimeProps: () => T["element"]
  getSkipBackTriggerProps: () => T["element"]
  getSkipForwardTriggerProps: () => T["element"]
  getMuteTriggerProps: () => T["element"]
  getVolumeProps: () => T["element"]
  getPipTriggerProps: () => T["element"]
  getLoopTriggerProps: () => T["element"]
  getFullscreenTriggerProps: () => T["element"]
  getTranscriptProps: () => T["element"]
  getCueProps: (props: CueProps) => T["element"]
  getFollowTriggerProps: () => T["element"]
}
