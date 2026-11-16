import { Portal } from "@ark-ui/react/portal"
import { ListVirtualizer, useListVirtualizer } from "@ark-ui/react/virtualizer"
import { Button } from "@isbatak/react-ui/button"
import { Command, useCommandCollection } from "@isbatak/react-ui/command"
import { Icon, type IconName } from "@isbatak/react-ui/icon"
import { useDeferredValue, useEffect, useState } from "react"
import { styled } from "styled-system/jsx"

export function CommandVirtualizedDemo() {
  const [query, setQuery] = useState("")
  const command = useCommandCollection({
    initialItems: commands,
    query,
    onQueryChange: setQuery,
    filterQuery: useDeferredValue(query),
  })
  const { collection } = command

  const virtualizer = useListVirtualizer({ count: collection.size, estimatedSize: () => 36, overscan: 10 })
  const { updateOptions } = virtualizer

  useEffect(() => {
    updateOptions({ count: collection.size })
  }, [updateOptions, collection.size])

  return (
    <Command.Provider value={command}>
      <Command.Dialog>
        <Command.DialogTrigger asChild>
          <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
            <Icon name="search" /> Search documents...
          </Button>
        </Command.DialogTrigger>
        <Portal>
          <Command.DialogBackdrop />
          <Command.DialogContent>
            <Command.Root scrollToIndexFn={(details) => virtualizer.scrollToIndex(details.index, { align: "auto" })}>
              <Command.Control>
                <Command.Indicator />
                <Command.Input placeholder={`Search ${commands.length.toLocaleString()} commands...`} />
              </Command.Control>
              <Command.List asChild>
                <ListVirtualizer.Root value={virtualizer}>
                  <ListVirtualizer.Content>
                    {virtualizer.getVirtualItems().map((virtualItem) => {
                      const item = collection.items[virtualItem.index]
                      if (!item) return null
                      return (
                        <Command.Item key={item.value} item={item} asChild>
                          <ListVirtualizer.Item item={virtualItem}>
                            <Icon name={item.icon} />
                            <Command.ItemText highlight>{item.label}</Command.ItemText>
                            <styled.span textStyle="xs" color="fg.subtle">
                              {item.folder}
                            </styled.span>
                          </ListVirtualizer.Item>
                        </Command.Item>
                      )
                    })}
                  </ListVirtualizer.Content>
                  <Command.Empty>No commands found</Command.Empty>
                </ListVirtualizer.Root>
              </Command.List>
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
