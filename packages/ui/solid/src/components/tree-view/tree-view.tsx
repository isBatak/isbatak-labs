import type { TreeNode } from "@ark-ui/solid/collection"
import { TreeView, useTreeViewContext } from "@ark-ui/solid/tree-view"
import { type Accessor, type ComponentProps, For, type JSX, Show, splitProps } from "solid-js"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
import { treeView } from "@isbatak/panda-ds/recipes"

import { Icon } from "../icon/icon"

const { withProvider, withContext } = createSlotRecipeContext(treeView)

const StyledTreeViewRoot = withProvider(TreeView.Root, "root")

export type TreeViewRootProps<T extends TreeNode = TreeNode> = Omit<
  ComponentProps<typeof StyledTreeViewRoot>,
  keyof TreeView.RootProps<T>
> &
  TreeView.RootProps<T>

export const TreeViewRoot = StyledTreeViewRoot as <T extends TreeNode>(props: TreeViewRootProps<T>) => JSX.Element

const StyledTreeViewRootProvider = withProvider(TreeView.RootProvider, "root")

export type TreeViewRootProviderProps<T extends TreeNode = TreeNode> = Omit<
  ComponentProps<typeof StyledTreeViewRootProvider>,
  keyof TreeView.RootProviderProps<T>
> &
  TreeView.RootProviderProps<T>

export const TreeViewRootProvider = StyledTreeViewRootProvider as <T extends TreeNode>(
  props: TreeViewRootProviderProps<T>,
) => JSX.Element

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

export function TreeViewNodeIndicator(props: TreeViewNodeIndicatorProps) {
  const [local, rest] = splitProps(props, ["type", "children"])
  const type = () => local.type ?? "expanded"
  return (
    <StyledTreeViewNodeIndicator type={type()} {...rest}>
      <Show
        when={local.children}
        fallback={
          <Show when={type() === "expanded"}>
            <Icon name="chevron-right" />
          </Show>
        }
      >
        {local.children}
      </Show>
    </StyledTreeViewNodeIndicator>
  )
}

export const TreeViewNodeText = withContext(TreeView.NodeText, "nodeText")
export type TreeViewNodeTextProps = ComponentProps<typeof TreeViewNodeText>

export const TreeViewNodeCheckbox = withContext(TreeView.NodeCheckbox, "nodeCheckbox")
export type TreeViewNodeCheckboxProps = ComponentProps<typeof TreeViewNodeCheckbox>

export const TreeViewNodeRenameInput = withContext(TreeView.NodeRenameInput, "nodeRenameInput")
export type TreeViewNodeRenameInputProps = ComponentProps<typeof TreeViewNodeRenameInput>

export const TreeViewIndentGuide = withContext(TreeView.IndentGuide, "indentGuide")
export type TreeViewIndentGuideProps = ComponentProps<typeof TreeViewIndentGuide>

export const TreeViewCell = withContext(TreeView.Cell, "cell")
export type TreeViewCellProps = ComponentProps<typeof TreeViewCell>

export const TreeViewNodeProvider = TreeView.NodeProvider
export type TreeViewNodeProviderProps<T> = TreeView.NodeProviderProps<T>

export const TreeViewNodeContext = TreeView.NodeContext
export type TreeViewNodeContextProps = TreeView.NodeContextProps

export const TreeViewContext = TreeView.Context
export type TreeViewContextProps<T extends TreeNode = TreeNode> = TreeView.ContextProps<T>

export interface TreeViewNodeRenderProps<T extends TreeNode = TreeNode> {
  node: T
  indexPath: number[]
  nodeState: Accessor<TreeView.NodeState>
}

export interface TreeViewNodesProps<T extends TreeNode = TreeNode> {
  /**
   * Renders a node's row. Branch rows are wrapped in a `NodeGroup` with their children in a `NodeGroupContent`.
   */
  render: (props: TreeViewNodeRenderProps<T>) => JSX.Element
  /**
   * Rendered at the start of every `NodeGroupContent`, usually a `TreeView.IndentGuide`.
   */
  indentGuide?: () => JSX.Element
  /**
   * Props passed to every `NodeGroup`.
   */
  nodeGroupProps?: TreeViewNodeGroupProps
  /**
   * Props passed to every `NodeGroupContent`.
   */
  nodeGroupContentProps?: TreeViewNodeGroupContentProps
}

export function TreeViewNodes<T extends TreeNode = TreeNode>(props: TreeViewNodesProps<T>) {
  const tree = useTreeViewContext()

  const renderNode = (node: T, indexPath: number[]): JSX.Element => (
    <TreeView.NodeProvider node={node} indexPath={indexPath}>
      <TreeView.NodeContext>
        {(nodeState) => (
          <Show when={nodeState().isBranch} fallback={props.render({ node, indexPath, nodeState })}>
            <TreeViewNodeGroup {...props.nodeGroupProps}>
              {props.render({ node, indexPath, nodeState })}
              <TreeViewNodeGroupContent {...props.nodeGroupContentProps}>
                {props.indentGuide?.()}
                <For each={tree().collection.getNodeChildren(node)}>
                  {(child, index) => renderNode(child as T, [...indexPath, index()])}
                </For>
              </TreeViewNodeGroupContent>
            </TreeViewNodeGroup>
          </Show>
        )}
      </TreeView.NodeContext>
    </TreeView.NodeProvider>
  )

  return (
    <For each={tree().collection.getNodeChildren(tree().collection.rootNode)}>
      {(node, index) => renderNode(node as T, [index()])}
    </For>
  )
}
