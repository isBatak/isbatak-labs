<script lang="ts">
  import { Checkmark } from "@isbatak/svelte-ui/checkmark"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { TreeView, createTreeCollection } from "@isbatak/svelte-ui/tree-view"
  import { css } from "styled-system/css"

  interface Node {
    id: string
    name: string
    disabled?: boolean
    children?: Node[]
  }

  const collection = createTreeCollection<Node>({
    nodeToValue: (node) => node.id,
    nodeToString: (node) => node.name,
    rootNode: {
      id: "ROOT",
      name: "",
      children: [
        {
          id: "node_modules",
          name: "node_modules",
          children: [
            { id: "node_modules/zag-js", name: "zag-js" },
            { id: "node_modules/pandacss", name: "panda" },
            {
              id: "node_modules/@types",
              name: "@types",
              children: [
                { id: "node_modules/@types/react", name: "react" },
                { id: "node_modules/@types/react-dom", name: "react-dom" },
              ],
            },
          ],
        },
        {
          id: "src",
          name: "src",
          children: [
            { id: "src/app.tsx", name: "app.tsx" },
            { id: "src/index.ts", name: "index.ts" },
          ],
        },
        { id: "panda.config", name: "panda.config.ts" },
        { id: "package.json", name: "package.json" },
        { id: "renovate.json", name: "renovate.json" },
        { id: "readme.md", name: "README.md" },
      ],
    },
  })
</script>

<TreeView.Root {collection} class={css({ maxW: "sm" })} defaultCheckedValue={[]}>
  <TreeView.Label>Tree</TreeView.Label>
  <TreeView.Tree>
    <TreeView.Nodes>
      {#snippet render({ node, nodeState })}
        {#if nodeState.isBranch}
          <TreeView.Node>
            <TreeView.NodeCheckbox>
              <Checkmark checked={nodeState.checked === true} indeterminate={nodeState.checked === "indeterminate"} />
            </TreeView.NodeCheckbox>
            <TreeView.NodeIndicator />
            <Icon name="folder" />
            <TreeView.NodeText>{node.name}</TreeView.NodeText>
          </TreeView.Node>
        {:else}
          <TreeView.Node>
            <TreeView.NodeCheckbox>
              <Checkmark checked={nodeState.checked === true} indeterminate={nodeState.checked === "indeterminate"} />
            </TreeView.NodeCheckbox>
            <Icon name="file" />
            <TreeView.NodeText>{node.name}</TreeView.NodeText>
          </TreeView.Node>
        {/if}
      {/snippet}
    </TreeView.Nodes>
  </TreeView.Tree>
</TreeView.Root>
