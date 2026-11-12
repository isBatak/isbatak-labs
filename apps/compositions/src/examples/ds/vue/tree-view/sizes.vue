<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { Stack } from "@isbatak/vue-ui/stack"
import { TreeView, createTreeCollection } from "@isbatak/vue-ui/tree-view"

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

<template>
  <Stack gap="8">
    <TreeView.Root :collection="collection" maxW="sm" size="xs">
      <TreeView.Label>size=xs</TreeView.Label>
      <TreeView.Tree>
        <TreeView.Nodes>
          <template #indentGuide>
            <TreeView.IndentGuide />
          </template>
          <template #default="{ node, nodeState }">
            <TreeView.Node v-if="nodeState.isBranch">
              <TreeView.NodeIndicator />
              <Icon name="folder" />
              <TreeView.NodeText>{{ node.name }}</TreeView.NodeText>
            </TreeView.Node>
            <TreeView.Node v-else>
              <Icon name="file" />
              <TreeView.NodeText>{{ node.name }}</TreeView.NodeText>
            </TreeView.Node>
          </template>
        </TreeView.Nodes>
      </TreeView.Tree>
    </TreeView.Root>
    <TreeView.Root :collection="collection" maxW="sm" size="sm">
      <TreeView.Label>size=sm</TreeView.Label>
      <TreeView.Tree>
        <TreeView.Nodes>
          <template #indentGuide>
            <TreeView.IndentGuide />
          </template>
          <template #default="{ node, nodeState }">
            <TreeView.Node v-if="nodeState.isBranch">
              <TreeView.NodeIndicator />
              <Icon name="folder" />
              <TreeView.NodeText>{{ node.name }}</TreeView.NodeText>
            </TreeView.Node>
            <TreeView.Node v-else>
              <Icon name="file" />
              <TreeView.NodeText>{{ node.name }}</TreeView.NodeText>
            </TreeView.Node>
          </template>
        </TreeView.Nodes>
      </TreeView.Tree>
    </TreeView.Root>
    <TreeView.Root :collection="collection" maxW="sm" size="md">
      <TreeView.Label>size=md</TreeView.Label>
      <TreeView.Tree>
        <TreeView.Nodes>
          <template #indentGuide>
            <TreeView.IndentGuide />
          </template>
          <template #default="{ node, nodeState }">
            <TreeView.Node v-if="nodeState.isBranch">
              <TreeView.NodeIndicator />
              <Icon name="folder" />
              <TreeView.NodeText>{{ node.name }}</TreeView.NodeText>
            </TreeView.Node>
            <TreeView.Node v-else>
              <Icon name="file" />
              <TreeView.NodeText>{{ node.name }}</TreeView.NodeText>
            </TreeView.Node>
          </template>
        </TreeView.Nodes>
      </TreeView.Tree>
    </TreeView.Root>
  </Stack>
</template>
