import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Drawer } from "@isbatak/react-ui/drawer"
import { Combobox, useFilter, useListCollection } from "@isbatak/react-ui/combobox"

const frameworks = ["React", "Vue", "Solid", "Svelte", "Angular", "Preact", "Qwik", "Lit"]

export function ComboboxDrawerDemo() {
  const { contains } = useFilter({ sensitivity: "base" })
  const { collection, filter } = useListCollection({ initialItems: frameworks, filter: contains })

  return (
    <Drawer.Root placement="bottom">
      <Drawer.Trigger asChild>
        <Button variant="outline">Open drawer</Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Project settings</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body pb="6">
              <Combobox.Root collection={collection} onInputValueChange={(details) => filter(details.inputValue)}>
                <Combobox.Label>Framework</Combobox.Label>
                <Combobox.Control>
                  <Combobox.Input placeholder="Type to search" />
                  <Combobox.IndicatorGroup>
                    <Combobox.ClearTrigger />
                    <Combobox.Trigger />
                  </Combobox.IndicatorGroup>
                </Combobox.Control>
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
              </Combobox.Root>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
