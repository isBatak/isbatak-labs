import { Icon } from "@isbatak/solid-ui/icon"
import { PasswordInput } from "@isbatak/solid-ui/password-input"
import { Stack } from "@isbatak/solid-ui/stack"

export function PasswordInputVariantsDemo() {
  return (
    <Stack gap="5" w="full" maxW="xs">
      <PasswordInput.Root variant="outline">
        <PasswordInput.Label>variant outline</PasswordInput.Label>
        <PasswordInput.Control>
          <PasswordInput.Input placeholder="Enter your password" />
          <PasswordInput.VisibilityTrigger>
            <PasswordInput.Indicator fallback={<Icon name="view-off" />}>
              <Icon name="view" />
            </PasswordInput.Indicator>
          </PasswordInput.VisibilityTrigger>
        </PasswordInput.Control>
      </PasswordInput.Root>
      <PasswordInput.Root variant="subtle">
        <PasswordInput.Label>variant subtle</PasswordInput.Label>
        <PasswordInput.Control>
          <PasswordInput.Input placeholder="Enter your password" />
          <PasswordInput.VisibilityTrigger>
            <PasswordInput.Indicator fallback={<Icon name="view-off" />}>
              <Icon name="view" />
            </PasswordInput.Indicator>
          </PasswordInput.VisibilityTrigger>
        </PasswordInput.Control>
      </PasswordInput.Root>
      <PasswordInput.Root variant="flushed">
        <PasswordInput.Label>variant flushed</PasswordInput.Label>
        <PasswordInput.Control>
          <PasswordInput.Input placeholder="Enter your password" />
          <PasswordInput.VisibilityTrigger>
            <PasswordInput.Indicator fallback={<Icon name="view-off" />}>
              <Icon name="view" />
            </PasswordInput.Indicator>
          </PasswordInput.VisibilityTrigger>
        </PasswordInput.Control>
      </PasswordInput.Root>
    </Stack>
  )
}
