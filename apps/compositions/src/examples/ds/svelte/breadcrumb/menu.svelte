<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Breadcrumb } from "@isbatak/svelte-ui/breadcrumb"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { Menu } from "@isbatak/svelte-ui/menu"
  import { css } from "styled-system/css"
</script>

<Breadcrumb.Root>
  <Breadcrumb.List>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Menu.Root>
        <Menu.Trigger>
          {#snippet asChild(props)}
            <button {...props()} class={css({ display: "inline-flex", alignItems: "center", gap: "1", color: "fg.muted", cursor: "button", borderRadius: "l1", _hover: { color: "fg" } })}>
              Components
              <Icon name="chevron-down" />
            </button>
          {/snippet}
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="theming">Theming</Menu.Item>
              <Menu.Item value="props">Props</Menu.Item>
              <Menu.Item value="customization">Customization</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.CurrentLink>Props</Breadcrumb.CurrentLink>
    </Breadcrumb.Item>
  </Breadcrumb.List>
</Breadcrumb.Root>
