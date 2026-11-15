import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { JsonTreeViewDemo } from "@isbatak/compositions/ds/solid/json-tree-view/usage"
import { JsonTreeViewArrayDataDemo } from "@isbatak/compositions/ds/solid/json-tree-view/array-data"
import { JsonTreeViewErrorsDemo } from "@isbatak/compositions/ds/solid/json-tree-view/errors"
import { JsonTreeViewExpandLevelDemo } from "@isbatak/compositions/ds/solid/json-tree-view/expand-level"
import { JsonTreeViewFunctionsDemo } from "@isbatak/compositions/ds/solid/json-tree-view/functions"
import { JsonTreeViewMapAndSetDemo } from "@isbatak/compositions/ds/solid/json-tree-view/map-and-set"
import { JsonTreeViewRegexDemo } from "@isbatak/compositions/ds/solid/json-tree-view/regex"
import { JsonTreeViewRenderValueDemo } from "@isbatak/compositions/ds/solid/json-tree-view/render-value"
import { JsonTreeViewRootProviderDemo } from "@isbatak/compositions/ds/solid/json-tree-view/root-provider"
import { JsonTreeViewIndentGuideDemo } from "@isbatak/compositions/ds/solid/json-tree-view/indent-guide"
import { JsonTreeViewVariantsDemo } from "@isbatak/compositions/ds/solid/json-tree-view/variants"
import { JsonTreeViewSizesDemo } from "@isbatak/compositions/ds/solid/json-tree-view/sizes"

const meta = {
  title: "DS/JSON tree view",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <JsonTreeViewDemo />,
}

export const ArrayData: Story = {
  render: () => <JsonTreeViewArrayDataDemo />,
}

export const Errors: Story = {
  render: () => <JsonTreeViewErrorsDemo />,
}

export const ExpandLevel: Story = {
  render: () => <JsonTreeViewExpandLevelDemo />,
}

export const Functions: Story = {
  render: () => <JsonTreeViewFunctionsDemo />,
}

export const MapAndSet: Story = {
  render: () => <JsonTreeViewMapAndSetDemo />,
}

export const Regex: Story = {
  render: () => <JsonTreeViewRegexDemo />,
}

export const RenderValue: Story = {
  render: () => <JsonTreeViewRenderValueDemo />,
}

export const RootProvider: Story = {
  render: () => <JsonTreeViewRootProviderDemo />,
}

export const IndentGuide: Story = {
  render: () => <JsonTreeViewIndentGuideDemo />,
}

export const Variants: Story = {
  render: () => <JsonTreeViewVariantsDemo />,
}

export const Sizes: Story = {
  render: () => <JsonTreeViewSizesDemo />,
}
