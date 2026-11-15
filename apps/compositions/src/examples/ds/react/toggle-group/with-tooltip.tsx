import { Portal } from "@ark-ui/react/portal"
import { Icon } from "@isbatak/react-ui/icon"
import { ToggleGroup } from "@isbatak/react-ui/toggle-group"
import { Tooltip } from "@isbatak/react-ui/tooltip"

export function ToggleGroupWithTooltipDemo() {
  return (
    <ToggleGroup.Root defaultValue={["bold"]} multiple aria-label="Text formatting">
      <Tooltip.Root openDelay={300}>
        <Tooltip.Trigger asChild>
          <ToggleGroup.Item value="bold" aria-label="Bold">
            <Icon name="bold" />
          </ToggleGroup.Item>
        </Tooltip.Trigger>
        <Portal>
          <Tooltip.Positioner>
            <Tooltip.Content>Bold</Tooltip.Content>
          </Tooltip.Positioner>
        </Portal>
      </Tooltip.Root>
      <Tooltip.Root openDelay={300}>
        <Tooltip.Trigger asChild>
          <ToggleGroup.Item value="italic" aria-label="Italic">
            <Icon name="italic" />
          </ToggleGroup.Item>
        </Tooltip.Trigger>
        <Portal>
          <Tooltip.Positioner>
            <Tooltip.Content>Italic</Tooltip.Content>
          </Tooltip.Positioner>
        </Portal>
      </Tooltip.Root>
      <Tooltip.Root openDelay={300}>
        <Tooltip.Trigger asChild>
          <ToggleGroup.Item value="underline" aria-label="Underline">
            <Icon name="underline" />
          </ToggleGroup.Item>
        </Tooltip.Trigger>
        <Portal>
          <Tooltip.Positioner>
            <Tooltip.Content>Underline</Tooltip.Content>
          </Tooltip.Positioner>
        </Portal>
      </Tooltip.Root>
    </ToggleGroup.Root>
  )
}
