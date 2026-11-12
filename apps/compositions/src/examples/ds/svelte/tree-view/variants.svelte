<script lang="ts">
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { Stack } from "@isbatak/svelte-ui/stack"
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

<Stack gap="8">
  <TreeView.Root {collection} class={css({ maxW: "sm" })} defaultExpandedValue={["src"]} defaultSelectedValue={["src/app.tsx"]} variant="subtle">
    <TreeView.Label>variant=subtle</TreeView.Label>
    <TreeView.Tree>
      <TreeView.Nodes>
        {#snippet indentGuide()}
          <TreeView.IndentGuide />
        {/snippet}
        {#snippet render({ node, nodeState })}
          {#if nodeState.isBranch}
            <TreeView.Node>
              <TreeView.NodeIndicator />
              <Icon name="folder" />
              <TreeView.NodeText>{node.name}</TreeView.NodeText>
            </TreeView.Node>
          {:else}
            <TreeView.Node>
              <Icon name="file" />
              <TreeView.NodeText>{node.name}</TreeView.NodeText>
            </TreeView.Node>
          {/if}
        {/snippet}
      </TreeView.Nodes>
    </TreeView.Tree>
  </TreeView.Root>
  <TreeView.Root {collection} class={css({ maxW: "sm" })} defaultExpandedValue={["src"]} defaultSelectedValue={["src/app.tsx"]} variant="solid">
    <TreeView.Label>variant=solid</TreeView.Label>
    <TreeView.Tree>
      <TreeView.Nodes>
        {#snippet indentGuide()}
          <TreeView.IndentGuide />
        {/snippet}
        {#snippet render({ node, nodeState })}
          {#if nodeState.isBranch}
            <TreeView.Node>
              <TreeView.NodeIndicator />
              <Icon name="folder" />
              <TreeView.NodeText>{node.name}</TreeView.NodeText>
            </TreeView.Node>
          {:else}
            <TreeView.Node>
              <Icon name="file" />
              <TreeView.NodeText>{node.name}</TreeView.NodeText>
            </TreeView.Node>
          {/if}
        {/snippet}
      </TreeView.Nodes>
    </TreeView.Tree>
  </TreeView.Root>
</Stack>
