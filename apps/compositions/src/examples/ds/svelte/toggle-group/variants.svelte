<script lang="ts">
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { ToggleGroup } from "@isbatak/svelte-ui/toggle-group"
</script>

<Stack gap="4" align="flex-start">
  <ToggleGroup.Root variant="subtle" defaultValue={["left"]} aria-label="Text alignment (subtle)">
    <ToggleGroup.Item value="left" aria-label="Align left">
      <Icon name="align-left" />
    </ToggleGroup.Item>
    <ToggleGroup.Item value="center" aria-label="Align center">
      <Icon name="align-center" />
    </ToggleGroup.Item>
    <ToggleGroup.Item value="right" aria-label="Align right">
      <Icon name="align-right" />
    </ToggleGroup.Item>
    <ToggleGroup.Item value="justify" aria-label="Justify">
      <Icon name="align-justify" />
    </ToggleGroup.Item>
  </ToggleGroup.Root>
  <ToggleGroup.Root variant="outline" defaultValue={["left"]} aria-label="Text alignment (outline)">
    <ToggleGroup.Item value="left" aria-label="Align left">
      <Icon name="align-left" />
    </ToggleGroup.Item>
    <ToggleGroup.Item value="center" aria-label="Align center">
      <Icon name="align-center" />
    </ToggleGroup.Item>
    <ToggleGroup.Item value="right" aria-label="Align right">
      <Icon name="align-right" />
    </ToggleGroup.Item>
    <ToggleGroup.Item value="justify" aria-label="Justify">
      <Icon name="align-justify" />
    </ToggleGroup.Item>
  </ToggleGroup.Root>
  <ToggleGroup.Root variant="ghost" defaultValue={["left"]} aria-label="Text alignment (ghost)">
    <ToggleGroup.Item value="left" aria-label="Align left">
      <Icon name="align-left" />
    </ToggleGroup.Item>
    <ToggleGroup.Item value="center" aria-label="Align center">
      <Icon name="align-center" />
    </ToggleGroup.Item>
    <ToggleGroup.Item value="right" aria-label="Align right">
      <Icon name="align-right" />
    </ToggleGroup.Item>
    <ToggleGroup.Item value="justify" aria-label="Justify">
      <Icon name="align-justify" />
    </ToggleGroup.Item>
  </ToggleGroup.Root>
</Stack>
