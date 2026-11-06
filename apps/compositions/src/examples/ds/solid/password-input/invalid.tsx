import { Icon } from "@isbatak/solid-ui/icon"
import { PasswordInput } from "@isbatak/solid-ui/password-input"
import { field } from "@isbatak/panda-ds/recipes"

export function PasswordInputInvalidDemo() {
  const fieldClasses = field()

  return (
    <PasswordInput.Root invalid maxW="xs">
      <PasswordInput.Label>Password</PasswordInput.Label>
      <PasswordInput.Control>
        <PasswordInput.Input value="short" />
        <PasswordInput.VisibilityTrigger>
          <PasswordInput.Indicator fallback={<Icon name="view-off" />}>
            <Icon name="view" />
          </PasswordInput.Indicator>
        </PasswordInput.VisibilityTrigger>
      </PasswordInput.Control>
      <span class={fieldClasses.errorText}>Use at least 8 characters.</span>
    </PasswordInput.Root>
  )
}
