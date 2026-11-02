"use client"

import { Icon } from "@isbatak/react-ui/icon"
import { PasswordInput } from "@isbatak/react-ui/password-input"

export function PasswordInputDisabledDemo() {
  return (
    <PasswordInput.Root disabled maxW="xs">
      <PasswordInput.Label>Password</PasswordInput.Label>
      <PasswordInput.Control>
        <PasswordInput.Input defaultValue="boring-but-safe" />
        <PasswordInput.VisibilityTrigger>
          <PasswordInput.Indicator fallback={<Icon name="view-off" />}>
            <Icon name="view" />
          </PasswordInput.Indicator>
        </PasswordInput.VisibilityTrigger>
      </PasswordInput.Control>
    </PasswordInput.Root>
  )
}
