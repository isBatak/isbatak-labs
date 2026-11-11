<script module lang="ts">
  import { TreeView } from "@ark-ui/svelte/tree-view"

  export type TreeViewNodeIndicatorProps = Omit<TreeView.NodeIndicatorProps, "type"> & {
    type?: TreeView.NodeIndicatorProps["type"]
    unstyled?: boolean | undefined
  }
</script>

<script lang="ts">
  import { Icon } from "../icon"
  import { useTreeViewStyles } from "./tree-view-styles"

  let {
    ref = $bindable(null),
    type = "expanded",
    unstyled,
    class: className,
    children,
    ...props
  }: TreeViewNodeIndicatorProps = $props()
  const styles = useTreeViewStyles()
</script>

<TreeView.NodeIndicator
  bind:ref
  {type}
  {...props}
  data-slot="nodeIndicator"
  class={[!unstyled && styles().nodeIndicator, className]}
>
  {#if children}
    {@render children()}
  {:else if type === "expanded"}
    <Icon name="chevron-right" />
  {/if}
</TreeView.NodeIndicator>
