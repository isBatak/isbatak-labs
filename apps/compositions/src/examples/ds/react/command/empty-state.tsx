import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Command, useCommandCollection } from "@isbatak/react-ui/command"
import { EmptyState } from "@isbatak/react-ui/empty-state"
import { Icon } from "@isbatak/react-ui/icon"
import { useState } from "react"
import { styled } from "styled-system/jsx"
import { token } from "styled-system/tokens"

export function CommandEmptyStateDemo() {
  const [labels, setLabels] = useState<LabelItem[]>(initialLabels)
  const command = useCommandCollection({ initialItems: labels })

  const createLabel = () => {
    const label = command.query.trim()
    if (!label) return
    setLabels((prev) => [...prev, { label, value: label.toLowerCase().replace(/\s+/g, "-"), color: "gray.solid" }])
    command.search("")
  }

  return (
    <Command.Provider value={command}>
      <Command.Dialog>
        <Command.DialogTrigger asChild>
          <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
            <Icon name="search" /> Search labels...
          </Button>
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
                {command.collection.items.map((item) => (
                  <Command.Item item={item} key={item.value}>
                    <styled.span
                      boxSize="2.5"
                      rounded="full"
                      style={{ background: token.var(`colors.${item.color}`) }}
                    />
                    <Command.ItemText highlight>{item.label}</Command.ItemText>
                  </Command.Item>
                ))}
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
                              combobox.focus()
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
