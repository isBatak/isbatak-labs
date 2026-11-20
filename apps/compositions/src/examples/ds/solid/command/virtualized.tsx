import { Button } from "@isbatak/solid-ui/button"
import { Command, useCommandCollection } from "@isbatak/solid-ui/command"
import { Icon, type IconName } from "@isbatak/solid-ui/icon"
import { Text } from "@isbatak/solid-ui/text"
import { ListVirtualizer, useListVirtualizer } from "@isbatak/solid-ui/virtualizer"
import { Index, Show, createEffect } from "solid-js"
import { Portal } from "solid-js/web"

export function CommandVirtualizedDemo() {
  const command = useCommandCollection({ initialItems: commands })
  const virtualizer = useListVirtualizer({ count: commands.length, estimatedSize: () => 36, overscan: 10 })

  createEffect(() => virtualizer.updateOptions({ count: command.collection.size }))

  return (
    <Command.Provider value={command}>
      <Command.Dialog>
        <Command.DialogTrigger
          asChild={(props) => (
            <Button {...props()} variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
              <Icon name="search" /> Search documents...
            </Button>
          )}
        />
        <Portal>
          <Command.DialogBackdrop />
          <Command.DialogContent>
            <Command.Root scrollToIndexFn={(details) => virtualizer.scrollToIndex(details.index, { align: "auto" })}>
              <Command.Control>
                <Command.Indicator />
                <Command.Input placeholder={`Search ${commands.length.toLocaleString()} commands...`} />
              </Command.Control>
              <Command.List
                asChild={(listProps) => (
                  <ListVirtualizer.Root {...listProps()} value={virtualizer}>
                    <ListVirtualizer.Content>
                      <Index each={virtualizer.getVirtualItems()}>
                        {(virtualItem) => (
                          <Show when={command.collection.items[virtualItem().index]}>
                            {(item) => (
                              <Command.Item
                                item={item()}
                                asChild={(itemProps) => (
                                  <ListVirtualizer.Item {...itemProps()} item={virtualItem()}>
                                    <Icon name={item().icon} />
                                    <Command.ItemText highlight>{item().label}</Command.ItemText>
                                    <Text as="span" textStyle="xs" color="fg.subtle">
                                      {item().folder}
                                    </Text>
                                  </ListVirtualizer.Item>
                                )}
                              />
                            )}
                          </Show>
                        )}
                      </Index>
                    </ListVirtualizer.Content>
                    <Command.Empty>No commands found</Command.Empty>
                  </ListVirtualizer.Root>
                )}
              />
            </Command.Root>
          </Command.DialogContent>
        </Portal>
      </Command.Dialog>
    </Command.Provider>
  )
}

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
