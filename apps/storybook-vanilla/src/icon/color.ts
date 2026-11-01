import { spriteUrl } from "@isbatak/icons"
import { icon } from "@isbatak/panda-ds/recipes"
import { iconClasses as classes } from "@isbatak/storybook-shared"
import { createElement } from "../mount"

export function createColor() {
  return createElement(`
    <span class="${classes.error}">
      <svg aria-hidden="true" class="${icon({ size: "md" })}"><use href="${spriteUrl}#warning"></use></svg>
      Something went wrong
    </span>
  `)
}
