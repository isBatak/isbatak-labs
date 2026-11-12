import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import TreeViewDemo from "@isbatak/compositions/ds/vue/tree-view/usage"
import TreeViewSizesDemo from "@isbatak/compositions/ds/vue/tree-view/sizes"
import TreeViewVariantsDemo from "@isbatak/compositions/ds/vue/tree-view/variants"
import TreeViewDefaultExpandedDemo from "@isbatak/compositions/ds/vue/tree-view/default-expanded"
import TreeViewControlledExpansionDemo from "@isbatak/compositions/ds/vue/tree-view/controlled-expansion"
import TreeViewMultiSelectDemo from "@isbatak/compositions/ds/vue/tree-view/multi-select"
import TreeViewCheckboxDemo from "@isbatak/compositions/ds/vue/tree-view/checkbox"
import TreeViewDisabledNodeDemo from "@isbatak/compositions/ds/vue/tree-view/disabled-node"
import TreeViewExpandCollapseAllDemo from "@isbatak/compositions/ds/vue/tree-view/expand-collapse-all"
import TreeViewCollapseAnimationDemo from "@isbatak/compositions/ds/vue/tree-view/collapse-animation"

const meta = {
  title: "DS/Tree view",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(TreeViewDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(TreeViewSizesDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(TreeViewVariantsDemo) }),
}

export const DefaultExpanded: Story = {
  render: () => ({ setup: () => () => h(TreeViewDefaultExpandedDemo) }),
}

export const ControlledExpansion: Story = {
  render: () => ({ setup: () => () => h(TreeViewControlledExpansionDemo) }),
}

export const MultiSelect: Story = {
  render: () => ({ setup: () => () => h(TreeViewMultiSelectDemo) }),
}

export const Checkbox: Story = {
  render: () => ({ setup: () => () => h(TreeViewCheckboxDemo) }),
}

export const DisabledNode: Story = {
  render: () => ({ setup: () => () => h(TreeViewDisabledNodeDemo) }),
}

export const ExpandCollapseAll: Story = {
  render: () => ({ setup: () => () => h(TreeViewExpandCollapseAllDemo) }),
}

export const CollapseAnimation: Story = {
  render: () => ({ setup: () => () => h(TreeViewCollapseAnimationDemo) }),
}
