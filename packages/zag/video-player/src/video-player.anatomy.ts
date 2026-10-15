import { createAnatomy } from "@zag-js/anatomy"

export const anatomy = createAnatomy("video-player").parts(
  "root",
  "video",
  "controls",
  "playTrigger",
  "seek",
  "time",
  "muteTrigger",
  "volume",
  "fullscreenTrigger",
  "transcript",
  "cue",
  "followTrigger",
)

export const parts = anatomy.build()
