import { Show } from "solid-js"
import { Icon } from "@isbatak/solid-ui/icon"
import { TreeView, createTreeCollection } from "@isbatak/solid-ui/tree-view"

export function TreeViewCollapseAnimationDemo() {
  return (
    <TreeView.Root collection={collection} maxW="sm" animateContent>
      <TreeView.Label>Tree</TreeView.Label>
      <TreeView.Tree>
        <TreeView.Nodes<Node>
          indentGuide={() => <TreeView.IndentGuide />}
          render={({ node, nodeState }) => (
            <Show
              when={nodeState().isBranch}
              fallback={
                <TreeView.Node>
                  <Icon name="file" />
                  <TreeView.NodeText>{node.name}</TreeView.NodeText>
                </TreeView.Node>
              }
            >
              <TreeView.Node>
                <TreeView.NodeIndicator />
                <Icon name="folder" />
                <TreeView.NodeText>{node.name}</TreeView.NodeText>
              </TreeView.Node>
            </Show>
          )}
        />
      </TreeView.Tree>
    </TreeView.Root>
  )
}

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
