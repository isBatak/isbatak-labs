<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Command, useCommandCollection } from "@isbatak/svelte-ui/command"
  import { Icon, type IconName } from "@isbatak/svelte-ui/icon"
  import { Text } from "@isbatak/svelte-ui/text"
  import { ListVirtualizer, useListVirtualizer } from "@isbatak/svelte-ui/virtualizer"
  import { css } from "styled-system/css"

  interface DocumentCommand extends Command.ItemData {
    label: string
    value: string
    folder: string
    icon: IconName
  }

  const actions: { label: string; icon: IconName }[] = [
    { label: "Open", icon: "file-text" },
    { label: "Rename", icon: "edit" },
    { label: "Duplicate", icon: "copy" },
    { label: "Share", icon: "share" },
    { label: "Close", icon: "close" },
    { label: "Delete", icon: "delete" },
  ]

  const folders = ["Design", "Engineering", "Marketing", "Finance", "Legal"]

  const commands: DocumentCommand[] = Array.from({ length: 5000 }, (_, index) => {
    const action = actions[index % actions.length] ?? { label: "Open", icon: "file-text" }
    const docIndex = Math.floor(index / actions.length)
    const file = `document-${String(docIndex + 1).padStart(3, "0")}`
    return {
      label: `${action.label} ${file}`,
      value: `${action.label.toLowerCase()}-${file}`,
      folder: folders[docIndex % folders.length] ?? "Design",
      icon: action.icon,
    }
  })

  const command = useCommandCollection({ initialItems: commands })
  const virtualizer = useListVirtualizer(() => ({ count: command.collection.size, estimatedSize: () => 36, overscan: 10 }))
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
          <Icon name="search" /> Search documents...
        </Button>
      {/snippet}
    </Command.DialogTrigger>
    <Portal>
      <Command.DialogBackdrop />
      <Command.DialogContent>
        <Command.Root scrollToIndexFn={(details) => virtualizer.scrollToIndex(details.index, { align: "auto" })}>
          <Command.Control>
            <Command.Indicator />
            <Command.Input placeholder={`Search ${commands.length.toLocaleString()} commands...`} />
          </Command.Control>
          <Command.List>
            {#snippet asChild(listProps)}
              <ListVirtualizer.Root {...listProps()} value={virtualizer}>
                <ListVirtualizer.Content>
                  {#each virtualizer.getVirtualItems() as virtualItem (virtualItem.key)}
                    {@const item = command.collection.items[virtualItem.index]}
                    {#if item}
                      <Command.Item {item}>
                        {#snippet asChild(itemProps)}
                          <ListVirtualizer.Item {...itemProps()} item={virtualItem}>
                            <Icon name={item.icon} />
                            <Command.ItemText text={item.label} highlight />
                            <Text as="span" textStyle="xs" color="fg.subtle">{item.folder}</Text>
                          </ListVirtualizer.Item>
                        {/snippet}
                      </Command.Item>
                    {/if}
                  {/each}
                </ListVirtualizer.Content>
                <Command.Empty>No commands found</Command.Empty>
              </ListVirtualizer.Root>
            {/snippet}
          </Command.List>
        </Command.Root>
      </Command.DialogContent>
    </Portal>
  </Command.Dialog>
</Command.Provider>
