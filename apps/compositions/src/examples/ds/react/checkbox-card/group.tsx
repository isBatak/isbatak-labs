import { CheckboxCard } from "@isbatak/react-ui/checkbox-card"
import { Checkbox } from "@isbatak/react-ui/checkbox"

export function CheckboxCardGroupDemo() {
  return (
    <Checkbox.Group defaultValue={["next"]}>
      <CheckboxCard.Root value="next">
        <CheckboxCard.HiddenInput />
        <CheckboxCard.Control>
          <CheckboxCard.Content>
            <CheckboxCard.Label>Next.js</CheckboxCard.Label>
            <CheckboxCard.Description>Best for apps</CheckboxCard.Description>
          </CheckboxCard.Content>
          <CheckboxCard.Indicator />
        </CheckboxCard.Control>
      </CheckboxCard.Root>
      <CheckboxCard.Root value="vite">
        <CheckboxCard.HiddenInput />
        <CheckboxCard.Control>
          <CheckboxCard.Content>
            <CheckboxCard.Label>Vite</CheckboxCard.Label>
            <CheckboxCard.Description>Best for single-page apps</CheckboxCard.Description>
          </CheckboxCard.Content>
          <CheckboxCard.Indicator />
        </CheckboxCard.Control>
      </CheckboxCard.Root>
      <CheckboxCard.Root value="astro">
        <CheckboxCard.HiddenInput />
        <CheckboxCard.Control>
          <CheckboxCard.Content>
            <CheckboxCard.Label>Astro</CheckboxCard.Label>
            <CheckboxCard.Description>Best for static sites</CheckboxCard.Description>
          </CheckboxCard.Content>
          <CheckboxCard.Indicator />
        </CheckboxCard.Control>
      </CheckboxCard.Root>
    </Checkbox.Group>
  )
}
