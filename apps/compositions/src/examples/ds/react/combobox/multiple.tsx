import { Portal } from "@ark-ui/react/portal"
import { Badge } from "@isbatak/react-ui/badge"
import { Combobox, useFilter, useListCollection } from "@isbatak/react-ui/combobox"
import { useState } from "react"
import { Stack, Wrap } from "styled-system/jsx"

const frameworks = ["React", "Vue", "Solid", "Svelte", "Angular", "Preact", "Qwik", "Lit"]

export function ComboboxMultipleDemo() {
  const [value, setValue] = useState<string[]>([])
  const { contains } = useFilter({ sensitivity: "base" })
  const { collection, filter } = useListCollection({ initialItems: frameworks, filter: contains })

  return (
    <Stack gap="3" w="full" maxW="xs">
      <Wrap gap="2">
        {value.map((framework) => (
          <Badge key={framework}>{framework}</Badge>
        ))}
      </Wrap>
      <Combobox.Root
        collection={collection}
        multiple
        closeOnSelect={false}
        value={value}
        onValueChange={(details) => setValue(details.value)}
        onInputValueChange={(details) => filter(details.inputValue)}
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
              {collection.items.map((framework) => (
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
