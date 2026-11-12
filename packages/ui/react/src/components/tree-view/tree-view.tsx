"use client"

import type { TreeNode } from "@ark-ui/react/collection"
import { TreeView, useTreeViewContext } from "@ark-ui/react/tree-view"
import type { ComponentProps, JSX, ReactNode } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
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
  /**
   * What the indicator reflects. `expanded` shows a chevron that rotates when the branch is open.
   * @default "expanded"
   */
  type?: TreeView.NodeIndicatorProps["type"]
}

export function TreeViewNodeIndicator({ type = "expanded", children, ...props }: TreeViewNodeIndicatorProps) {
  return (
    <StyledTreeViewNodeIndicator type={type} {...props}>
      {children ?? (type === "expanded" ? <Icon name="chevron-right" /> : null)}
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
  nodeState: TreeView.NodeState
}

export interface TreeViewNodesProps<T extends TreeNode = TreeNode> {
  /**
   * Renders a node's row. Branch rows are wrapped in a `NodeGroup` with their children in a `NodeGroupContent`.
   */
  render: (props: TreeViewNodeRenderProps<T>) => ReactNode
  /**
   * Rendered at the start of every `NodeGroupContent`, usually a `TreeView.IndentGuide`.
   */
  indentGuide?: ReactNode
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
  const { render, indentGuide, nodeGroupProps, nodeGroupContentProps } = props
  const tree = useTreeViewContext()

  const renderNode = (node: T, indexPath: number[]): ReactNode => (
    <TreeView.NodeProvider key={indexPath.join(".")} node={node} indexPath={indexPath}>
      <TreeView.NodeContext>
        {(nodeState) =>
          nodeState.isBranch ? (
            <TreeViewNodeGroup {...nodeGroupProps}>
              {render({ node, indexPath, nodeState })}
              <TreeViewNodeGroupContent {...nodeGroupContentProps}>
                {indentGuide}
                {tree.collection
                  .getNodeChildren(node)
                  .map((child, index) => renderNode(child as T, [...indexPath, index]))}
              </TreeViewNodeGroupContent>
            </TreeViewNodeGroup>
          ) : (
            render({ node, indexPath, nodeState })
          )
        }
      </TreeView.NodeContext>
    </TreeView.NodeProvider>
  )

  return (
    <>
      {tree.collection.getNodeChildren(tree.collection.rootNode).map((node, index) => renderNode(node as T, [index]))}
    </>
  )
}
