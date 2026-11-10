import type { Meta, StoryObj } from "@storybook/svelte-vite"
import SplitterDemo from "@isbatak/compositions/ds/svelte/splitter/usage"
import SplitterVerticalDemo from "@isbatak/compositions/ds/svelte/splitter/vertical"
import SplitterMultiplePanelsDemo from "@isbatak/compositions/ds/svelte/splitter/multiple-panels"
import SplitterMinMaxSizeDemo from "@isbatak/compositions/ds/svelte/splitter/min-max-size"
import SplitterCollapsibleDemo from "@isbatak/compositions/ds/svelte/splitter/collapsible"
import SplitterNestedDemo from "@isbatak/compositions/ds/svelte/splitter/nested"
import SplitterControlledDemo from "@isbatak/compositions/ds/svelte/splitter/controlled"
import SplitterDisabledDemo from "@isbatak/compositions/ds/svelte/splitter/disabled"

const meta = {
  title: "DS/Splitter",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof SplitterDemo> = {
  render: () => ({ Component: SplitterDemo }),
}

export const Vertical: StoryObj<typeof SplitterVerticalDemo> = {
  render: () => ({ Component: SplitterVerticalDemo }),
}

export const MultiplePanels: StoryObj<typeof SplitterMultiplePanelsDemo> = {
  render: () => ({ Component: SplitterMultiplePanelsDemo }),
}

export const MinMaxSize: StoryObj<typeof SplitterMinMaxSizeDemo> = {
  render: () => ({ Component: SplitterMinMaxSizeDemo }),
}

export const Collapsible: StoryObj<typeof SplitterCollapsibleDemo> = {
  render: () => ({ Component: SplitterCollapsibleDemo }),
}

export const Nested: StoryObj<typeof SplitterNestedDemo> = {
  render: () => ({ Component: SplitterNestedDemo }),
}

export const Controlled: StoryObj<typeof SplitterControlledDemo> = {
  render: () => ({ Component: SplitterControlledDemo }),
}

export const Disabled: StoryObj<typeof SplitterDisabledDemo> = {
  render: () => ({ Component: SplitterDisabledDemo }),
}
