import { Icon } from "@isbatak/solid-ui/icon"
import { NavigationMenu } from "@isbatak/solid-ui/navigation-menu"
import { Stack } from "@isbatak/solid-ui/stack"
import { Text } from "@isbatak/solid-ui/text"
import { createSignal } from "solid-js"

export function NavigationMenuControlledDemo() {
  const [value, setValue] = createSignal("")

  return (
    <Stack h="64" alignItems="flex-start">
      <Text textStyle="sm" color="fg.muted">
        Open: {value() || "none"}
      </Text>
      <NavigationMenu.Root aria-label="Main" value={value()} onValueChange={(details) => setValue(details.value)}>
        <NavigationMenu.List>
          <NavigationMenu.Indicator />
          <NavigationMenu.Item value="product">
            <NavigationMenu.Trigger>
              Product
              <Icon name="chevron-down" />
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
              <Icon name="chevron-down" />
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
        <NavigationMenu.ViewportPositioner align="start">
          <NavigationMenu.Viewport />
        </NavigationMenu.ViewportPositioner>
      </NavigationMenu.Root>
    </Stack>
  )
}
