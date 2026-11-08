import { Portal } from "@ark-ui/react/portal"
import { Combobox, useFilter, useListCollection } from "@isbatak/react-ui/combobox"
import { Stack } from "styled-system/jsx"

const frameworks = ["React", "Vue", "Solid", "Svelte", "Angular", "Preact", "Qwik", "Lit"]

export function ComboboxSizesDemo() {
  const { contains } = useFilter({ sensitivity: "base" })
  const xs = useListCollection({ initialItems: frameworks, filter: contains })
  const sm = useListCollection({ initialItems: frameworks, filter: contains })
  const md = useListCollection({ initialItems: frameworks, filter: contains })
  const lg = useListCollection({ initialItems: frameworks, filter: contains })

  return (
    <Stack gap="5" w="full" maxW="xs">
      <Combobox.Root
        collection={xs.collection}
        onInputValueChange={(details) => xs.filter(details.inputValue)}
        size="xs"
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
              {xs.collection.items.map((framework) => (
                <Combobox.Item key={framework} item={framework}>
                  <Combobox.ItemText>{framework}</Combobox.ItemText>
                  <Combobox.ItemIndicator />
                </Combobox.Item>
              ))}
            </Combobox.Content>
          </Combobox.Positioner>
        </Portal>
      </Combobox.Root>
      <Combobox.Root
        collection={sm.collection}
        onInputValueChange={(details) => sm.filter(details.inputValue)}
        size="sm"
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
              {sm.collection.items.map((framework) => (
                <Combobox.Item key={framework} item={framework}>
                  <Combobox.ItemText>{framework}</Combobox.ItemText>
                  <Combobox.ItemIndicator />
                </Combobox.Item>
              ))}
            </Combobox.Content>
          </Combobox.Positioner>
        </Portal>
      </Combobox.Root>
      <Combobox.Root
        collection={md.collection}
        onInputValueChange={(details) => md.filter(details.inputValue)}
        size="md"
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
              {md.collection.items.map((framework) => (
                <Combobox.Item key={framework} item={framework}>
                  <Combobox.ItemText>{framework}</Combobox.ItemText>
                  <Combobox.ItemIndicator />
                </Combobox.Item>
              ))}
            </Combobox.Content>
          </Combobox.Positioner>
        </Portal>
      </Combobox.Root>
      <Combobox.Root
        collection={lg.collection}
        onInputValueChange={(details) => lg.filter(details.inputValue)}
        size="lg"
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
              {lg.collection.items.map((framework) => (
                <Combobox.Item key={framework} item={framework}>
                  <Combobox.ItemText>{framework}</Combobox.ItemText>
                  <Combobox.ItemIndicator />
                </Combobox.Item>
              ))}
            </Combobox.Content>
          </Combobox.Positioner>
        </Portal>
      </Combobox.Root>
    </Stack>
  )
}
