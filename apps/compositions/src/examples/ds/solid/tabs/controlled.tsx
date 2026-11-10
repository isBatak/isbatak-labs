import { Stack } from "@isbatak/solid-ui/stack"
import { Tabs } from "@isbatak/solid-ui/tabs"
import { Text } from "@isbatak/solid-ui/text"
import { createSignal } from "solid-js"

export function TabsControlledDemo() {
  const [value, setValue] = createSignal("projects")

  return (
    <Stack gap="4">
      <Tabs.Root value={value()} onValueChange={(details) => setValue(details.value)}>
        <Tabs.List>
          <Tabs.Trigger value="projects">Projects</Tabs.Trigger>
          <Tabs.Trigger value="inbox">Inbox</Tabs.Trigger>
          <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
          <Tabs.Indicator />
        </Tabs.List>
        <Tabs.Content value="projects">Manage your team's projects.</Tabs.Content>
        <Tabs.Content value="inbox">Read the messages sent to you.</Tabs.Content>
        <Tabs.Content value="settings">Change your notification settings.</Tabs.Content>
      </Tabs.Root>
      <Text textStyle="sm" color="fg.muted">
        Selected: {value()}
      </Text>
    </Stack>
  )
}
