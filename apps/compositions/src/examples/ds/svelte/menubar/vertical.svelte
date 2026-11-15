<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Menu } from "@isbatak/svelte-ui/menu"
  import { Menubar } from "@isbatak/svelte-ui/menubar"
</script>

<Menubar.Root orientation="vertical">
  <Menu.Root positioning={{ placement: "right-start" }}>
    <Menubar.Trigger>Account</Menubar.Trigger>
    <Portal>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value="profile">Profile</Menu.Item>
          <Menu.Item value="billing">Billing</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Portal>
  </Menu.Root>
  <Menu.Root positioning={{ placement: "right-start" }}>
    <Menubar.Trigger>Workspace</Menubar.Trigger>
    <Portal>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value="members">Members</Menu.Item>
          <Menu.Item value="integrations">Integrations</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Portal>
  </Menu.Root>
  <Menu.Root positioning={{ placement: "right-start" }}>
    <Menubar.Trigger>Help</Menubar.Trigger>
    <Portal>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value="docs">Documentation</Menu.Item>
          <Menu.Item value="support">Contact Support</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Portal>
  </Menu.Root>
</Menubar.Root>
