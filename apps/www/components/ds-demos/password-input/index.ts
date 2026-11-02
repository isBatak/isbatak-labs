import type { ComponentType } from "react"

import { PasswordInputAutocompleteDemo } from "./autocomplete"
import { PasswordInputDemo } from "./basic"
import { PasswordInputControlledDemo } from "./controlled"
import { PasswordInputDefaultVisibleDemo } from "./default-visible"
import { PasswordInputDisabledDemo } from "./disabled"
import { PasswordInputIgnorePasswordManagersDemo } from "./ignore-password-managers"
import { PasswordInputInvalidDemo } from "./invalid"
import { PasswordInputRootProviderDemo } from "./root-provider"
import { PasswordInputSizesDemo } from "./sizes"
import { PasswordInputTranslationsDemo } from "./translations"
import { PasswordInputVariantsDemo } from "./variants"

export const passwordInputDemos: Record<string, ComponentType> = {
  "password-input": PasswordInputDemo,
  "password-input/autocomplete": PasswordInputAutocompleteDemo,
  "password-input/controlled": PasswordInputControlledDemo,
  "password-input/default-visible": PasswordInputDefaultVisibleDemo,
  "password-input/disabled": PasswordInputDisabledDemo,
  "password-input/ignore-password-managers": PasswordInputIgnorePasswordManagersDemo,
  "password-input/invalid": PasswordInputInvalidDemo,
  "password-input/root-provider": PasswordInputRootProviderDemo,
  "password-input/sizes": PasswordInputSizesDemo,
  "password-input/translations": PasswordInputTranslationsDemo,
  "password-input/variants": PasswordInputVariantsDemo,
}
