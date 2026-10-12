import { createAnatomy } from "@zag-js/anatomy"

export const anatomy = createAnatomy("wheel-picker").parts(
  "root",
  "label",
  "control",
  "viewport",
  "itemGroup",
  "item",
  "highlight",
)

export const parts = anatomy.build()
