import type { Meta, StoryObj } from "@storybook/react-vite"
import { SearchInputDemo } from "@isbatak/compositions/ds/react/search-input/usage"
import { SearchInputControlledDemo } from "@isbatak/compositions/ds/react/search-input/controlled"
import { SearchInputDefaultValueDemo } from "@isbatak/compositions/ds/react/search-input/default-value"
import { SearchInputDisabledDemo } from "@isbatak/compositions/ds/react/search-input/disabled"
import { SearchInputInvalidDemo } from "@isbatak/compositions/ds/react/search-input/invalid"
import { SearchInputRootProviderDemo } from "@isbatak/compositions/ds/react/search-input/root-provider"
import { SearchInputSizesDemo } from "@isbatak/compositions/ds/react/search-input/sizes"
import { SearchInputTranslationsDemo } from "@isbatak/compositions/ds/react/search-input/translations"
import { SearchInputVariantsDemo } from "@isbatak/compositions/ds/react/search-input/variants"
import { SearchInputWithoutIconDemo } from "@isbatak/compositions/ds/react/search-input/without-icon"
import { SearchInputWithoutLabelDemo } from "@isbatak/compositions/ds/react/search-input/without-label"

const meta = {
  title: "DS/Search Input",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <SearchInputDemo />,
}

export const Controlled: Story = {
  render: () => <SearchInputControlledDemo />,
}

export const DefaultValue: Story = {
  render: () => <SearchInputDefaultValueDemo />,
}

export const Disabled: Story = {
  render: () => <SearchInputDisabledDemo />,
}

export const Invalid: Story = {
  render: () => <SearchInputInvalidDemo />,
}

export const RootProvider: Story = {
  render: () => <SearchInputRootProviderDemo />,
}

export const Sizes: Story = {
  render: () => <SearchInputSizesDemo />,
}

export const Translations: Story = {
  render: () => <SearchInputTranslationsDemo />,
}

export const Variants: Story = {
  render: () => <SearchInputVariantsDemo />,
}

export const WithoutIcon: Story = {
  render: () => <SearchInputWithoutIconDemo />,
}

export const WithoutLabel: Story = {
  render: () => <SearchInputWithoutLabelDemo />,
}
