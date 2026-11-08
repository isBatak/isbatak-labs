import { Stack } from "@isbatak/solid-ui/stack"
import { Combobox, useFilter, useListCollection } from "@isbatak/solid-ui/combobox"
import { For } from "solid-js"
import { Portal } from "solid-js/web"

const frameworks = ["React", "Vue", "Solid", "Svelte", "Angular", "Preact", "Qwik", "Lit"]

export function ComboboxVariantsDemo() {
  const filters = useFilter({ sensitivity: "base" })
  const outline = useListCollection({ initialItems: frameworks, filter: filters.contains })
  const subtle = useListCollection({ initialItems: frameworks, filter: filters.contains })
  const plain = useListCollection({ initialItems: frameworks, filter: filters.contains })
  const flushed = useListCollection({ initialItems: frameworks, filter: filters.contains })

  return (
    <Stack gap="5" w="full" maxW="xs">
      <Combobox.Root
        collection={outline.collection()}
        variant="outline"
        onInputValueChange={(details) => outline.filter(details.inputValue)}
      >
        <Combobox.Label>variant outline</Combobox.Label>
        <Combobox.Control>
          <Combobox.Input placeholder="Type to search" />
          <Combobox.IndicatorGroup>
            <Combobox.ClearTrigger />
            <Combobox.Trigger />
          </Combobox.IndicatorGroup>
        </Combobox.Control>
        <Portal>
          <Combobox.Positioner>
            <Combobox.Content>
              <Combobox.Empty>No frameworks found</Combobox.Empty>
              <For each={outline.collection().items}>
                {(framework) => (
                  <Combobox.Item item={framework}>
                    <Combobox.ItemText>{framework}</Combobox.ItemText>
                    <Combobox.ItemIndicator />
                  </Combobox.Item>
                )}
              </For>
            </Combobox.Content>
          </Combobox.Positioner>
        </Portal>
      </Combobox.Root>
      <Combobox.Root
        collection={subtle.collection()}
        variant="subtle"
        onInputValueChange={(details) => subtle.filter(details.inputValue)}
      >
        <Combobox.Label>variant subtle</Combobox.Label>
        <Combobox.Control>
          <Combobox.Input placeholder="Type to search" />
          <Combobox.IndicatorGroup>
            <Combobox.ClearTrigger />
            <Combobox.Trigger />
          </Combobox.IndicatorGroup>
        </Combobox.Control>
        <Portal>
          <Combobox.Positioner>
            <Combobox.Content>
              <Combobox.Empty>No frameworks found</Combobox.Empty>
              <For each={subtle.collection().items}>
                {(framework) => (
                  <Combobox.Item item={framework}>
                    <Combobox.ItemText>{framework}</Combobox.ItemText>
                    <Combobox.ItemIndicator />
                  </Combobox.Item>
                )}
              </For>
            </Combobox.Content>
          </Combobox.Positioner>
        </Portal>
      </Combobox.Root>
      <Combobox.Root
        collection={plain.collection()}
        variant="plain"
        onInputValueChange={(details) => plain.filter(details.inputValue)}
      >
        <Combobox.Label>variant plain</Combobox.Label>
        <Combobox.Control>
          <Combobox.Input placeholder="Type to search" />
          <Combobox.IndicatorGroup>
            <Combobox.ClearTrigger />
            <Combobox.Trigger />
          </Combobox.IndicatorGroup>
        </Combobox.Control>
        <Portal>
          <Combobox.Positioner>
            <Combobox.Content>
              <Combobox.Empty>No frameworks found</Combobox.Empty>
              <For each={plain.collection().items}>
                {(framework) => (
                  <Combobox.Item item={framework}>
                    <Combobox.ItemText>{framework}</Combobox.ItemText>
                    <Combobox.ItemIndicator />
                  </Combobox.Item>
                )}
              </For>
            </Combobox.Content>
          </Combobox.Positioner>
        </Portal>
      </Combobox.Root>
      <Combobox.Root
        collection={flushed.collection()}
        variant="flushed"
        onInputValueChange={(details) => flushed.filter(details.inputValue)}
      >
        <Combobox.Label>variant flushed</Combobox.Label>
        <Combobox.Control>
          <Combobox.Input placeholder="Type to search" />
          <Combobox.IndicatorGroup>
            <Combobox.ClearTrigger />
            <Combobox.Trigger />
          </Combobox.IndicatorGroup>
        </Combobox.Control>
        <Portal>
          <Combobox.Positioner>
            <Combobox.Content>
              <Combobox.Empty>No frameworks found</Combobox.Empty>
              <For each={flushed.collection().items}>
                {(framework) => (
                  <Combobox.Item item={framework}>
                    <Combobox.ItemText>{framework}</Combobox.ItemText>
                    <Combobox.ItemIndicator />
                  </Combobox.Item>
                )}
              </For>
            </Combobox.Content>
          </Combobox.Positioner>
        </Portal>
      </Combobox.Root>
    </Stack>
  )
}
