"use client"

import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { actionItem } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext, PropsProvider } = createSlotRecipeContext(actionItem)

export const ActionItemRoot = withProvider(ark.div, "root")
export type ActionItemRootProps = ComponentProps<typeof ActionItemRoot>

export const ActionItemPropsProvider = PropsProvider

export const ActionItemStartElement = withContext(ark.span, "startElement")
export type ActionItemStartElementProps = ComponentProps<typeof ActionItemStartElement>

export const ActionItemLabel = withContext(ark.span, "label")
export type ActionItemLabelProps = ComponentProps<typeof ActionItemLabel>

export const ActionItemEndElement = withContext(ark.span, "endElement")
export type ActionItemEndElementProps = ComponentProps<typeof ActionItemEndElement>

export const ActionItemControlElement = withContext(ark.div, "controlElement")
export type ActionItemControlElementProps = ComponentProps<typeof ActionItemControlElement>
