import type { Meta, StoryObj } from "@storybook/react-vite"
import { TreeViewDemo } from "@isbatak/compositions/ds/react/tree-view/usage"
import { TreeViewSizesDemo } from "@isbatak/compositions/ds/react/tree-view/sizes"
import { TreeViewVariantsDemo } from "@isbatak/compositions/ds/react/tree-view/variants"
import { TreeViewDefaultExpandedDemo } from "@isbatak/compositions/ds/react/tree-view/default-expanded"
import { TreeViewControlledExpansionDemo } from "@isbatak/compositions/ds/react/tree-view/controlled-expansion"
import { TreeViewMultiSelectDemo } from "@isbatak/compositions/ds/react/tree-view/multi-select"
import { TreeViewCheckboxDemo } from "@isbatak/compositions/ds/react/tree-view/checkbox"
import { TreeViewDisabledNodeDemo } from "@isbatak/compositions/ds/react/tree-view/disabled-node"
import { TreeViewExpandCollapseAllDemo } from "@isbatak/compositions/ds/react/tree-view/expand-collapse-all"
import { TreeViewCollapseAnimationDemo } from "@isbatak/compositions/ds/react/tree-view/collapse-animation"

const meta = {
  title: "DS/Tree view",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <TreeViewDemo />,
}

export const Sizes: Story = {
  render: () => <TreeViewSizesDemo />,
}

export const Variants: Story = {
  render: () => <TreeViewVariantsDemo />,
}

export const DefaultExpanded: Story = {
  render: () => <TreeViewDefaultExpandedDemo />,
}

export const ControlledExpansion: Story = {
  render: () => <TreeViewControlledExpansionDemo />,
}

export const MultiSelect: Story = {
  render: () => <TreeViewMultiSelectDemo />,
}

export const Checkbox: Story = {
  render: () => <TreeViewCheckboxDemo />,
}

export const DisabledNode: Story = {
  render: () => <TreeViewDisabledNodeDemo />,
}

export const ExpandCollapseAll: Story = {
  render: () => <TreeViewExpandCollapseAllDemo />,
}

export const CollapseAnimation: Story = {
  render: () => <TreeViewCollapseAnimationDemo />,
}
