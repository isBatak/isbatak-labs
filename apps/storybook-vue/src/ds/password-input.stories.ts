import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import PasswordInputDemo from "@isbatak/compositions/ds/vue/password-input/usage"
import PasswordInputAutocompleteDemo from "@isbatak/compositions/ds/vue/password-input/autocomplete"
import PasswordInputControlledDemo from "@isbatak/compositions/ds/vue/password-input/controlled"
import PasswordInputDefaultVisibleDemo from "@isbatak/compositions/ds/vue/password-input/default-visible"
import PasswordInputDisabledDemo from "@isbatak/compositions/ds/vue/password-input/disabled"
import PasswordInputIgnorePasswordManagersDemo from "@isbatak/compositions/ds/vue/password-input/ignore-password-managers"
import PasswordInputInvalidDemo from "@isbatak/compositions/ds/vue/password-input/invalid"
import PasswordInputRootProviderDemo from "@isbatak/compositions/ds/vue/password-input/root-provider"
import PasswordInputSizesDemo from "@isbatak/compositions/ds/vue/password-input/sizes"
import PasswordInputTranslationsDemo from "@isbatak/compositions/ds/vue/password-input/translations"
import PasswordInputVariantsDemo from "@isbatak/compositions/ds/vue/password-input/variants"

const meta = {
  title: "DS/Password Input",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(PasswordInputDemo) }),
}

export const Autocomplete: Story = {
  render: () => ({ setup: () => () => h(PasswordInputAutocompleteDemo) }),
}

export const Controlled: Story = {
  render: () => ({ setup: () => () => h(PasswordInputControlledDemo) }),
}

export const DefaultVisible: Story = {
  render: () => ({ setup: () => () => h(PasswordInputDefaultVisibleDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(PasswordInputDisabledDemo) }),
}

export const IgnorePasswordManagers: Story = {
  render: () => ({ setup: () => () => h(PasswordInputIgnorePasswordManagersDemo) }),
}

export const Invalid: Story = {
  render: () => ({ setup: () => () => h(PasswordInputInvalidDemo) }),
}

export const RootProvider: Story = {
  render: () => ({ setup: () => () => h(PasswordInputRootProviderDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(PasswordInputSizesDemo) }),
}

export const Translations: Story = {
  render: () => ({ setup: () => () => h(PasswordInputTranslationsDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(PasswordInputVariantsDemo) }),
}
