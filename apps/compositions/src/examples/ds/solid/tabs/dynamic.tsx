import { Button, CloseButton } from "@isbatak/solid-ui/button"
import { Heading } from "@isbatak/solid-ui/heading"
import { Icon } from "@isbatak/solid-ui/icon"
import { Tabs } from "@isbatak/solid-ui/tabs"
import { Text } from "@isbatak/solid-ui/text"
import { createSignal, For } from "solid-js"

interface Item {
  id: string
  title: string
}

const uid = () => Math.random().toString(36).slice(2, 10)

export function TabsDynamicDemo() {
  const [tabs, setTabs] = createSignal<Item[]>([
    { id: "1", title: "Tab" },
    { id: "2", title: "Tab" },
    { id: "3", title: "Tab" },
  ])
  const [selected, setSelected] = createSignal<string | null>("1")

  const addTab = () => {
    const id = uid()
    setTabs((current) => [...current, { id, title: "Tab" }])
    setSelected(id)
  }

  const removeTab = (id: string) => {
    setTabs((current) => (current.length > 1 ? current.filter((tab) => tab.id !== id) : current))
  }

  return (
    <Tabs.Root
      value={selected()}
      onValueChange={(details) => setSelected(details.value)}
      variant="folder"
      size="sm"
      w="full"
    >
      <Tabs.List>
        <For each={tabs()}>
          {(item) => (
            <Tabs.Trigger value={item.id}>
              {item.title}
              <CloseButton
                size="2xs"
                me="-2"
                onClick={(event) => {
                  event.stopPropagation()
                  removeTab(item.id)
                }}
                asChild={(props) => (
                  <span {...props()} role="button" aria-label="Close tab">
                    <Icon name="close" />
                  </span>
                )}
              />
            </Tabs.Trigger>
          )}
        </For>
        <Tabs.Indicator />
        <Button alignSelf="center" ms="2" size="2xs" variant="ghost" onClick={addTab}>
          <Icon name="plus" />
          Add tab
        </Button>
      </Tabs.List>
      <For each={tabs()}>
        {(item) => (
          <Tabs.Content value={item.id}>
            <Heading size="xl" mb="2">
              Tab {item.id}
            </Heading>
            <Text>
              Dolore ex esse laboris elit magna esse sunt. Pariatur in veniam Lorem est occaecat do magna nisi mollit
              ipsum sit adipisicing fugiat ex.
            </Text>
          </Tabs.Content>
        )}
      </For>
    </Tabs.Root>
  )
}
