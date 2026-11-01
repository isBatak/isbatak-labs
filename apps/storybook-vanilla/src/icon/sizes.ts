import { spriteUrl } from "@isbatak/icons"
import { icon } from "@isbatak/panda-ds/recipes"
import { iconClasses as classes } from "@isbatak/storybook-shared"
import { createElement } from "../mount"

export function createSizes() {
  return createElement(`
    <div class="${classes.row}">
      <svg aria-hidden="true" class="${icon({ size: "xs" })}"><use href="${spriteUrl}#star"></use></svg>
      <svg aria-hidden="true" class="${icon({ size: "sm" })}"><use href="${spriteUrl}#star"></use></svg>
      <svg aria-hidden="true" class="${icon({ size: "md" })}"><use href="${spriteUrl}#star"></use></svg>
      <svg aria-hidden="true" class="${icon({ size: "lg" })}"><use href="${spriteUrl}#star"></use></svg>
      <svg aria-hidden="true" class="${icon({ size: "xl" })}"><use href="${spriteUrl}#star"></use></svg>
      <svg aria-hidden="true" class="${icon({ size: "2xl" })}"><use href="${spriteUrl}#star"></use></svg>
    </div>
  `)
}
