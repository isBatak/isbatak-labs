import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import SearchInputDemo from "@isbatak/compositions/ds/vue/search-input/usage"
import SearchInputControlledDemo from "@isbatak/compositions/ds/vue/search-input/controlled"
import SearchInputDefaultValueDemo from "@isbatak/compositions/ds/vue/search-input/default-value"
import SearchInputDisabledDemo from "@isbatak/compositions/ds/vue/search-input/disabled"
import SearchInputInvalidDemo from "@isbatak/compositions/ds/vue/search-input/invalid"
import SearchInputRootProviderDemo from "@isbatak/compositions/ds/vue/search-input/root-provider"
import SearchInputSizesDemo from "@isbatak/compositions/ds/vue/search-input/sizes"
import SearchInputTranslationsDemo from "@isbatak/compositions/ds/vue/search-input/translations"
import SearchInputVariantsDemo from "@isbatak/compositions/ds/vue/search-input/variants"
import SearchInputWithoutIconDemo from "@isbatak/compositions/ds/vue/search-input/without-icon"
import SearchInputWithoutLabelDemo from "@isbatak/compositions/ds/vue/search-input/without-label"

const meta = {
  title: "DS/Search Input",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(SearchInputDemo) }),
}

export const Controlled: Story = {
  render: () => ({ setup: () => () => h(SearchInputControlledDemo) }),
}

export const DefaultValue: Story = {
  render: () => ({ setup: () => () => h(SearchInputDefaultValueDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(SearchInputDisabledDemo) }),
}

export const Invalid: Story = {
  render: () => ({ setup: () => () => h(SearchInputInvalidDemo) }),
}

export const RootProvider: Story = {
  render: () => ({ setup: () => () => h(SearchInputRootProviderDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(SearchInputSizesDemo) }),
}

export const Translations: Story = {
  render: () => ({ setup: () => () => h(SearchInputTranslationsDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(SearchInputVariantsDemo) }),
}

export const WithoutIcon: Story = {
  render: () => ({ setup: () => () => h(SearchInputWithoutIconDemo) }),
}

export const WithoutLabel: Story = {
  render: () => ({ setup: () => () => h(SearchInputWithoutLabelDemo) }),
}
