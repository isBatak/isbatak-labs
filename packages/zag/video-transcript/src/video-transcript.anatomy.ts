import { createAnatomy } from "@zag-js/anatomy"

export const anatomy = createAnatomy("video-transcript").parts("root", "cue", "followTrigger")

export const parts = anatomy.build()
