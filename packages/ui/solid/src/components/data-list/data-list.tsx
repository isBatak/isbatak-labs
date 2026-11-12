import { ark } from "@ark-ui/solid/factory"
import { dataList } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
import type { ComponentProps } from "solid-js"

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
