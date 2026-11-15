import { Portal } from "solid-js/web"
import { Icon } from "@isbatak/solid-ui/icon"
import { ToggleGroup } from "@isbatak/solid-ui/toggle-group"
import { Tooltip } from "@isbatak/solid-ui/tooltip"

export function ToggleGroupWithTooltipDemo() {
  return (
    <ToggleGroup.Root defaultValue={["bold"]} multiple aria-label="Text formatting">
      <Tooltip.Root openDelay={300}>
        <Tooltip.Trigger
          asChild={(props) => (
            <ToggleGroup.Item {...props()} value="bold" aria-label="Bold">
              <Icon name="bold" />
            </ToggleGroup.Item>
          )}
        />
        <Portal>
          <Tooltip.Positioner>
            <Tooltip.Content>Bold</Tooltip.Content>
          </Tooltip.Positioner>
        </Portal>
      </Tooltip.Root>
      <Tooltip.Root openDelay={300}>
        <Tooltip.Trigger
          asChild={(props) => (
            <ToggleGroup.Item {...props()} value="italic" aria-label="Italic">
              <Icon name="italic" />
            </ToggleGroup.Item>
          )}
        />
        <Portal>
          <Tooltip.Positioner>
            <Tooltip.Content>Italic</Tooltip.Content>
          </Tooltip.Positioner>
        </Portal>
      </Tooltip.Root>
      <Tooltip.Root openDelay={300}>
        <Tooltip.Trigger
          asChild={(props) => (
            <ToggleGroup.Item {...props()} value="underline" aria-label="Underline">
              <Icon name="underline" />
            </ToggleGroup.Item>
          )}
        />
        <Portal>
          <Tooltip.Positioner>
            <Tooltip.Content>Underline</Tooltip.Content>
          </Tooltip.Positioner>
        </Portal>
      </Tooltip.Root>
    </ToggleGroup.Root>
  )
}
