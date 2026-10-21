"use client"

import { ark } from "@ark-ui/react/factory"
import { styled } from "@isbatak/panda-ds/jsx"
import { inputAddon, inputElement } from "@isbatak/panda-ds/recipes"
import {
  Children,
  type ComponentProps,
  type CSSProperties,
  cloneElement,
  type ReactElement,
  type ReactNode,
} from "react"

import { Group, type GroupProps } from "../group/group"

export const InputElement = styled(ark.div, inputElement)
export type InputElementProps = ComponentProps<typeof InputElement>

export const InputAddon = styled(ark.div, inputAddon)
export type InputAddonProps = ComponentProps<typeof InputAddon>

export interface InputGroupProps extends Omit<GroupProps, "children"> {
  startElement?: ReactNode | undefined
  startElementProps?: InputElementProps | undefined
  endElement?: ReactNode | undefined
  endElementProps?: InputElementProps | undefined
  startAddon?: ReactNode | undefined
  startAddonProps?: InputAddonProps | undefined
  endAddon?: ReactNode | undefined
  endAddonProps?: InputAddonProps | undefined
  startOffset?: string | undefined
  endOffset?: string | undefined
  children: ReactElement<Record<string, unknown>>
}

export function InputGroup(props: InputGroupProps) {
  const {
    startElement,
    startElementProps,
    endElement,
    endElementProps,
    startAddon,
    startAddonProps,
    endAddon,
    endAddonProps,
    startOffset = "0px",
    endOffset = "0px",
    children,
    ...rest
  } = props

  const child = Children.only(children)
  const attached = Boolean(startAddon ?? endAddon)

  return (
    <Group width="full" attached={attached} skip={(el) => el.type === InputElement} {...rest}>
      {startAddon && <InputAddon {...startAddonProps}>{startAddon}</InputAddon>}
      {startElement && (
        <InputElement pointerEvents="none" {...startElementProps}>
          {startElement}
        </InputElement>
      )}
      {cloneElement(child, {
        ...child.props,
        style: {
          ...(startElement && { paddingInlineStart: `calc(var(--input-height) - ${startOffset})` }),
          ...(endElement && { paddingInlineEnd: `calc(var(--input-height) - ${endOffset})` }),
          ...(child.props.style as CSSProperties | undefined),
        },
      })}
      {endElement && (
        <InputElement placement="end" {...endElementProps}>
          {endElement}
        </InputElement>
      )}
      {endAddon && <InputAddon {...endAddonProps}>{endAddon}</InputAddon>}
    </Group>
  )
}
