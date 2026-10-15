import { createProps } from "@zag-js/types"
import { createSplitProps } from "@zag-js/utils"
import type { CueProps, VideoPlayerProps } from "./video-player.types"

export const props = createProps<VideoPlayerProps>()([
  "cues",
  "follow",
  "getRootNode",
  "id",
  "ids",
  "onActiveCueChange",
  "onPlayingChange",
  "onTimeChange",
  "seekStep",
])

export const splitProps = createSplitProps<Partial<VideoPlayerProps>>(props)

export const cueProps = createProps<CueProps>()(["index"])
export const splitCueProps = createSplitProps<CueProps>(cueProps)
