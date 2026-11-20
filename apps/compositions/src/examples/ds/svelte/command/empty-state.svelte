<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Box } from "@isbatak/svelte-ui/box"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Command, useCommandCollection } from "@isbatak/svelte-ui/command"
  import { EmptyState } from "@isbatak/svelte-ui/empty-state"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { token } from "styled-system/tokens"
  import { css } from "styled-system/css"

  interface LabelItem extends Command.ItemData {
    label: string
    value: string
    color: "gray.solid" | "red.solid" | "purple.solid" | "blue.solid" | "teal.solid" | "pink.solid" | "orange.solid"
  }

  let labels = $state.raw<LabelItem[]>([
    { label: "Bug", value: "bug", color: "red.solid" },
    { label: "Feature", value: "feature", color: "purple.solid" },
    { label: "Improvement", value: "improvement", color: "blue.solid" },
    { label: "Documentation", value: "docs", color: "teal.solid" },
    { label: "Design", value: "design", color: "pink.solid" },
    { label: "Performance", value: "performance", color: "orange.solid" },
  ])

  const command = useCommandCollection(() => ({ initialItems: labels }))

  const createLabel = () => {
    const label = command.query.trim()
    if (!label) return
    labels = [...labels, { label, value: label.toLowerCase().replace(/\s+/g, "-"), color: "gray.solid" }]
    command.search("")
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
          <Icon name="search" /> Search labels...
        </Button>
      {/snippet}
    </Command.DialogTrigger>
    <Portal>
      <Command.DialogBackdrop />
      <Command.DialogContent>
        <Command.Root>
          <Command.Control>
            <Command.Indicator />
            <Command.Input placeholder="Search or create a label..." />
          </Command.Control>
          <Command.List>
            {#each command.collection.items as item (item.value)}
              <Command.Item {item}>
                <Box
                  as="span"
                  boxSize="2.5"
                  rounded="full"
                  style="background: {token.var(`colors.${item.color}`)}"
                />
                <Command.ItemText text={item.label} highlight />
              </Command.Item>
            {/each}
            <Command.Empty class={css({ py: "6" })}>
              <EmptyState.Root size="sm">
                <EmptyState.Content>
                  <EmptyState.Indicator>
                    <Icon name="bookmark" />
                  </EmptyState.Indicator>
                  <EmptyState.Title>No labels found</EmptyState.Title>
                  <EmptyState.Description>There's no label matching "{command.query}" yet</EmptyState.Description>
                  <Command.Context>
                    {#snippet render(combobox)}
                      <Button
                        size="xs"
                        variant="outline"
                        onclick={() => {
                          createLabel()
                          combobox().focus()
                        }}
                      >
                        <Icon name="plus" /> Create "{command.query}"
                      </Button>
                    {/snippet}
                  </Command.Context>
                </EmptyState.Content>
              </EmptyState.Root>
            </Command.Empty>
          </Command.List>
        </Command.Root>
      </Command.DialogContent>
    </Portal>
  </Command.Dialog>
</Command.Provider>
