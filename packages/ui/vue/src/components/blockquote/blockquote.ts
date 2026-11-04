import { ark } from "@ark-ui/vue/factory"
import { blockquote } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import type { ComponentProps } from "vue-component-type-helpers"

const { withProvider, withContext } = createSlotRecipeContext(blockquote)

export const BlockquoteRoot = withProvider(ark.figure, "root")
export type BlockquoteRootProps = ComponentProps<typeof BlockquoteRoot>

export const BlockquoteContent = withContext(ark.blockquote, "content")
export type BlockquoteContentProps = ComponentProps<typeof BlockquoteContent>

export const BlockquoteCaption = withContext(ark.figcaption, "caption")
export type BlockquoteCaptionProps = ComponentProps<typeof BlockquoteCaption>

export const BlockquoteIcon = withContext(ark.span, "icon", { defaultProps: { "aria-hidden": true } })
export type BlockquoteIconProps = ComponentProps<typeof BlockquoteIcon>
