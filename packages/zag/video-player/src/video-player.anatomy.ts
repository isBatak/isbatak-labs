import { createAnatomy } from "@zag-js/anatomy"

export const anatomy = createAnatomy("video-player").parts(
  "root",
  "frame",
  "video",
  "overlay",
  "controls",
  "playTrigger",
  "seekGroup",
  "seek",
  "seekTrack",
  "seekRange",
  "seekThumb",
  "seekInput",
  "preview",
  "previewVideo",
  "time",
  "skipBackTrigger",
  "skipForwardTrigger",
  "muteTrigger",
  "volume",
  "volumeTrack",
  "volumeRange",
  "volumeThumb",
  "volumeInput",
  "pipTrigger",
  "loopTrigger",
  "fullscreenTrigger",
)

export const parts = anatomy.build()
