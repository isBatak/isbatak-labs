import type { Meta, StoryObj } from "@storybook/svelte-vite"
import SearchInputDemo from "@isbatak/compositions/ds/svelte/search-input/usage"
import SearchInputControlledDemo from "@isbatak/compositions/ds/svelte/search-input/controlled"
import SearchInputDefaultValueDemo from "@isbatak/compositions/ds/svelte/search-input/default-value"
import SearchInputDisabledDemo from "@isbatak/compositions/ds/svelte/search-input/disabled"
import SearchInputInvalidDemo from "@isbatak/compositions/ds/svelte/search-input/invalid"
import SearchInputRootProviderDemo from "@isbatak/compositions/ds/svelte/search-input/root-provider"
import SearchInputSizesDemo from "@isbatak/compositions/ds/svelte/search-input/sizes"
import SearchInputTranslationsDemo from "@isbatak/compositions/ds/svelte/search-input/translations"
import SearchInputVariantsDemo from "@isbatak/compositions/ds/svelte/search-input/variants"
import SearchInputWithoutIconDemo from "@isbatak/compositions/ds/svelte/search-input/without-icon"
import SearchInputWithoutLabelDemo from "@isbatak/compositions/ds/svelte/search-input/without-label"

const meta = {
  title: "DS/Search Input",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof SearchInputDemo> = {
  render: () => ({ Component: SearchInputDemo }),
}

export const Controlled: StoryObj<typeof SearchInputControlledDemo> = {
  render: () => ({ Component: SearchInputControlledDemo }),
}

export const DefaultValue: StoryObj<typeof SearchInputDefaultValueDemo> = {
  render: () => ({ Component: SearchInputDefaultValueDemo }),
}

export const Disabled: StoryObj<typeof SearchInputDisabledDemo> = {
  render: () => ({ Component: SearchInputDisabledDemo }),
}

export const Invalid: StoryObj<typeof SearchInputInvalidDemo> = {
  render: () => ({ Component: SearchInputInvalidDemo }),
}

export const RootProvider: StoryObj<typeof SearchInputRootProviderDemo> = {
  render: () => ({ Component: SearchInputRootProviderDemo }),
}

export const Sizes: StoryObj<typeof SearchInputSizesDemo> = {
  render: () => ({ Component: SearchInputSizesDemo }),
}

export const Translations: StoryObj<typeof SearchInputTranslationsDemo> = {
  render: () => ({ Component: SearchInputTranslationsDemo }),
}

export const Variants: StoryObj<typeof SearchInputVariantsDemo> = {
  render: () => ({ Component: SearchInputVariantsDemo }),
}

export const WithoutIcon: StoryObj<typeof SearchInputWithoutIconDemo> = {
  render: () => ({ Component: SearchInputWithoutIconDemo }),
}

export const WithoutLabel: StoryObj<typeof SearchInputWithoutLabelDemo> = {
  render: () => ({ Component: SearchInputWithoutLabelDemo }),
}
