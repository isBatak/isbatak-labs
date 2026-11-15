import { GridVirtualizer, ListVirtualizer, WindowVirtualizer } from "@ark-ui/solid/virtualizer"
import type { ComponentProps } from "solid-js"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
import { virtualizer } from "@isbatak/panda-ds/recipes"

const list = createSlotRecipeContext(virtualizer)

export const ListVirtualizerRoot = list.withProvider(ListVirtualizer.Root, "root")
export type ListVirtualizerRootProps = ComponentProps<typeof ListVirtualizerRoot>

export const ListVirtualizerContent = list.withContext(ListVirtualizer.Content, "content")
export type ListVirtualizerContentProps = ComponentProps<typeof ListVirtualizerContent>

export const ListVirtualizerItem = list.withContext(ListVirtualizer.Item, "item")
export type ListVirtualizerItemProps = ComponentProps<typeof ListVirtualizerItem>

export const ListVirtualizerContext = ListVirtualizer.Context
export type ListVirtualizerContextProps = ListVirtualizer.ContextProps

const grid = createSlotRecipeContext(virtualizer)

export const GridVirtualizerRoot = grid.withProvider(GridVirtualizer.Root, "root")
export type GridVirtualizerRootProps = ComponentProps<typeof GridVirtualizerRoot>

export const GridVirtualizerContent = grid.withContext(GridVirtualizer.Content, "content")
export type GridVirtualizerContentProps = ComponentProps<typeof GridVirtualizerContent>

export const GridVirtualizerRow = grid.withContext(GridVirtualizer.Row, "row")
export type GridVirtualizerRowProps = ComponentProps<typeof GridVirtualizerRow>

export const GridVirtualizerCell = grid.withContext(GridVirtualizer.Cell, "cell")
export type GridVirtualizerCellProps = ComponentProps<typeof GridVirtualizerCell>

export const GridVirtualizerContext = GridVirtualizer.Context
export type GridVirtualizerContextProps = GridVirtualizer.ContextProps

const win = createSlotRecipeContext(virtualizer)

export const WindowVirtualizerRoot = win.withProvider(WindowVirtualizer.Root, "root")
export type WindowVirtualizerRootProps = ComponentProps<typeof WindowVirtualizerRoot>

export const WindowVirtualizerContent = win.withContext(WindowVirtualizer.Content, "content")
export type WindowVirtualizerContentProps = ComponentProps<typeof WindowVirtualizerContent>

export const WindowVirtualizerItem = win.withContext(WindowVirtualizer.Item, "item")
export type WindowVirtualizerItemProps = ComponentProps<typeof WindowVirtualizerItem>

export const WindowVirtualizerContext = WindowVirtualizer.Context
export type WindowVirtualizerContextProps = WindowVirtualizer.ContextProps
