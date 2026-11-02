"use client"

import { Icon } from "@isbatak/react-ui/icon"
import { PasswordInput } from "@isbatak/react-ui/password-input"

export function PasswordInputAutocompleteDemo() {
  return (
    <PasswordInput.Root autoComplete="new-password" maxW="xs">
      <PasswordInput.Label>New password</PasswordInput.Label>
      <PasswordInput.Control>
        <PasswordInput.Input placeholder="Choose a password" />
        <PasswordInput.VisibilityTrigger>
          <PasswordInput.Indicator fallback={<Icon name="view-off" />}>
            <Icon name="view" />
          </PasswordInput.Indicator>
        </PasswordInput.VisibilityTrigger>
      </PasswordInput.Control>
    </PasswordInput.Root>
  )
}
