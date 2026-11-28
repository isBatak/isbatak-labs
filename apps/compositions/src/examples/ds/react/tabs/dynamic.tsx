import { Button, CloseButton } from "@isbatak/react-ui/button"
import { Heading } from "@isbatak/react-ui/heading"
import { EndIcon, Icon, StartIcon } from "@isbatak/react-ui/icon"
import { Tabs } from "@isbatak/react-ui/tabs"
import { Text } from "@isbatak/react-ui/text"
import { useState } from "react"

interface Item {
  id: string
  title: string
}

const uid = () => Math.random().toString(36).slice(2, 10)

export function TabsDynamicDemo() {
  const [tabs, setTabs] = useState<Item[]>([
    { id: "1", title: "Tab" },
    { id: "2", title: "Tab" },
    { id: "3", title: "Tab" },
  ])
  const [selected, setSelected] = useState<string | null>("1")

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
      value={selected}
      onValueChange={(details) => setSelected(details.value)}
      variant="folder"
      size="sm"
      w="full"
    >
      <Tabs.List>
        {tabs.map((item) => (
          <Tabs.Trigger key={item.id} value={item.id}>
            <Tabs.TriggerLabel>{item.title}</Tabs.TriggerLabel>
            <EndIcon>
              <CloseButton
                asChild
                size="2xs"
                onClick={(event) => {
                  event.stopPropagation()
                  removeTab(item.id)
                }}
                aria-label="Close tab"
              >
                <Icon name="close" />
              </CloseButton>
            </EndIcon>
          </Tabs.Trigger>
        ))}
        <Tabs.Indicator />
        <Button alignSelf="center" ms="0.5" size="2xs" variant="ghost" onClick={addTab}>
          <StartIcon asChild>
            <Icon name="plus" />
          </StartIcon>
          Add tab
        </Button>
      </Tabs.List>
      {tabs.map((item) => (
        <Tabs.Content key={item.id} value={item.id}>
          <Heading size="xl" mb="2">
            Tab {item.id}
          </Heading>
          <Text>
            Dolore ex esse laboris elit magna esse sunt. Pariatur in veniam Lorem est occaecat do magna nisi mollit
            ipsum sit adipisicing fugiat ex.
          </Text>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}
