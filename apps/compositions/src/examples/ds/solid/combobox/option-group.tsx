import { Combobox, useFilter, useListCollection } from "@isbatak/solid-ui/combobox"
import { For } from "solid-js"
import { Portal } from "solid-js/web"

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
  const filters = useFilter({ sensitivity: "base" })
  const list = useListCollection({ initialItems: frameworks, filter: filters.contains, groupBy: (item) => item.group })

  return (
    <Combobox.Root
      collection={list.collection()}
      maxW="xs"
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
            <For each={list.collection().group()}>
              {([group, groupItems]) => (
                <Combobox.ItemGroup>
                  <Combobox.ItemGroupLabel>{group}</Combobox.ItemGroupLabel>
                  <For each={groupItems}>
                    {(item) => (
                      <Combobox.Item item={item}>
                        <Combobox.ItemText>{item.label}</Combobox.ItemText>
                        <Combobox.ItemIndicator />
                      </Combobox.Item>
                    )}
                  </For>
                </Combobox.ItemGroup>
              )}
            </For>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  )
}
