import { ark } from "@ark-ui/solid/factory"
import { list } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
import type { ComponentProps } from "solid-js"

const { withProvider, withContext } = createSlotRecipeContext(list)

export const ListRoot = withProvider(ark.ul, "root", { defaultProps: { role: "list" } })
export type ListRootProps = ComponentProps<typeof ListRoot>

export const ListItem = withContext(ark.li, "item")
export type ListItemProps = ComponentProps<typeof ListItem>

export const ListIndicator = withContext(ark.span, "indicator")
export type ListIndicatorProps = ComponentProps<typeof ListIndicator>
