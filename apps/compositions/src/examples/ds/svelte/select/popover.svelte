<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Popover } from "@isbatak/svelte-ui/popover"
  import { createListCollection, Select } from "@isbatak/svelte-ui/select"

  const frameworks = createListCollection({ items: ["React", "Vue", "Solid", "Svelte", "Angular"] })
</script>

<Popover.Root>
  <Popover.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Open popover</Button>
    {/snippet}
  </Popover.Trigger>
  <Portal>
    <Popover.Positioner>
      <Popover.Content>
        <Popover.Header>
          <Popover.Title>Project settings</Popover.Title>
        </Popover.Header>
        <Popover.Body>
          <Select.Root collection={frameworks}>
            <Select.HiddenSelect />
            <Select.Label>Framework</Select.Label>
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Select framework" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Select.Positioner>
              <Select.Content>
                <Select.Item item="React">
                  <Select.ItemText>React</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item item="Vue">
                  <Select.ItemText>Vue</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item item="Solid">
                  <Select.ItemText>Solid</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item item="Svelte">
                  <Select.ItemText>Svelte</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
                <Select.Item item="Angular">
                  <Select.ItemText>Angular</Select.ItemText>
                  <Select.ItemIndicator />
                </Select.Item>
              </Select.Content>
            </Select.Positioner>
          </Select.Root>
        </Popover.Body>
      </Popover.Content>
    </Popover.Positioner>
  </Portal>
</Popover.Root>
