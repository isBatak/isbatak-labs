import { Button } from "@isbatak/solid-ui/button"
import { Popover } from "@isbatak/solid-ui/popover"
import { Combobox, useFilter, useListCollection } from "@isbatak/solid-ui/combobox"
import { For } from "solid-js"
import { Portal } from "solid-js/web"

const frameworks = ["React", "Vue", "Solid", "Svelte", "Angular", "Preact", "Qwik", "Lit"]

export function ComboboxPopoverDemo() {
  const filters = useFilter({ sensitivity: "base" })
  const list = useListCollection({ initialItems: frameworks, filter: filters.contains })

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
              <Combobox.Root
                collection={list.collection()}
                onInputValueChange={(details) => list.filter(details.inputValue)}
              >
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
                    <For each={list.collection().items}>
                      {(framework) => (
                        <Combobox.Item item={framework}>
                          <Combobox.ItemText>{framework}</Combobox.ItemText>
                          <Combobox.ItemIndicator />
                        </Combobox.Item>
                      )}
                    </For>
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
