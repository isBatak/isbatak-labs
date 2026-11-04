import type { Meta, StoryObj } from "@storybook/svelte-vite"
import BoxDemo from "@isbatak/compositions/ds/svelte/box/usage"
import BoxAsChildDemo from "@isbatak/compositions/ds/svelte/box/as-child"
import BoxWithBorderDemo from "@isbatak/compositions/ds/svelte/box/with-border"
import BoxWithHideBelowDemo from "@isbatak/compositions/ds/svelte/box/with-hide-below"
import BoxWithHideFromDemo from "@isbatak/compositions/ds/svelte/box/with-hide-from"
import BoxWithPseudoPropsDemo from "@isbatak/compositions/ds/svelte/box/with-pseudo-props"
import BoxWithShadowDemo from "@isbatak/compositions/ds/svelte/box/with-shadow"

const meta = {
  title: "DS/Box",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof BoxDemo> = {
  render: () => ({ Component: BoxDemo }),
}

export const AsChild: StoryObj<typeof BoxAsChildDemo> = {
  render: () => ({ Component: BoxAsChildDemo }),
}

export const WithBorder: StoryObj<typeof BoxWithBorderDemo> = {
  render: () => ({ Component: BoxWithBorderDemo }),
}

export const WithHideBelow: StoryObj<typeof BoxWithHideBelowDemo> = {
  render: () => ({ Component: BoxWithHideBelowDemo }),
}

export const WithHideFrom: StoryObj<typeof BoxWithHideFromDemo> = {
  render: () => ({ Component: BoxWithHideFromDemo }),
}

export const WithPseudoProps: StoryObj<typeof BoxWithPseudoPropsDemo> = {
  render: () => ({ Component: BoxWithPseudoPropsDemo }),
}

export const WithShadow: StoryObj<typeof BoxWithShadowDemo> = {
  render: () => ({ Component: BoxWithShadowDemo }),
}
