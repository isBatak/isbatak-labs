import { Portal } from "@ark-ui/react/portal"
import { Combobox, useFilter, useListCollection } from "@isbatak/react-ui/combobox"
import { Stack } from "styled-system/jsx"

const frameworks = ["React", "Vue", "Solid", "Svelte", "Angular", "Preact", "Qwik", "Lit"]

export function ComboboxVariantsDemo() {
  const { contains } = useFilter({ sensitivity: "base" })
  const outline = useListCollection({ initialItems: frameworks, filter: contains })
  const subtle = useListCollection({ initialItems: frameworks, filter: contains })
  const plain = useListCollection({ initialItems: frameworks, filter: contains })
  const flushed = useListCollection({ initialItems: frameworks, filter: contains })

  return (
    <Stack gap="5" w="full" maxW="xs">
      <Combobox.Root
        collection={outline.collection}
        onInputValueChange={(details) => outline.filter(details.inputValue)}
        variant="outline"
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
              {outline.collection.items.map((framework) => (
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
        collection={subtle.collection}
        onInputValueChange={(details) => subtle.filter(details.inputValue)}
        variant="subtle"
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
              {subtle.collection.items.map((framework) => (
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
        collection={plain.collection}
        onInputValueChange={(details) => plain.filter(details.inputValue)}
        variant="plain"
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
              {plain.collection.items.map((framework) => (
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
        collection={flushed.collection}
        onInputValueChange={(details) => flushed.filter(details.inputValue)}
        variant="flushed"
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
              {flushed.collection.items.map((framework) => (
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
