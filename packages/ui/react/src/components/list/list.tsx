"use client"

import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { list } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext } = createSlotRecipeContext(list)

export const ListRoot = withProvider(ark.ul, "root", { defaultProps: { role: "list" } })
export type ListRootProps = ComponentProps<typeof ListRoot>

export const ListItem = withContext(ark.li, "item")
export type ListItemProps = ComponentProps<typeof ListItem>

export const ListIndicator = withContext(ark.span, "indicator")
export type ListIndicatorProps = ComponentProps<typeof ListIndicator>
