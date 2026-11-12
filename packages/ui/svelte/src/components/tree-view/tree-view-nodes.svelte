<script module lang="ts">
  import type { TreeNode } from "@ark-ui/svelte/tree-view"
  import type { TreeView } from "@ark-ui/svelte/tree-view"
  import type { Snippet } from "svelte"
  import type { TreeViewNodeGroupProps } from "./tree-view-node-group.svelte"
  import type { TreeViewNodeGroupContentProps } from "./tree-view-node-group-content.svelte"

  export interface TreeViewNodeRenderProps<T extends TreeNode = TreeNode> {
    node: T
    indexPath: number[]
    nodeState: TreeView.NodeState
  }

  export interface TreeViewNodesProps<T extends TreeNode = TreeNode> {
    /**
     * Renders a node's row. Branch rows are wrapped in a `NodeGroup` with their children in a `NodeGroupContent`.
     */
    render: Snippet<[TreeViewNodeRenderProps<T>]>
    /**
     * Rendered at the start of every `NodeGroupContent`, usually a `TreeView.IndentGuide`.
     */
    indentGuide?: Snippet
    /**
     * Props passed to every `NodeGroup`.
     */
    nodeGroupProps?: TreeViewNodeGroupProps
    /**
     * Props passed to every `NodeGroupContent`.
     */
    nodeGroupContentProps?: TreeViewNodeGroupContentProps
  }
</script>

<script lang="ts" generics="T extends TreeNode = TreeNode">
  import { TreeView as ArkTreeView, useTreeViewContext } from "@ark-ui/svelte/tree-view"
  import TreeViewNodeGroup from "./tree-view-node-group.svelte"
  import TreeViewNodeGroupContent from "./tree-view-node-group-content.svelte"

  let { render, indentGuide, nodeGroupProps, nodeGroupContentProps }: TreeViewNodesProps<T> = $props()
  const tree = useTreeViewContext()
</script>

{#snippet renderNode(node: T, indexPath: number[])}
  <ArkTreeView.NodeProvider {node} {indexPath}>
    {@const nodeState = tree().getNodeState({ node, indexPath })}
    {#if nodeState.isBranch}
      <TreeViewNodeGroup {...nodeGroupProps}>
        {@render render({ node, indexPath, nodeState })}
        <TreeViewNodeGroupContent {...nodeGroupContentProps}>
          {@render indentGuide?.()}
          {#each tree().collection.getNodeChildren(node) as child, index (index)}
            {@render renderNode(child as T, [...indexPath, index])}
          {/each}
        </TreeViewNodeGroupContent>
      </TreeViewNodeGroup>
    {:else}
      {@render render({ node, indexPath, nodeState })}
    {/if}
  </ArkTreeView.NodeProvider>
{/snippet}

{#each tree().collection.getNodeChildren(tree().collection.rootNode) as node, index (index)}
  {@render renderNode(node as T, [index])}
{/each}
