<script lang="ts">
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { Sidebar } from "@isbatak/svelte-ui/sidebar"
</script>

<Sidebar.Root aria-label="Main" borderWidth="1px" borderRadius="l3">
  <Sidebar.Section>
    <Sidebar.SectionTitle>Workspace</Sidebar.SectionTitle>
    <Sidebar.SectionContent>
      <Sidebar.NavItem href="#home" aria-current="page">
        <Sidebar.NavItemStartElement>
          <Icon name="home" />
        </Sidebar.NavItemStartElement>
        <Sidebar.NavItemText>Home</Sidebar.NavItemText>
      </Sidebar.NavItem>
      <Sidebar.NavItem href="#inbox">
        <Sidebar.NavItemStartElement>
          <Icon name="mail" />
        </Sidebar.NavItemStartElement>
        <Sidebar.NavItemText>Inbox</Sidebar.NavItemText>
      </Sidebar.NavItem>
      <Sidebar.NavItem href="#projects">
        <Sidebar.NavItemStartElement>
          <Icon name="folder" />
        </Sidebar.NavItemStartElement>
        <Sidebar.NavItemText>Projects</Sidebar.NavItemText>
        <Sidebar.NavItemEndElement>
          <Icon name="chevron-right" />
        </Sidebar.NavItemEndElement>
      </Sidebar.NavItem>
    </Sidebar.SectionContent>
  </Sidebar.Section>
  <Sidebar.Separator />
  <Sidebar.Section>
    <Sidebar.SectionTitle>Account</Sidebar.SectionTitle>
    <Sidebar.SectionContent>
      <Sidebar.NavItem href="#settings">
        <Sidebar.NavItemStartElement>
          <Icon name="settings" />
        </Sidebar.NavItemStartElement>
        <Sidebar.NavItemText>Settings</Sidebar.NavItemText>
      </Sidebar.NavItem>
      <Sidebar.NavItem href="#help">
        <Sidebar.NavItemStartElement>
          <Icon name="help" />
        </Sidebar.NavItemStartElement>
        <Sidebar.NavItemText>Help</Sidebar.NavItemText>
      </Sidebar.NavItem>
    </Sidebar.SectionContent>
  </Sidebar.Section>
</Sidebar.Root>
