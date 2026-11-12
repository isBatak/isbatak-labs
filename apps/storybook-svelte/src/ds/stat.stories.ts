import type { Meta, StoryObj } from "@storybook/svelte-vite"
import StatDemo from "@isbatak/compositions/ds/svelte/stat/usage"
import StatSizesDemo from "@isbatak/compositions/ds/svelte/stat/sizes"
import StatWithIndicatorDemo from "@isbatak/compositions/ds/svelte/stat/with-indicator"
import StatWithTrendDemo from "@isbatak/compositions/ds/svelte/stat/with-trend"
import StatWithValueUnitDemo from "@isbatak/compositions/ds/svelte/stat/with-value-unit"
import StatWithGroupDemo from "@isbatak/compositions/ds/svelte/stat/with-group"
import StatWithIconDemo from "@isbatak/compositions/ds/svelte/stat/with-icon"
import StatCardDemo from "@isbatak/compositions/ds/svelte/stat/card"

const meta = {
  title: "DS/Stat",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof StatDemo> = {
  render: () => ({ Component: StatDemo }),
}

export const Sizes: StoryObj<typeof StatSizesDemo> = {
  render: () => ({ Component: StatSizesDemo }),
}

export const WithIndicator: StoryObj<typeof StatWithIndicatorDemo> = {
  render: () => ({ Component: StatWithIndicatorDemo }),
}

export const WithTrend: StoryObj<typeof StatWithTrendDemo> = {
  render: () => ({ Component: StatWithTrendDemo }),
}

export const WithValueUnit: StoryObj<typeof StatWithValueUnitDemo> = {
  render: () => ({ Component: StatWithValueUnitDemo }),
}

export const WithGroup: StoryObj<typeof StatWithGroupDemo> = {
  render: () => ({ Component: StatWithGroupDemo }),
}

export const WithIcon: StoryObj<typeof StatWithIconDemo> = {
  render: () => ({ Component: StatWithIconDemo }),
}

export const Card: StoryObj<typeof StatCardDemo> = {
  render: () => ({ Component: StatCardDemo }),
}
