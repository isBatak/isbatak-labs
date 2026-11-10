import { Icon } from "@isbatak/solid-ui/icon"
import { NavigationMenu } from "@isbatak/solid-ui/navigation-menu"
import { Stack } from "@isbatak/solid-ui/stack"

export function NavigationMenuVerticalDemo() {
  return (
    <Stack h="64" alignItems="flex-start">
      <NavigationMenu.Root aria-label="Main" orientation="vertical">
        <NavigationMenu.List>
          <NavigationMenu.Item value="product">
            <NavigationMenu.Trigger>
              Product
              <Icon name="chevron-right" />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content w="xs">
              <NavigationMenu.Link href="#analytics">Analytics</NavigationMenu.Link>
              <NavigationMenu.Link href="#automations">Automations</NavigationMenu.Link>
              <NavigationMenu.Link href="#reports">Reports</NavigationMenu.Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item value="resources">
            <NavigationMenu.Trigger>
              Resources
              <Icon name="chevron-right" />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content w="xs">
              <NavigationMenu.Link href="#docs">Documentation</NavigationMenu.Link>
              <NavigationMenu.Link href="#guides">Guides</NavigationMenu.Link>
              <NavigationMenu.Link href="#changelog">Changelog</NavigationMenu.Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item value="pricing">
            <NavigationMenu.Link href="#pricing">Pricing</NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </Stack>
  )
}
