import { Icon } from "@isbatak/solid-ui/icon"
import { PasswordInput } from "@isbatak/solid-ui/password-input"
import { Stack } from "@isbatak/solid-ui/stack"
import { Text } from "@isbatak/solid-ui/text"
import { createSignal } from "solid-js"

export function PasswordInputControlledDemo() {
  const [visible, setVisible] = createSignal(false)

  return (
    <Stack gap="3" w="full" maxW="xs">
      <PasswordInput.Root visible={visible()} onVisibilityChange={(details) => setVisible(details.visible)}>
        <PasswordInput.Label>Password</PasswordInput.Label>
        <PasswordInput.Control>
          <PasswordInput.Input value="boring-but-safe" />
          <PasswordInput.VisibilityTrigger>
            <PasswordInput.Indicator fallback={<Icon name="view-off" />}>
              <Icon name="view" />
            </PasswordInput.Indicator>
          </PasswordInput.VisibilityTrigger>
        </PasswordInput.Control>
      </PasswordInput.Root>
      <Text textStyle="sm" color="fg.muted">
        Password is {visible() ? "visible" : "hidden"}
      </Text>
    </Stack>
  )
}
