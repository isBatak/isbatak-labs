import type { Meta, StoryObj } from "@storybook/svelte-vite"
import PasswordInputDemo from "@isbatak/compositions/ds/svelte/password-input/usage"
import PasswordInputAutocompleteDemo from "@isbatak/compositions/ds/svelte/password-input/autocomplete"
import PasswordInputControlledDemo from "@isbatak/compositions/ds/svelte/password-input/controlled"
import PasswordInputDefaultVisibleDemo from "@isbatak/compositions/ds/svelte/password-input/default-visible"
import PasswordInputDisabledDemo from "@isbatak/compositions/ds/svelte/password-input/disabled"
import PasswordInputIgnorePasswordManagersDemo from "@isbatak/compositions/ds/svelte/password-input/ignore-password-managers"
import PasswordInputInvalidDemo from "@isbatak/compositions/ds/svelte/password-input/invalid"
import PasswordInputRootProviderDemo from "@isbatak/compositions/ds/svelte/password-input/root-provider"
import PasswordInputSizesDemo from "@isbatak/compositions/ds/svelte/password-input/sizes"
import PasswordInputTranslationsDemo from "@isbatak/compositions/ds/svelte/password-input/translations"
import PasswordInputVariantsDemo from "@isbatak/compositions/ds/svelte/password-input/variants"

const meta = {
  title: "DS/Password Input",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof PasswordInputDemo> = {
  render: () => ({ Component: PasswordInputDemo }),
}

export const Autocomplete: StoryObj<typeof PasswordInputAutocompleteDemo> = {
  render: () => ({ Component: PasswordInputAutocompleteDemo }),
}

export const Controlled: StoryObj<typeof PasswordInputControlledDemo> = {
  render: () => ({ Component: PasswordInputControlledDemo }),
}

export const DefaultVisible: StoryObj<typeof PasswordInputDefaultVisibleDemo> = {
  render: () => ({ Component: PasswordInputDefaultVisibleDemo }),
}

export const Disabled: StoryObj<typeof PasswordInputDisabledDemo> = {
  render: () => ({ Component: PasswordInputDisabledDemo }),
}

export const IgnorePasswordManagers: StoryObj<typeof PasswordInputIgnorePasswordManagersDemo> = {
  render: () => ({ Component: PasswordInputIgnorePasswordManagersDemo }),
}

export const Invalid: StoryObj<typeof PasswordInputInvalidDemo> = {
  render: () => ({ Component: PasswordInputInvalidDemo }),
}

export const RootProvider: StoryObj<typeof PasswordInputRootProviderDemo> = {
  render: () => ({ Component: PasswordInputRootProviderDemo }),
}

export const Sizes: StoryObj<typeof PasswordInputSizesDemo> = {
  render: () => ({ Component: PasswordInputSizesDemo }),
}

export const Translations: StoryObj<typeof PasswordInputTranslationsDemo> = {
  render: () => ({ Component: PasswordInputTranslationsDemo }),
}

export const Variants: StoryObj<typeof PasswordInputVariantsDemo> = {
  render: () => ({ Component: PasswordInputVariantsDemo }),
}
