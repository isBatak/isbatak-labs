import { Stack } from "@isbatak/solid-ui/stack"
import { Text } from "@isbatak/solid-ui/text"
import { Combobox, useFilter, useListCollection } from "@isbatak/solid-ui/combobox"
import { For, createSignal } from "solid-js"
import { Portal } from "solid-js/web"

const frameworks = ["React", "Vue", "Solid", "Svelte", "Angular", "Preact", "Qwik", "Lit"]

export function ComboboxControlledDemo() {
  const [value, setValue] = createSignal<string[]>(["Vue"])
  const filters = useFilter({ sensitivity: "base" })
  const list = useListCollection({ initialItems: frameworks, filter: filters.contains })

  return (
    <Stack gap="3" w="full" maxW="xs">
      <Combobox.Root
        collection={list.collection()}
        value={value()}
        onValueChange={(details) => setValue(details.value)}
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
      <Text textStyle="sm" color="fg.muted">
        Selected: {value().length > 0 ? value().join(", ") : "none"}
      </Text>
    </Stack>
  )
}
