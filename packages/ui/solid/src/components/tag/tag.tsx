import { ark } from "@ark-ui/solid/factory"
import { tag } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
import { type ComponentProps, Show, splitProps } from "solid-js"

import { Icon } from "../icon/icon"

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

export function TagCloseTrigger(props: TagCloseTriggerProps) {
  const [local, rest] = splitProps(props, ["children"])
  return (
    <StyledTagCloseTrigger {...rest}>
      <Show when={local.children} fallback={<Icon name="close" />}>
        {local.children}
      </Show>
    </StyledTagCloseTrigger>
  )
}
