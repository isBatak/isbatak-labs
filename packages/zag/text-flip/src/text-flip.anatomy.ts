import { createAnatomy } from "@zag-js/anatomy"

export const anatomy = createAnatomy("text-flip").parts("root", "item")

export const parts = anatomy.build()
