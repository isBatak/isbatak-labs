import { JsonTreeView } from "@ark-ui/vue/json-tree-view"
import { TreeView } from "@ark-ui/vue/tree-view"
import { type Component, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { jsonTreeView } from "@isbatak/panda-ds/recipes"

import { Icon } from "../icon"

const { withProvider, withContext } = createSlotRecipeContext(jsonTreeView)

export const JsonTreeViewRoot = withProvider(JsonTreeView.Root, "root")
export type JsonTreeViewRootProps = ComponentProps<typeof JsonTreeViewRoot>

export const JsonTreeViewRootProvider = withProvider(JsonTreeView.RootProvider, "root")
export type JsonTreeViewRootProviderProps = ComponentProps<typeof JsonTreeViewRootProvider>

const StyledJsonTreeViewTree = withContext(JsonTreeView.Tree, "tree")
export type JsonTreeViewTreeProps = ComponentProps<typeof StyledJsonTreeViewTree>

export const JsonTreeViewTree = defineComponent({
  name: "JsonTreeViewTree",
  inheritAttrs: false,
  props: { indentGuide: Boolean },
  setup(props, { attrs, slots }) {
    return () =>
      h(StyledJsonTreeViewTree as Component, attrs, {
        ...slots,
        arrow: slots.arrow ?? (() => h(Icon, { name: "chevron-right" })),
        indentGuide: slots.indentGuide ?? (() => (props.indentGuide ? h(TreeView.IndentGuide) : null)),
      })
  },
}) as unknown as typeof StyledJsonTreeViewTree
