import { ark } from "@ark-ui/solid/factory"
import { type ComponentProps, type JSX, Show, mergeProps, splitProps } from "solid-js"
import { inputAddon, inputElement } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/solid-ui/jsx"

import { Group, type GroupProps } from "../group"

export const InputElement = styled(ark.div, inputElement, { defaultProps: { "data-input-element": "" } })
export type InputElementProps = ComponentProps<typeof InputElement>

export const InputAddon = styled(ark.div, inputAddon)
export type InputAddonProps = ComponentProps<typeof InputAddon>

export interface InputGroupProps extends GroupProps {
  startElement?: JSX.Element | undefined
  startElementProps?: InputElementProps | undefined
  endElement?: JSX.Element | undefined
  endElementProps?: InputElementProps | undefined
  startAddon?: JSX.Element | undefined
  startAddonProps?: InputAddonProps | undefined
  endAddon?: JSX.Element | undefined
  endAddonProps?: InputAddonProps | undefined
  startOffset?: string | undefined
  endOffset?: string | undefined
}

export function InputGroup(props: InputGroupProps) {
  const merged = mergeProps({ startOffset: "0px", endOffset: "0px" }, props)
  const [local, rest] = splitProps(merged, [
    "startElement",
    "startElementProps",
    "endElement",
    "endElementProps",
    "startAddon",
    "startAddonProps",
    "endAddon",
    "endAddonProps",
    "startOffset",
    "endOffset",
    "children",
    "style",
  ])
  return (
    <Group
      width="full"
      attached={Boolean(local.startAddon || local.endAddon)}
      skip={(child) => child.hasAttribute("data-input-element")}
      data-start-element={local.startElement ? "" : undefined}
      data-end-element={local.endElement ? "" : undefined}
      style={{
        "--input-start-offset": local.startOffset,
        "--input-end-offset": local.endOffset,
        ...(typeof local.style === "object" ? local.style : {}),
      }}
      {...rest}
    >
      <Show when={local.startAddon}>
        <InputAddon {...local.startAddonProps}>{local.startAddon}</InputAddon>
      </Show>
      <Show when={local.startElement}>
        <InputElement pointerEvents="none" {...local.startElementProps}>
          {local.startElement}
        </InputElement>
      </Show>
      {local.children}
      <Show when={local.endElement}>
        <InputElement placement="end" {...local.endElementProps}>
          {local.endElement}
        </InputElement>
      </Show>
      <Show when={local.endAddon}>
        <InputAddon {...local.endAddonProps}>{local.endAddon}</InputAddon>
      </Show>
    </Group>
  )
}
