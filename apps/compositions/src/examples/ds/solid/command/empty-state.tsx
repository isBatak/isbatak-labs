import { Box } from "@isbatak/solid-ui/box"
import { Button } from "@isbatak/solid-ui/button"
import { Command, useCommandCollection } from "@isbatak/solid-ui/command"
import { EmptyState } from "@isbatak/solid-ui/empty-state"
import { Icon } from "@isbatak/solid-ui/icon"
import { For, createSignal } from "solid-js"
import { Portal } from "solid-js/web"
import { token } from "styled-system/tokens"

export function CommandEmptyStateDemo() {
  const [labels, setLabels] = createSignal<LabelItem[]>(initialLabels)
  const command = useCommandCollection(() => ({ initialItems: labels() }))

  const createLabel = () => {
    const label = command.query.trim()
    if (!label) return
    setLabels((prev) => [...prev, { label, value: label.toLowerCase().replace(/\s+/g, "-"), color: "gray.solid" }])
    command.search("")
  }

  return (
    <Command.Provider value={command}>
      <Command.Dialog>
        <Command.DialogTrigger
          asChild={(props) => (
            <Button {...props()} variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
              <Icon name="search" /> Search labels...
            </Button>
          )}
        />
        <Portal>
          <Command.DialogBackdrop />
          <Command.DialogContent>
            <Command.Root>
              <Command.Control>
                <Command.Indicator />
                <Command.Input placeholder="Search or create a label..." />
              </Command.Control>
              <Command.List>
                <For each={command.collection.items}>
                  {(item) => (
                    <Command.Item item={item}>
                      <Box
                        as="span"
                        boxSize="2.5"
                        rounded="full"
                        style={{ background: token.var(`colors.${item.color}`) }}
                      />
                      <Command.ItemText highlight>{item.label}</Command.ItemText>
                    </Command.Item>
                  )}
                </For>
                <Command.Empty py="6">
                  <EmptyState.Root size="sm">
                    <EmptyState.Content>
                      <EmptyState.Indicator>
                        <Icon name="bookmark" />
                      </EmptyState.Indicator>
                      <EmptyState.Title>No labels found</EmptyState.Title>
                      <EmptyState.Description>{`There's no label matching "${command.query}" yet`}</EmptyState.Description>
                      <Command.Context>
                        {(combobox) => (
                          <Button
                            size="xs"
                            variant="outline"
                            onClick={() => {
                              createLabel()
                              combobox().focus()
                            }}
                          >
                            <Icon name="plus" /> {`Create "${command.query}"`}
                          </Button>
                        )}
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
  )
}

interface LabelItem extends Command.ItemData {
  label: string
  value: string
  color: "gray.solid" | "red.solid" | "purple.solid" | "blue.solid" | "teal.solid" | "pink.solid" | "orange.solid"
}

const initialLabels: LabelItem[] = [
  { label: "Bug", value: "bug", color: "red.solid" },
  { label: "Feature", value: "feature", color: "purple.solid" },
  { label: "Improvement", value: "improvement", color: "blue.solid" },
  { label: "Documentation", value: "docs", color: "teal.solid" },
  { label: "Design", value: "design", color: "pink.solid" },
  { label: "Performance", value: "performance", color: "orange.solid" },
]
