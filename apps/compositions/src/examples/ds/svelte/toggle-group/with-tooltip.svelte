<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { ToggleGroup } from "@isbatak/svelte-ui/toggle-group"
  import { Tooltip } from "@isbatak/svelte-ui/tooltip"
</script>

<ToggleGroup.Root defaultValue={["bold"]} multiple aria-label="Text formatting">
  <Tooltip.Root openDelay={300}>
    <Tooltip.Trigger>
      {#snippet asChild(props)}
        <ToggleGroup.Item {...props() as Record<string, unknown>} value="bold" aria-label="Bold">
          <Icon name="bold" />
        </ToggleGroup.Item>
      {/snippet}
    </Tooltip.Trigger>
    <Portal>
      <Tooltip.Positioner>
        <Tooltip.Content>Bold</Tooltip.Content>
      </Tooltip.Positioner>
    </Portal>
  </Tooltip.Root>
  <Tooltip.Root openDelay={300}>
    <Tooltip.Trigger>
      {#snippet asChild(props)}
        <ToggleGroup.Item {...props() as Record<string, unknown>} value="italic" aria-label="Italic">
          <Icon name="italic" />
        </ToggleGroup.Item>
      {/snippet}
    </Tooltip.Trigger>
    <Portal>
      <Tooltip.Positioner>
        <Tooltip.Content>Italic</Tooltip.Content>
      </Tooltip.Positioner>
    </Portal>
  </Tooltip.Root>
  <Tooltip.Root openDelay={300}>
    <Tooltip.Trigger>
      {#snippet asChild(props)}
        <ToggleGroup.Item {...props() as Record<string, unknown>} value="underline" aria-label="Underline">
          <Icon name="underline" />
        </ToggleGroup.Item>
      {/snippet}
    </Tooltip.Trigger>
    <Portal>
      <Tooltip.Positioner>
        <Tooltip.Content>Underline</Tooltip.Content>
      </Tooltip.Positioner>
    </Portal>
  </Tooltip.Root>
</ToggleGroup.Root>
