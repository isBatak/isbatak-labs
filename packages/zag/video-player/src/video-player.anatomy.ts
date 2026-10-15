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
  "preview",
  "previewVideo",
  "time",
  "skipBackTrigger",
  "skipForwardTrigger",
  "muteTrigger",
  "volume",
  "pipTrigger",
  "loopTrigger",
  "fullscreenTrigger",
  "transcript",
  "cue",
  "followTrigger",
)

export const parts = anatomy.build()
