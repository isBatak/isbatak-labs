import { createProps } from "@zag-js/types"
import { createSplitProps } from "@zag-js/utils"
import type { VideoPlayerProps } from "./video-player.types"

export const props = createProps<VideoPlayerProps>()([
  "getRootNode",
  "id",
  "ids",
  "getPreviewText",
  "onPlayingChange",
  "onTimeChange",
  "seekStep",
  "skipStep",
])

export const splitProps = createSplitProps<Partial<VideoPlayerProps>>(props)
