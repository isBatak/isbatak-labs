import { Icon } from "@isbatak/solid-ui/icon"
import { PasswordInput } from "@isbatak/solid-ui/password-input"

export function PasswordInputIgnorePasswordManagersDemo() {
  return (
    <PasswordInput.Root ignorePasswordManagers maxW="xs">
      <PasswordInput.Label>API key</PasswordInput.Label>
      <PasswordInput.Control>
        <PasswordInput.Input placeholder="Paste your API key" />
        <PasswordInput.VisibilityTrigger>
          <PasswordInput.Indicator fallback={<Icon name="view-off" />}>
            <Icon name="view" />
          </PasswordInput.Indicator>
        </PasswordInput.VisibilityTrigger>
      </PasswordInput.Control>
    </PasswordInput.Root>
  )
}
