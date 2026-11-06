import { ark } from "@ark-ui/vue/factory"
import { inputAddon, inputElement } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/vue-ui/jsx"
import { type FunctionalComponent, type VNode, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

import { Group, type GroupProps } from "../group"

export const InputElement = styled(ark.div, inputElement, { defaultProps: { "data-input-element": "" } })
export type InputElementProps = ComponentProps<typeof InputElement>

export const InputAddon = styled(ark.div, inputAddon)
export type InputAddonProps = ComponentProps<typeof InputAddon>

export interface InputGroupProps extends GroupProps {
  startOffset?: string | undefined
  endOffset?: string | undefined
}

export const InputGroup: FunctionalComponent<InputGroupProps> = (props, { slots }) => {
  const { startOffset = "0px", endOffset = "0px", ...rest } = props
  const attached = Boolean(slots.startAddon || slots.endAddon)
  return h(
    Group,
    {
      width: "full",
      attached,
      skip: (child: VNode) => child.type === InputElement,
      "data-start-element": slots.startElement ? "" : undefined,
      "data-end-element": slots.endElement ? "" : undefined,
      style: { "--input-start-offset": startOffset, "--input-end-offset": endOffset },
      ...rest,
    },
    () => [
      slots.startAddon && h(InputAddon, null, slots.startAddon),
      slots.startElement && h(InputElement, { pointerEvents: "none" }, slots.startElement),
      slots.default?.(),
      slots.endElement && h(InputElement, { placement: "end" }, slots.endElement),
      slots.endAddon && h(InputAddon, null, slots.endAddon),
    ],
  )
}
