import { createAnatomy } from "@zag-js/anatomy"

export const anatomy = createAnatomy("swipeable-list").parts("root", "item", "itemContent", "itemActions", "itemAction")

export const parts = anatomy.build()
