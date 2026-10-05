import { Tabs } from "@isbatak/react-ui/tabs"

import { Section, Stack } from "../canvas/layout"
import type { SampleProps } from "./types"

export function TabsSample(props: SampleProps) {
  return (
    <Tabs.Root defaultValue="account" {...props}>
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password">Password</Tabs.Trigger>
        <Tabs.Trigger value="billing">Billing</Tabs.Trigger>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Content value="account">Make changes to your account.</Tabs.Content>
      <Tabs.Content value="password">Change your password.</Tabs.Content>
      <Tabs.Content value="billing">Manage your billing.</Tabs.Content>
    </Tabs.Root>
  )
}

export function TabsDemo() {
  return (
    <>
      <Section title="Basic">
        <TabsSample />
      </Section>
      <Section title="Variants">
        <Stack gap="8">
          <TabsSample variant="line" />
          <TabsSample variant="subtle" />
          <TabsSample variant="enclosed" />
          <TabsSample variant="outline" />
        </Stack>
      </Section>
    </>
  )
}
