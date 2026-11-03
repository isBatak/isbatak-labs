import { Icon } from "@isbatak/react-ui/icon"
import { PasswordInput } from "@isbatak/react-ui/password-input"
import { useState } from "react"
import { Stack, styled } from "styled-system/jsx"

export function PasswordInputControlledDemo() {
  const [visible, setVisible] = useState(false)

  return (
    <Stack gap="3" w="full" maxW="xs">
      <PasswordInput.Root visible={visible} onVisibilityChange={(details) => setVisible(details.visible)}>
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
      <styled.p textStyle="sm" color="fg.muted">
        Password is {visible ? "visible" : "hidden"}
      </styled.p>
    </Stack>
  )
}
