"use client"

import { Tabs } from "@isbatak/react-ui/tabs"

export function TabsDemo() {
  return (
    <Tabs.Root defaultValue="account" variant="line" width="full" maxW="sm">
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password">Password</Tabs.Trigger>
        <Tabs.Trigger value="billing">Billing</Tabs.Trigger>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Content value="account">Change your name and email.</Tabs.Content>
      <Tabs.Content value="password">Update your password.</Tabs.Content>
      <Tabs.Content value="billing">Manage your plan and invoices.</Tabs.Content>
    </Tabs.Root>
  )
}
