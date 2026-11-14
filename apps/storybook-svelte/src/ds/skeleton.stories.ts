import type { Meta, StoryObj } from "@storybook/svelte-vite"
import SkeletonDemo from "@isbatak/compositions/ds/svelte/skeleton/usage"
import SkeletonTextDemo from "@isbatak/compositions/ds/svelte/skeleton/text"
import SkeletonVariantsDemo from "@isbatak/compositions/ds/svelte/skeleton/variants"
import SkeletonWithChildrenDemo from "@isbatak/compositions/ds/svelte/skeleton/with-children"

const meta = {
  title: "DS/Skeleton",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof SkeletonDemo> = {
  render: () => ({ Component: SkeletonDemo }),
}

export const Text: StoryObj<typeof SkeletonTextDemo> = {
  render: () => ({ Component: SkeletonTextDemo }),
}

export const Variants: StoryObj<typeof SkeletonVariantsDemo> = {
  render: () => ({ Component: SkeletonVariantsDemo }),
}

export const WithChildren: StoryObj<typeof SkeletonWithChildrenDemo> = {
  render: () => ({ Component: SkeletonWithChildrenDemo }),
}
