import { createAnatomy } from "@zag-js/anatomy"

export const anatomy = createAnatomy("code-preview").parts(
  "root",
  "stage",
  "preview",
  "resizer",
  "content",
  "toolbar",
  "trigger",
  "themeTrigger",
  "dirTrigger",
  "copyTrigger",
)

export const parts = anatomy.build()
