import { Icon } from "@isbatak/solid-ui/icon"
import { Sidebar } from "@isbatak/solid-ui/sidebar"
import { HStack } from "@isbatak/solid-ui/stack"

export function SidebarSizesDemo() {
  return (
    <HStack gap="6" alignItems="flex-start" flexWrap="wrap">
      <Sidebar.Root size="sm" aria-label="Small" borderWidth="1px" borderRadius="l3">
        <Sidebar.Section>
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
            <Sidebar.NavItem href="#settings">
              <Sidebar.NavItemStartElement>
                <Icon name="settings" />
              </Sidebar.NavItemStartElement>
              <Sidebar.NavItemText>Settings</Sidebar.NavItemText>
            </Sidebar.NavItem>
          </Sidebar.SectionContent>
        </Sidebar.Section>
      </Sidebar.Root>
      <Sidebar.Root size="md" aria-label="Medium" borderWidth="1px" borderRadius="l3">
        <Sidebar.Section>
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
            <Sidebar.NavItem href="#settings">
              <Sidebar.NavItemStartElement>
                <Icon name="settings" />
              </Sidebar.NavItemStartElement>
              <Sidebar.NavItemText>Settings</Sidebar.NavItemText>
            </Sidebar.NavItem>
          </Sidebar.SectionContent>
        </Sidebar.Section>
      </Sidebar.Root>
    </HStack>
  )
}
