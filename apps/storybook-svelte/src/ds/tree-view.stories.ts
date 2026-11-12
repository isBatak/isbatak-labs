import type { Meta, StoryObj } from "@storybook/svelte-vite"
import TreeViewDemo from "@isbatak/compositions/ds/svelte/tree-view/usage"
import TreeViewSizesDemo from "@isbatak/compositions/ds/svelte/tree-view/sizes"
import TreeViewVariantsDemo from "@isbatak/compositions/ds/svelte/tree-view/variants"
import TreeViewDefaultExpandedDemo from "@isbatak/compositions/ds/svelte/tree-view/default-expanded"
import TreeViewControlledExpansionDemo from "@isbatak/compositions/ds/svelte/tree-view/controlled-expansion"
import TreeViewMultiSelectDemo from "@isbatak/compositions/ds/svelte/tree-view/multi-select"
import TreeViewCheckboxDemo from "@isbatak/compositions/ds/svelte/tree-view/checkbox"
import TreeViewDisabledNodeDemo from "@isbatak/compositions/ds/svelte/tree-view/disabled-node"
import TreeViewExpandCollapseAllDemo from "@isbatak/compositions/ds/svelte/tree-view/expand-collapse-all"
import TreeViewCollapseAnimationDemo from "@isbatak/compositions/ds/svelte/tree-view/collapse-animation"

const meta = {
  title: "DS/Tree view",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof TreeViewDemo> = {
  render: () => ({ Component: TreeViewDemo }),
}

export const Sizes: StoryObj<typeof TreeViewSizesDemo> = {
  render: () => ({ Component: TreeViewSizesDemo }),
}

export const Variants: StoryObj<typeof TreeViewVariantsDemo> = {
  render: () => ({ Component: TreeViewVariantsDemo }),
}

export const DefaultExpanded: StoryObj<typeof TreeViewDefaultExpandedDemo> = {
  render: () => ({ Component: TreeViewDefaultExpandedDemo }),
}

export const ControlledExpansion: StoryObj<typeof TreeViewControlledExpansionDemo> = {
  render: () => ({ Component: TreeViewControlledExpansionDemo }),
}

export const MultiSelect: StoryObj<typeof TreeViewMultiSelectDemo> = {
  render: () => ({ Component: TreeViewMultiSelectDemo }),
}

export const Checkbox: StoryObj<typeof TreeViewCheckboxDemo> = {
  render: () => ({ Component: TreeViewCheckboxDemo }),
}

export const DisabledNode: StoryObj<typeof TreeViewDisabledNodeDemo> = {
  render: () => ({ Component: TreeViewDisabledNodeDemo }),
}

export const ExpandCollapseAll: StoryObj<typeof TreeViewExpandCollapseAllDemo> = {
  render: () => ({ Component: TreeViewExpandCollapseAllDemo }),
}

export const CollapseAnimation: StoryObj<typeof TreeViewCollapseAnimationDemo> = {
  render: () => ({ Component: TreeViewCollapseAnimationDemo }),
}
