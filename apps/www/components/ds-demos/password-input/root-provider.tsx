"use client"

import { Button } from "@isbatak/react-ui/button"
import { Icon } from "@isbatak/react-ui/icon"
import { PasswordInput, usePasswordInput } from "@isbatak/react-ui/password-input"
import { Stack } from "styled-system/jsx"

export function PasswordInputRootProviderDemo() {
  const passwordInput = usePasswordInput()

  return (
    <Stack gap="3" w="full" maxW="xs" alignItems="flex-start">
      <Button variant="outline" size="sm" onClick={() => passwordInput.toggleVisible()}>
        {passwordInput.visible ? "Hide" : "Show"} password
      </Button>
      <PasswordInput.RootProvider value={passwordInput}>
        <PasswordInput.Label>Password</PasswordInput.Label>
        <PasswordInput.Control>
          <PasswordInput.Input defaultValue="boring-but-safe" />
          <PasswordInput.VisibilityTrigger>
            <PasswordInput.Indicator fallback={<Icon name="view-off" />}>
              <Icon name="view" />
            </PasswordInput.Indicator>
          </PasswordInput.VisibilityTrigger>
        </PasswordInput.Control>
      </PasswordInput.RootProvider>
    </Stack>
  )
}
