import { createAnatomy } from "@zag-js/anatomy"

export const anatomy = createAnatomy("masonry").parts("root", "item")

export const parts = anatomy.build()
