import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import JsonTreeViewDemo from "@isbatak/compositions/ds/vue/json-tree-view/usage"
import JsonTreeViewArrayDataDemo from "@isbatak/compositions/ds/vue/json-tree-view/array-data"
import JsonTreeViewErrorsDemo from "@isbatak/compositions/ds/vue/json-tree-view/errors"
import JsonTreeViewExpandLevelDemo from "@isbatak/compositions/ds/vue/json-tree-view/expand-level"
import JsonTreeViewFunctionsDemo from "@isbatak/compositions/ds/vue/json-tree-view/functions"
import JsonTreeViewMapAndSetDemo from "@isbatak/compositions/ds/vue/json-tree-view/map-and-set"
import JsonTreeViewRegexDemo from "@isbatak/compositions/ds/vue/json-tree-view/regex"
import JsonTreeViewRenderValueDemo from "@isbatak/compositions/ds/vue/json-tree-view/render-value"
import JsonTreeViewRootProviderDemo from "@isbatak/compositions/ds/vue/json-tree-view/root-provider"
import JsonTreeViewIndentGuideDemo from "@isbatak/compositions/ds/vue/json-tree-view/indent-guide"
import JsonTreeViewVariantsDemo from "@isbatak/compositions/ds/vue/json-tree-view/variants"
import JsonTreeViewSizesDemo from "@isbatak/compositions/ds/vue/json-tree-view/sizes"

const meta = {
  title: "DS/JSON tree view",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(JsonTreeViewDemo) }),
}

export const ArrayData: Story = {
  render: () => ({ setup: () => () => h(JsonTreeViewArrayDataDemo) }),
}

export const Errors: Story = {
  render: () => ({ setup: () => () => h(JsonTreeViewErrorsDemo) }),
}

export const ExpandLevel: Story = {
  render: () => ({ setup: () => () => h(JsonTreeViewExpandLevelDemo) }),
}

export const Functions: Story = {
  render: () => ({ setup: () => () => h(JsonTreeViewFunctionsDemo) }),
}

export const MapAndSet: Story = {
  render: () => ({ setup: () => () => h(JsonTreeViewMapAndSetDemo) }),
}

export const Regex: Story = {
  render: () => ({ setup: () => () => h(JsonTreeViewRegexDemo) }),
}

export const RenderValue: Story = {
  render: () => ({ setup: () => () => h(JsonTreeViewRenderValueDemo) }),
}

export const RootProvider: Story = {
  render: () => ({ setup: () => () => h(JsonTreeViewRootProviderDemo) }),
}

export const IndentGuide: Story = {
  render: () => ({ setup: () => () => h(JsonTreeViewIndentGuideDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(JsonTreeViewVariantsDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(JsonTreeViewSizesDemo) }),
}
