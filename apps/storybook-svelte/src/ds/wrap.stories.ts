import type { Meta, StoryObj } from "@storybook/svelte-vite"
import WrapDemo from "@isbatak/compositions/ds/svelte/wrap/usage"
import WrapAlignDemo from "@isbatak/compositions/ds/svelte/wrap/align"
import WrapGapDemo from "@isbatak/compositions/ds/svelte/wrap/gap"
import WrapJustifyDemo from "@isbatak/compositions/ds/svelte/wrap/justify"
import WrapResponsiveDemo from "@isbatak/compositions/ds/svelte/wrap/responsive"
import WrapRowColumnGapDemo from "@isbatak/compositions/ds/svelte/wrap/row-column-gap"
import WrapWrapItemDemo from "@isbatak/compositions/ds/svelte/wrap/wrap-item"

const meta = {
  title: "DS/Wrap",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof WrapDemo> = {
  render: () => ({ Component: WrapDemo }),
}

export const Align: StoryObj<typeof WrapAlignDemo> = {
  render: () => ({ Component: WrapAlignDemo }),
}

export const Gap: StoryObj<typeof WrapGapDemo> = {
  render: () => ({ Component: WrapGapDemo }),
}

export const Justify: StoryObj<typeof WrapJustifyDemo> = {
  render: () => ({ Component: WrapJustifyDemo }),
}

export const Responsive: StoryObj<typeof WrapResponsiveDemo> = {
  render: () => ({ Component: WrapResponsiveDemo }),
}

export const RowColumnGap: StoryObj<typeof WrapRowColumnGapDemo> = {
  render: () => ({ Component: WrapRowColumnGapDemo }),
}

export const WrapItem: StoryObj<typeof WrapWrapItemDemo> = {
  render: () => ({ Component: WrapWrapItemDemo }),
}
