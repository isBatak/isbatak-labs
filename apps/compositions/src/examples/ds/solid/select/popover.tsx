import { Button } from "@isbatak/solid-ui/button"
import { Popover } from "@isbatak/solid-ui/popover"
import { createListCollection, Select } from "@isbatak/solid-ui/select"
import { Portal } from "solid-js/web"

const frameworks = createListCollection({ items: ["React", "Vue", "Solid", "Svelte", "Angular"] })

export function SelectPopoverDemo() {
  return (
    <Popover.Root>
      <Popover.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Open popover
          </Button>
        )}
      />
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Header>
              <Popover.Title>Project settings</Popover.Title>
            </Popover.Header>
            <Popover.Body>
              <Select.Root collection={frameworks}>
                <Select.HiddenSelect />
                <Select.Label>Framework</Select.Label>
                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText placeholder="Select framework" />
                  </Select.Trigger>
                  <Select.IndicatorGroup>
                    <Select.Indicator />
                  </Select.IndicatorGroup>
                </Select.Control>
                <Select.Positioner>
                  <Select.Content>
                    <Select.Item item="React">
                      <Select.ItemText>React</Select.ItemText>
                      <Select.ItemIndicator />
                    </Select.Item>
                    <Select.Item item="Vue">
                      <Select.ItemText>Vue</Select.ItemText>
                      <Select.ItemIndicator />
                    </Select.Item>
                    <Select.Item item="Solid">
                      <Select.ItemText>Solid</Select.ItemText>
                      <Select.ItemIndicator />
                    </Select.Item>
                    <Select.Item item="Svelte">
                      <Select.ItemText>Svelte</Select.ItemText>
                      <Select.ItemIndicator />
                    </Select.Item>
                    <Select.Item item="Angular">
                      <Select.ItemText>Angular</Select.ItemText>
                      <Select.ItemIndicator />
                    </Select.Item>
                  </Select.Content>
                </Select.Positioner>
              </Select.Root>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}
