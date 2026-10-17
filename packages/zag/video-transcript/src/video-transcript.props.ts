import { createProps } from "@zag-js/types"
import { createSplitProps } from "@zag-js/utils"
import type { CueProps, VideoTranscriptProps } from "./video-transcript.types"

export const props = createProps<VideoTranscriptProps>()([
  "cues",
  "follow",
  "getRootNode",
  "id",
  "ids",
  "onActiveCueChange",
  "onSeek",
])

export const splitProps = createSplitProps<Partial<VideoTranscriptProps>>(props)

export const cueProps = createProps<CueProps>()(["index"])
export const splitCueProps = createSplitProps<CueProps>(cueProps)
