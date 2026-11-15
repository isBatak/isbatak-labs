import { Icon } from "@isbatak/solid-ui/icon"
import { ToggleGroup } from "@isbatak/solid-ui/toggle-group"

export function ToggleGroupMultipleDemo() {
  return (
    <ToggleGroup.Root defaultValue={["bold"]} multiple aria-label="Text formatting">
      <ToggleGroup.Item value="bold" aria-label="Bold">
        <Icon name="bold" />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="italic" aria-label="Italic">
        <Icon name="italic" />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="underline" aria-label="Underline">
        <Icon name="underline" />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  )
}
