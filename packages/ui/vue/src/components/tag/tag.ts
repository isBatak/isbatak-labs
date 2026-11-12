import { ark } from "@ark-ui/vue/factory"
import { tag } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { type Component, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

import { Icon } from "../icon"

const { withProvider, withContext, PropsProvider } = createSlotRecipeContext(tag)

export const TagRoot = withProvider(ark.div, "root")
export type TagRootProps = ComponentProps<typeof TagRoot>

export const TagPropsProvider = PropsProvider

export const TagLabel = withContext(ark.span, "label")
export type TagLabelProps = ComponentProps<typeof TagLabel>

export const TagStartElement = withContext(ark.span, "startElement")
export type TagStartElementProps = ComponentProps<typeof TagStartElement>

export const TagEndElement = withContext(ark.span, "endElement")
export type TagEndElementProps = ComponentProps<typeof TagEndElement>

const StyledTagCloseTrigger = withContext(ark.button, "closeTrigger", {
  defaultProps: { type: "button", "aria-label": "Close" },
})
export type TagCloseTriggerProps = ComponentProps<typeof StyledTagCloseTrigger>

export const TagCloseTrigger = defineComponent({
  name: "TagCloseTrigger",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(StyledTagCloseTrigger as Component, attrs, slots.default ? slots : () => h(Icon, { name: "close" }))
  },
}) as unknown as typeof StyledTagCloseTrigger
