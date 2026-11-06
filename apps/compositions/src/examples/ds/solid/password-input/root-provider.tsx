import { Button } from "@isbatak/solid-ui/button"
import { Icon } from "@isbatak/solid-ui/icon"
import { PasswordInput, usePasswordInput } from "@isbatak/solid-ui/password-input"
import { Stack } from "@isbatak/solid-ui/stack"

export function PasswordInputRootProviderDemo() {
  const passwordInput = usePasswordInput()

  return (
    <Stack gap="3" w="full" maxW="xs" alignItems="flex-start">
      <Button variant="outline" size="sm" onClick={() => passwordInput().toggleVisible()}>
        {passwordInput().visible ? "Hide" : "Show"} password
      </Button>
      <PasswordInput.RootProvider value={passwordInput}>
        <PasswordInput.Label>Password</PasswordInput.Label>
        <PasswordInput.Control>
          <PasswordInput.Input value="boring-but-safe" />
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
