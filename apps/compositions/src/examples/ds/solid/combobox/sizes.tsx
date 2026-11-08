import { Stack } from "@isbatak/solid-ui/stack"
import { Combobox, useFilter, useListCollection } from "@isbatak/solid-ui/combobox"
import { For } from "solid-js"
import { Portal } from "solid-js/web"

const frameworks = ["React", "Vue", "Solid", "Svelte", "Angular", "Preact", "Qwik", "Lit"]

export function ComboboxSizesDemo() {
  const filters = useFilter({ sensitivity: "base" })
  const xs = useListCollection({ initialItems: frameworks, filter: filters.contains })
  const sm = useListCollection({ initialItems: frameworks, filter: filters.contains })
  const md = useListCollection({ initialItems: frameworks, filter: filters.contains })
  const lg = useListCollection({ initialItems: frameworks, filter: filters.contains })

  return (
    <Stack gap="5" w="full" maxW="xs">
      <Combobox.Root
        collection={xs.collection()}
        size="xs"
        onInputValueChange={(details) => xs.filter(details.inputValue)}
      >
        <Combobox.Label>size xs</Combobox.Label>
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
              <For each={xs.collection().items}>
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
        collection={sm.collection()}
        size="sm"
        onInputValueChange={(details) => sm.filter(details.inputValue)}
      >
        <Combobox.Label>size sm</Combobox.Label>
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
              <For each={sm.collection().items}>
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
        collection={md.collection()}
        size="md"
        onInputValueChange={(details) => md.filter(details.inputValue)}
      >
        <Combobox.Label>size md</Combobox.Label>
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
              <For each={md.collection().items}>
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
        collection={lg.collection()}
        size="lg"
        onInputValueChange={(details) => lg.filter(details.inputValue)}
      >
        <Combobox.Label>size lg</Combobox.Label>
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
              <For each={lg.collection().items}>
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
