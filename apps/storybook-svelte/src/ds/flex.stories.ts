import type { Meta, StoryObj } from "@storybook/svelte-vite"
import FlexDemo from "@isbatak/compositions/ds/svelte/flex/usage"
import FlexAlignDemo from "@isbatak/compositions/ds/svelte/flex/align"
import FlexAutoMarginDemo from "@isbatak/compositions/ds/svelte/flex/auto-margin"
import FlexDirectionDemo from "@isbatak/compositions/ds/svelte/flex/direction"
import FlexInlineDemo from "@isbatak/compositions/ds/svelte/flex/inline"
import FlexJustifyDemo from "@isbatak/compositions/ds/svelte/flex/justify"
import FlexOrderDemo from "@isbatak/compositions/ds/svelte/flex/order"
import FlexWrapDemo from "@isbatak/compositions/ds/svelte/flex/wrap"

const meta = {
  title: "DS/Flex",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof FlexDemo> = {
  render: () => ({ Component: FlexDemo }),
}

export const Align: StoryObj<typeof FlexAlignDemo> = {
  render: () => ({ Component: FlexAlignDemo }),
}

export const AutoMargin: StoryObj<typeof FlexAutoMarginDemo> = {
  render: () => ({ Component: FlexAutoMarginDemo }),
}

export const Direction: StoryObj<typeof FlexDirectionDemo> = {
  render: () => ({ Component: FlexDirectionDemo }),
}

export const Inline: StoryObj<typeof FlexInlineDemo> = {
  render: () => ({ Component: FlexInlineDemo }),
}

export const Justify: StoryObj<typeof FlexJustifyDemo> = {
  render: () => ({ Component: FlexJustifyDemo }),
}

export const Order: StoryObj<typeof FlexOrderDemo> = {
  render: () => ({ Component: FlexOrderDemo }),
}

export const Wrap: StoryObj<typeof FlexWrapDemo> = {
  render: () => ({ Component: FlexWrapDemo }),
}
