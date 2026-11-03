import type { Meta, StoryObj } from "@storybook/react-vite"
import { PasswordInputDemo } from "@isbatak/compositions/ds/react/password-input/usage"
import { PasswordInputAutocompleteDemo } from "@isbatak/compositions/ds/react/password-input/autocomplete"
import { PasswordInputControlledDemo } from "@isbatak/compositions/ds/react/password-input/controlled"
import { PasswordInputDefaultVisibleDemo } from "@isbatak/compositions/ds/react/password-input/default-visible"
import { PasswordInputDisabledDemo } from "@isbatak/compositions/ds/react/password-input/disabled"
import { PasswordInputIgnorePasswordManagersDemo } from "@isbatak/compositions/ds/react/password-input/ignore-password-managers"
import { PasswordInputInvalidDemo } from "@isbatak/compositions/ds/react/password-input/invalid"
import { PasswordInputRootProviderDemo } from "@isbatak/compositions/ds/react/password-input/root-provider"
import { PasswordInputSizesDemo } from "@isbatak/compositions/ds/react/password-input/sizes"
import { PasswordInputTranslationsDemo } from "@isbatak/compositions/ds/react/password-input/translations"
import { PasswordInputVariantsDemo } from "@isbatak/compositions/ds/react/password-input/variants"

const meta = {
  title: "DS/Password Input",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <PasswordInputDemo />,
}

export const Autocomplete: Story = {
  render: () => <PasswordInputAutocompleteDemo />,
}

export const Controlled: Story = {
  render: () => <PasswordInputControlledDemo />,
}

export const DefaultVisible: Story = {
  render: () => <PasswordInputDefaultVisibleDemo />,
}

export const Disabled: Story = {
  render: () => <PasswordInputDisabledDemo />,
}

export const IgnorePasswordManagers: Story = {
  render: () => <PasswordInputIgnorePasswordManagersDemo />,
}

export const Invalid: Story = {
  render: () => <PasswordInputInvalidDemo />,
}

export const RootProvider: Story = {
  render: () => <PasswordInputRootProviderDemo />,
}

export const Sizes: Story = {
  render: () => <PasswordInputSizesDemo />,
}

export const Translations: Story = {
  render: () => <PasswordInputTranslationsDemo />,
}

export const Variants: Story = {
  render: () => <PasswordInputVariantsDemo />,
}
