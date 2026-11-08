import { Portal } from "@ark-ui/react/portal"
import { Combobox, useFilter, useListCollection } from "@isbatak/react-ui/combobox"

const frameworks = [
  { label: "React", value: "react", group: "Frontend" },
  { label: "Vue", value: "vue", group: "Frontend" },
  { label: "Solid", value: "solid", group: "Frontend" },
  { label: "Svelte", value: "svelte", group: "Frontend" },
  { label: "Django", value: "django", group: "Backend" },
  { label: "Rails", value: "rails", group: "Backend" },
  { label: "Laravel", value: "laravel", group: "Backend" },
  { label: "Phoenix", value: "phoenix", group: "Backend" },
]

export function ComboboxOptionGroupDemo() {
  const { contains } = useFilter({ sensitivity: "base" })
  const { collection, filter } = useListCollection({
    initialItems: frameworks,
    filter: contains,
    groupBy: (item) => item.group,
  })

  return (
    <Combobox.Root collection={collection} onInputValueChange={(details) => filter(details.inputValue)} maxW="xs">
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
            {collection.group().map(([group, items]) => (
              <Combobox.ItemGroup key={group}>
                <Combobox.ItemGroupLabel>{group}</Combobox.ItemGroupLabel>
                {items.map((item) => (
                  <Combobox.Item key={item.value} item={item}>
                    <Combobox.ItemText>{item.label}</Combobox.ItemText>
                    <Combobox.ItemIndicator />
                  </Combobox.Item>
                ))}
              </Combobox.ItemGroup>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  )
}
