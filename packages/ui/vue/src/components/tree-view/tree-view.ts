import type { TreeNode } from "@ark-ui/vue/collection"
import { TreeView, useTreeViewContext } from "@ark-ui/vue/tree-view"
import type { HTMLArkProps } from "@ark-ui/vue/factory"
import {
  type Component,
  type FunctionalComponent,
  type PropType,
  type SlotsType,
  type VNodeChild,
  defineComponent,
  h,
} from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { treeView } from "@isbatak/panda-ds/recipes"
import { Icon } from "../icon"

const { withProvider, withContext } = createSlotRecipeContext(treeView)

export const TreeViewRoot = withProvider(TreeView.Root, "root")
export type TreeViewRootProps = ComponentProps<typeof TreeViewRoot>

export const TreeViewRootProvider = withProvider(TreeView.RootProvider, "root")
export type TreeViewRootProviderProps = ComponentProps<typeof TreeViewRootProvider>

export const TreeViewLabel = withContext(TreeView.Label, "label")
export type TreeViewLabelProps = ComponentProps<typeof TreeViewLabel>

export const TreeViewTree = withContext(TreeView.Tree, "tree")
export type TreeViewTreeProps = ComponentProps<typeof TreeViewTree>

export const TreeViewNode = withContext(TreeView.Node, "node")
export type TreeViewNodeProps = ComponentProps<typeof TreeViewNode>

export const TreeViewNodeGroup = withContext(TreeView.NodeGroup, "nodeGroup")
export type TreeViewNodeGroupProps = ComponentProps<typeof TreeViewNodeGroup>

export const TreeViewNodeGroupContent = withContext(TreeView.NodeGroupContent, "nodeGroupContent")
export type TreeViewNodeGroupContentProps = ComponentProps<typeof TreeViewNodeGroupContent>

export const TreeViewNodeExpandTrigger = withContext(TreeView.NodeExpandTrigger, "nodeExpandTrigger")
export type TreeViewNodeExpandTriggerProps = ComponentProps<typeof TreeViewNodeExpandTrigger>

const StyledTreeViewNodeIndicator = withContext(TreeView.NodeIndicator, "nodeIndicator")
export type TreeViewNodeIndicatorProps = Omit<ComponentProps<typeof StyledTreeViewNodeIndicator>, "type"> & {
  type?: TreeView.NodeIndicatorProps["type"]
}

export const TreeViewNodeIndicator = defineComponent({
  name: "TreeViewNodeIndicator",
  inheritAttrs: false,
  props: {
    type: {
      type: String as PropType<TreeView.NodeIndicatorProps["type"]>,
      default: "expanded",
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(StyledTreeViewNodeIndicator as Component, { ...attrs, type: props.type }, () =>
        slots.default ? slots.default() : props.type === "expanded" ? h(Icon, { name: "chevron-right" }) : null,
      )
  },
}) as unknown as Component<TreeViewNodeIndicatorProps>

export const TreeViewNodeText = withContext(TreeView.NodeText, "nodeText")
export type TreeViewNodeTextProps = ComponentProps<typeof TreeViewNodeText>

export const TreeViewNodeCheckbox = withContext(TreeView.NodeCheckbox, "nodeCheckbox")
export type TreeViewNodeCheckboxProps = ComponentProps<typeof TreeViewNodeCheckbox>

export const TreeViewNodeRenameInput = withContext(
  TreeView.NodeRenameInput as unknown as FunctionalComponent<HTMLArkProps<"input">>,
  "nodeRenameInput",
)
export type TreeViewNodeRenameInputProps = ComponentProps<typeof TreeViewNodeRenameInput>

export const TreeViewIndentGuide = withContext(TreeView.IndentGuide, "indentGuide")
export type TreeViewIndentGuideProps = ComponentProps<typeof TreeViewIndentGuide>

export const TreeViewCell = withContext(TreeView.Cell, "cell")
export type TreeViewCellProps = ComponentProps<typeof TreeViewCell>

export const TreeViewNodeProvider = TreeView.NodeProvider
export type TreeViewNodeProviderProps<T extends TreeNode = TreeNode> = TreeView.NodeProviderProps<T>

export const TreeViewNodeContext = TreeView.NodeContext
export type TreeViewNodeContextProps = TreeView.NodeContextProps

export const TreeViewContext = TreeView.Context
export type TreeViewContextProps<T extends TreeNode = TreeNode> = TreeView.ContextProps<T>

export interface TreeViewNodeRenderProps<T extends TreeNode = TreeNode> {
  node: T
  indexPath: number[]
  nodeState: TreeView.NodeState
}

export interface TreeViewNodesProps {
  nodeGroupProps?: TreeViewNodeGroupProps
  nodeGroupContentProps?: TreeViewNodeGroupContentProps
}

export const TreeViewNodes = defineComponent({
  name: "TreeViewNodes",
  props: {
    nodeGroupProps: Object as PropType<TreeViewNodeGroupProps>,
    nodeGroupContentProps: Object as PropType<TreeViewNodeGroupContentProps>,
  },
  slots: Object as SlotsType<{
    default: TreeViewNodeRenderProps
    indentGuide?: Record<string, never>
  }>,
  setup(props, { slots }) {
    const tree = useTreeViewContext()

    const renderNode = (node: TreeNode, indexPath: number[]): VNodeChild =>
      h(TreeView.NodeProvider as Component, { key: indexPath.join("."), node, indexPath }, () => {
        const nodeState = tree.value.getNodeState({ node, indexPath })
        const row = slots.default({ node, indexPath, nodeState })
        if (!nodeState.isBranch) return row
        return h(TreeViewNodeGroup as Component, props.nodeGroupProps ?? {}, () => [
          row,
          h(TreeViewNodeGroupContent as Component, props.nodeGroupContentProps ?? {}, () => [
            slots.indentGuide?.({}),
            tree.value.collection.getNodeChildren(node).map((child, index) => renderNode(child, [...indexPath, index])),
          ]),
        ])
      })

    return () =>
      tree.value.collection
        .getNodeChildren(tree.value.collection.rootNode)
        .map((node, index) => renderNode(node, [index]))
  },
})
