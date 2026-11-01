import { spriteUrl } from "@isbatak/icons"
import { icon } from "@isbatak/panda-ds/recipes"
import type { IconControls } from "@isbatak/storybook-shared"
import { createElement } from "../mount"

export function createBasic(props: IconControls) {
  return createElement(`
    <svg aria-hidden="true" class="${icon({ size: props.size })}"><use href="${spriteUrl}#${props.name}"></use></svg>
  `)
}
