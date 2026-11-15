import { Icon } from "@isbatak/react-ui/icon"
import { ToggleGroup } from "@isbatak/react-ui/toggle-group"

export function ToggleGroupDemo() {
  return (
    <ToggleGroup.Root defaultValue={["left"]} aria-label="Text alignment">
      <ToggleGroup.Item value="left" aria-label="Align left">
        <Icon name="align-left" />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="center" aria-label="Align center">
        <Icon name="align-center" />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="right" aria-label="Align right">
        <Icon name="align-right" />
      </ToggleGroup.Item>
      <ToggleGroup.Item value="justify" aria-label="Justify">
        <Icon name="align-justify" />
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  )
}
