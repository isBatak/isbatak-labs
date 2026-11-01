import { spriteUrl } from "@isbatak/icons"
import { icon } from "@isbatak/panda-ds/recipes"
import { iconClasses as classes } from "@isbatak/storybook-shared"
import { createElement } from "../mount"

export function createFontSize() {
  return createElement(`
    <div class="${classes.stack}">
      <span class="${classes.small}">
        Small text <svg aria-hidden="true" class="${icon()}"><use href="${spriteUrl}#arrow-right"></use></svg>
      </span>
      <span>
        Body text <svg aria-hidden="true" class="${icon()}"><use href="${spriteUrl}#arrow-right"></use></svg>
      </span>
      <span class="${classes.large}">
        Large text <svg aria-hidden="true" class="${icon()}"><use href="${spriteUrl}#arrow-right"></use></svg>
      </span>
    </div>
  `)
}
