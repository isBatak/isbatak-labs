import { Tabs } from "@isbatak/react-ui/tabs"
import { tabs } from "@isbatak/panda-ds/recipes"
import { defineComponentMatrix } from "../component-matrix/define-component-matrix"

export const tabsMatrix = defineComponentMatrix({
  recipe: tabs,
  render: (props) => (
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
  ),
})
