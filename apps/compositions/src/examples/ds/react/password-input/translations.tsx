import { Icon } from "@isbatak/react-ui/icon"
import { PasswordInput } from "@isbatak/react-ui/password-input"

export function PasswordInputTranslationsDemo() {
  return (
    <PasswordInput.Root
      translations={{ visibilityTrigger: (visible) => (visible ? "Passwort verbergen" : "Passwort anzeigen") }}
      maxW="xs"
    >
      <PasswordInput.Label>Passwort</PasswordInput.Label>
      <PasswordInput.Control>
        <PasswordInput.Input placeholder="Passwort eingeben" />
        <PasswordInput.VisibilityTrigger>
          <PasswordInput.Indicator fallback={<Icon name="view-off" />}>
            <Icon name="view" />
          </PasswordInput.Indicator>
        </PasswordInput.VisibilityTrigger>
      </PasswordInput.Control>
    </PasswordInput.Root>
  )
}
