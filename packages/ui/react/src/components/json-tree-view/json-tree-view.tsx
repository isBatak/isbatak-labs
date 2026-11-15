"use client"

import { JsonTreeView } from "@ark-ui/react/json-tree-view"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { jsonTreeView } from "@isbatak/panda-ds/recipes"

import { Icon } from "../icon/icon"

const { withProvider, withContext } = createSlotRecipeContext(jsonTreeView)

export const JsonTreeViewRoot = withProvider(JsonTreeView.Root, "root")
export type JsonTreeViewRootProps = ComponentProps<typeof JsonTreeViewRoot>

export const JsonTreeViewRootProvider = withProvider(JsonTreeView.RootProvider, "root")
export type JsonTreeViewRootProviderProps = ComponentProps<typeof JsonTreeViewRootProvider>

const StyledJsonTreeViewTree = withContext(JsonTreeView.Tree, "tree")

export type JsonTreeViewTreeProps = ComponentProps<typeof StyledJsonTreeViewTree>

export function JsonTreeViewTree({ arrow, ...props }: JsonTreeViewTreeProps) {
  return <StyledJsonTreeViewTree arrow={arrow ?? <Icon name="chevron-right" />} {...props} />
}
