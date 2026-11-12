"use client"

import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { dataList } from "@isbatak/panda-ds/recipes"

const { withProvider, withContext, PropsProvider } = createSlotRecipeContext(dataList)

export const DataListRoot = withProvider(ark.dl, "root")
export type DataListRootProps = ComponentProps<typeof DataListRoot>

export const DataListPropsProvider = PropsProvider

export const DataListItem = withContext(ark.div, "item")
export type DataListItemProps = ComponentProps<typeof DataListItem>

export const DataListItemLabel = withContext(ark.dt, "itemLabel")
export type DataListItemLabelProps = ComponentProps<typeof DataListItemLabel>

export const DataListItemValue = withContext(ark.dd, "itemValue")
export type DataListItemValueProps = ComponentProps<typeof DataListItemValue>
