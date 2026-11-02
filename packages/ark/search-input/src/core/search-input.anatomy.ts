import { createAnatomy } from "@zag-js/anatomy"

export const anatomy = createAnatomy("search-input").parts("root", "label", "control", "icon", "input", "clearTrigger")

export const parts = anatomy.build()
