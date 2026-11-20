<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Badge } from "@isbatak/svelte-ui/badge"
  import { Box } from "@isbatak/svelte-ui/box"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Command, useCommandCollection } from "@isbatak/svelte-ui/command"
  import { Icon, type IconName } from "@isbatak/svelte-ui/icon"
  import { Text } from "@isbatak/svelte-ui/text"
  import { Wrap } from "@isbatak/svelte-ui/wrap"
  import { css } from "styled-system/css"

  interface LabelItem extends Command.ItemData {
    label: string
    value: string
    icon: IconName
  }

  const labels: LabelItem[] = [
    { label: "Bug", value: "bug", icon: "error" },
    { label: "Feature", value: "feature", icon: "sparkles" },
    { label: "Documentation", value: "docs", icon: "file-text" },
    { label: "Design", value: "design", icon: "color-picker" },
    { label: "Performance", value: "performance", icon: "stopwatch" },
    { label: "Accessibility", value: "a11y", icon: "view" },
    { label: "Breaking change", value: "breaking", icon: "warning" },
    { label: "Good first issue", value: "good-first-issue", icon: "heart" },
  ]

  let value = $state<string[]>(["bug", "a11y"])
  const command = useCommandCollection({ initialItems: labels })
  const selected = $derived(labels.filter((item) => value.includes(item.value)))

  const toggle = (details: Command.SelectionDetails) => {
    value = value.includes(details.itemValue)
      ? value.filter((item) => item !== details.itemValue)
      : [...value, details.itemValue]
  }
</script>

<Command.Provider value={command}>
  <Command.Dialog>
    <Command.DialogTrigger>
      {#snippet asChild(props)}
        <Button
          {...props()}
          variant="outline"
          size="sm"
          class={css({ minW: "64", justifyContent: "flex-start", color: "fg.muted" })}
        >
          <Icon name="bookmark" /> Add labels...
        </Button>
      {/snippet}
    </Command.DialogTrigger>
    <Portal>
      <Command.DialogBackdrop />
      <Command.DialogContent>
        <Command.Root closeOnSelect={false} onSelect={toggle}>
          <Command.Control>
            <Command.Indicator />
            <Command.Input placeholder="Search labels..." />
          </Command.Control>
          <Command.List>
            {#each command.collection.items as item (item.value)}
              <Command.Item {item}>
                <Icon name={item.icon} />
                <Command.ItemText text={item.label} highlight />
                {#if value.includes(item.value)}
                  <Box as="span" display="inline-flex" color="fg" ms="auto"><Icon name="check" /></Box>
                {/if}
              </Command.Item>
            {/each}
            <Command.Empty>No labels found</Command.Empty>
          </Command.List>
        </Command.Root>
      </Command.DialogContent>
    </Portal>
  </Command.Dialog>
</Command.Provider>
{#if selected.length > 0}
  <Wrap gap="1.5" class={css({ mt: "4" })}>
    {#each selected as item (item.value)}
      <Badge variant="surface" size="md">
        <Icon name={item.icon} />
        {item.label}
      </Badge>
    {/each}
  </Wrap>
{:else}
  <Text mt="4" textStyle="sm" color="fg.muted">No labels selected</Text>
{/if}
