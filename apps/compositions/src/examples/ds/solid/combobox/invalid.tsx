import { field } from "@isbatak/panda-ds/recipes"
import { Combobox, useFilter, useListCollection } from "@isbatak/solid-ui/combobox"
import { For } from "solid-js"
import { Portal } from "solid-js/web"

const frameworks = ["React", "Vue", "Solid", "Svelte", "Angular", "Preact", "Qwik", "Lit"]

export function ComboboxInvalidDemo() {
  const filters = useFilter({ sensitivity: "base" })
  const list = useListCollection({ initialItems: frameworks, filter: filters.contains })
  const fieldClasses = field()

  return (
    <Combobox.Root
      collection={list.collection()}
      invalid
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
      <span class={fieldClasses.errorText}>Pick the framework your project uses.</span>
    </Combobox.Root>
  )
}
