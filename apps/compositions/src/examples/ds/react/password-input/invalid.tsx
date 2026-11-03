import { field } from "@isbatak/panda-ds/recipes"
import { Icon } from "@isbatak/react-ui/icon"
import { PasswordInput } from "@isbatak/react-ui/password-input"

export function PasswordInputInvalidDemo() {
  const fieldClasses = field()

  return (
    <PasswordInput.Root invalid maxW="xs">
      <PasswordInput.Label>Password</PasswordInput.Label>
      <PasswordInput.Control>
        <PasswordInput.Input defaultValue="short" />
        <PasswordInput.VisibilityTrigger>
          <PasswordInput.Indicator fallback={<Icon name="view-off" />}>
            <Icon name="view" />
          </PasswordInput.Indicator>
        </PasswordInput.VisibilityTrigger>
      </PasswordInput.Control>
      <span className={fieldClasses.errorText}>Use at least 8 characters.</span>
    </PasswordInput.Root>
  )
}
