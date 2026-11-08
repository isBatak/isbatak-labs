import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Combobox, useFilter, useListCollection } from "@isbatak/react-ui/combobox"
import { Popover } from "@isbatak/react-ui/popover"

const frameworks = ["React", "Vue", "Solid", "Svelte", "Angular", "Preact", "Qwik", "Lit"]

export function ComboboxPopoverDemo() {
  const { contains } = useFilter({ sensitivity: "base" })
  const { collection, filter } = useListCollection({ initialItems: frameworks, filter: contains })

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="outline">Open popover</Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Header>
              <Popover.Title>Project settings</Popover.Title>
            </Popover.Header>
            <Popover.Body>
              <Combobox.Root collection={collection} onInputValueChange={(details) => filter(details.inputValue)}>
                <Combobox.Label>Framework</Combobox.Label>
                <Combobox.Control>
                  <Combobox.Input placeholder="Type to search" />
                  <Combobox.IndicatorGroup>
                    <Combobox.ClearTrigger />
                    <Combobox.Trigger />
                  </Combobox.IndicatorGroup>
                </Combobox.Control>
                <Combobox.Positioner>
                  <Combobox.Content>
                    <Combobox.Empty>No frameworks found</Combobox.Empty>
                    {collection.items.map((framework) => (
                      <Combobox.Item key={framework} item={framework}>
                        <Combobox.ItemText>{framework}</Combobox.ItemText>
                        <Combobox.ItemIndicator />
                      </Combobox.Item>
                    ))}
                  </Combobox.Content>
                </Combobox.Positioner>
              </Combobox.Root>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}
