<script lang="ts">
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { NavigationMenu } from "@isbatak/svelte-ui/navigation-menu"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"
</script>

<Stack h="64" alignItems="flex-start">
  <NavigationMenu.Root aria-label="Main" disableHoverTrigger>
    <NavigationMenu.List>
      <NavigationMenu.Indicator />
      <NavigationMenu.Item value="product">
        <NavigationMenu.Trigger>
          Product
          <Icon name="chevron-down" />
        </NavigationMenu.Trigger>
        <NavigationMenu.Content class={css({ w: "xs" })}>
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
        <NavigationMenu.Content class={css({ w: "xs" })}>
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
