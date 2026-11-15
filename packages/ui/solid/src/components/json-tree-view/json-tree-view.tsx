import { JsonTreeView } from "@ark-ui/solid/json-tree-view"
import { type ComponentProps, type JSX, splitProps } from "solid-js"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
import { jsonTreeView } from "@isbatak/panda-ds/recipes"

import { Icon } from "../icon/icon"

const { withProvider, withContext } = createSlotRecipeContext(jsonTreeView)

export const JsonTreeViewRoot = withProvider(JsonTreeView.Root, "root")
export type JsonTreeViewRootProps = ComponentProps<typeof JsonTreeViewRoot>

export const JsonTreeViewRootProvider = withProvider(JsonTreeView.RootProvider, "root")
export type JsonTreeViewRootProviderProps = ComponentProps<typeof JsonTreeViewRootProvider>

const StyledJsonTreeViewTree = withContext(JsonTreeView.Tree, "tree")

export type JsonTreeViewTreeProps = ComponentProps<typeof StyledJsonTreeViewTree>

export function JsonTreeViewTree(props: JsonTreeViewTreeProps) {
  const [local, rest] = splitProps(props, ["arrow"])
  const arrow = () => local.arrow ?? <Icon name="chevron-right" />
  return <StyledJsonTreeViewTree arrow={arrow as unknown as JSX.Element} {...rest} />
}
