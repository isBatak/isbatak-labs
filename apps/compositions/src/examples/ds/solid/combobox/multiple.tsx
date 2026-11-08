import { Badge } from "@isbatak/solid-ui/badge"
import { Stack } from "@isbatak/solid-ui/stack"
import { Wrap } from "@isbatak/solid-ui/wrap"
import { Combobox, useFilter, useListCollection } from "@isbatak/solid-ui/combobox"
import { For, createSignal } from "solid-js"
import { Portal } from "solid-js/web"

const frameworks = ["React", "Vue", "Solid", "Svelte", "Angular", "Preact", "Qwik", "Lit"]

export function ComboboxMultipleDemo() {
  const [value, setValue] = createSignal<string[]>([])
  const filters = useFilter({ sensitivity: "base" })
  const list = useListCollection({ initialItems: frameworks, filter: filters.contains })

  return (
    <Stack gap="3" w="full" maxW="xs">
      <Wrap gap="2">
        <For each={value()}>{(framework) => <Badge>{framework}</Badge>}</For>
      </Wrap>
      <Combobox.Root
        collection={list.collection()}
        multiple
        closeOnSelect={false}
        value={value()}
        onValueChange={(details) => setValue(details.value)}
        onInputValueChange={(details) => list.filter(details.inputValue)}
      >
        <Combobox.Label>Frameworks</Combobox.Label>
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
        </Portal>
      </Combobox.Root>
    </Stack>
  )
}
