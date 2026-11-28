import { Box } from "@isbatak/solid-ui/box"
import { Tabs } from "@isbatak/solid-ui/tabs"

export function TabsAnimationDemo() {
  return (
    <Tabs.Root defaultValue="1" w="full" maxW="md">
      <Tabs.List>
        <Tabs.Trigger value="1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="2">Tab 2</Tabs.Trigger>
        <Tabs.Indicator />
      </Tabs.List>
      <Box position="relative" minH="48" w="full">
        <Tabs.Content
          value="1"
          position="absolute"
          inset="0"
          _open={{ animationStyle: "scale-fade-in", animationDuration: "slow" }}
          _closed={{ animationStyle: "scale-fade-out", animationDuration: "faster" }}
        >
          Dolore ex esse laboris elit magna esse sunt.
        </Tabs.Content>
        <Tabs.Content
          value="2"
          position="absolute"
          inset="0"
          _open={{ animationStyle: "scale-fade-in", animationDuration: "slow" }}
          _closed={{ animationStyle: "scale-fade-out", animationDuration: "faster" }}
        >
          Pariatur in veniam Lorem est occaecat do magna nisi mollit ipsum sit adipisicing fugiat ex.
        </Tabs.Content>
      </Box>
    </Tabs.Root>
  )
}
