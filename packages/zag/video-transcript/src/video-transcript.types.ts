import type { EventObject, Machine, Service } from "@zag-js/core"
import type { CommonProperties, PropTypes, RequiredBy } from "@zag-js/types"

export interface Cue {
  /** The time in seconds the cue starts. */
  start: number
  /** The time in seconds the cue ends. */
  end: number
  text: string
}

export interface ActiveCueChangeDetails {
  index: number
  cue: Cue | undefined
}

export interface SeekDetails {
  time: number
}

export interface ElementIds {
  root?: string | undefined
  cue?: ((index: number) => string) | undefined
}

export interface VideoTranscriptProps extends CommonProperties {
  /** The ids of the elements in the transcript. Useful for composition. */
  ids?: ElementIds | undefined
  /** The transcript cues, sorted by start time. */
  cues?: Cue[] | undefined
  /**
   * Whether the transcript scrolls along with the video.
   * @default true
   */
  follow?: boolean | undefined
  /** Function called when the cue at the playback position changes. */
  onActiveCueChange?: ((details: ActiveCueChangeDetails) => void) | undefined
  /** Function called when the reader picks a cue. The owner of the video should seek to the time. */
  onSeek?: ((details: SeekDetails) => void) | undefined
}

type PropsWithDefault = "cues" | "follow"

export interface VideoTranscriptSchema {
  state: "idle"
  props: RequiredBy<VideoTranscriptProps, PropsWithDefault>
  context: {
    currentTime: number
    following: boolean
  }
  computed: {
    activeCue: number
  }
  action: string
  effect: string
  guard: string
  event: EventObject
}

export type VideoTranscriptService = Service<VideoTranscriptSchema>
export type VideoTranscriptMachine = Machine<VideoTranscriptSchema>

export interface CueProps {
  /** The zero-based position of the cue. */
  index: number
}

export interface VideoTranscriptApi<T extends PropTypes = PropTypes> {
  /** The playback position the transcript last received, in seconds. */
  currentTime: number
  /** Whether the transcript scrolls along with the video. */
  following: boolean
  /** The index of the cue at the playback position, or -1. */
  activeCue: number
  /** Tell the transcript where the video is, in seconds. */
  setTime: (time: number) => void
  /** Scroll the transcript along with the video again. */
  resumeFollow: () => void
  /** Ask the owner of the video to seek to the start of a cue. */
  seekToCue: (index: number) => void
  isCueActive: (props: CueProps) => boolean

  getRootProps: () => T["element"]
  getCueProps: (props: CueProps) => T["element"]
  getFollowTriggerProps: () => T["element"]
}
