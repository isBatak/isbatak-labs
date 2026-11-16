import { Portal } from "@ark-ui/react/portal"
import { Badge } from "@isbatak/react-ui/badge"
import { Button } from "@isbatak/react-ui/button"
import { Command, useCommandCollection } from "@isbatak/react-ui/command"
import { Icon } from "@isbatak/react-ui/icon"
import { type ReactNode, useState } from "react"
import { Wrap, styled } from "styled-system/jsx"

export function CommandMultipleDemo() {
  const [value, setValue] = useState<string[]>(["bug", "a11y"])
  const command = useCommandCollection({ initialItems: labels })
  const selected = labels.filter((item) => value.includes(item.value))

  return (
    <>
      <Command.Provider value={command}>
        <Command.Dialog>
          <Command.DialogTrigger asChild>
            <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
              <Icon name="bookmark" /> Add labels...
            </Button>
          </Command.DialogTrigger>
          <Portal>
            <Command.DialogBackdrop />
            <Command.DialogContent>
              <Command.Root
                closeOnSelect={false}
                onSelect={(details) =>
                  setValue((prev) =>
                    prev.includes(details.itemValue)
                      ? prev.filter((item) => item !== details.itemValue)
                      : [...prev, details.itemValue],
                  )
                }
              >
                <Command.Control>
                  <Command.Indicator />
                  <Command.Input placeholder="Search labels..." />
                </Command.Control>
                <Command.List>
                  {command.collection.items.map((item) => (
                    <Command.Item item={item} key={item.value}>
                      {item.icon}
                      <Command.ItemText highlight>{item.label}</Command.ItemText>
                      {value.includes(item.value) && (
                        <styled.span display="inline-flex" color="fg" ms="auto">
                          <Icon name="check" />
                        </styled.span>
                      )}
                    </Command.Item>
                  ))}
                  <Command.Empty>No labels found</Command.Empty>
                </Command.List>
              </Command.Root>
            </Command.DialogContent>
          </Portal>
        </Command.Dialog>
      </Command.Provider>
      {selected.length > 0 ? (
        <Wrap mt="4" gap="1.5">
          {selected.map((item) => (
            <Badge key={item.value} variant="surface" size="md">
              {item.icon}
              {item.label}
            </Badge>
          ))}
        </Wrap>
      ) : (
        <styled.p mt="4" textStyle="sm" color="fg.muted">
          No labels selected
        </styled.p>
      )}
    </>
  )
}

interface LabelItem extends Command.ItemData {
  label: string
  value: string
  icon: ReactNode
}

const labels: LabelItem[] = [
  { label: "Bug", value: "bug", icon: <Icon name="error" /> },
  { label: "Feature", value: "feature", icon: <Icon name="sparkles" /> },
  { label: "Documentation", value: "docs", icon: <Icon name="file-text" /> },
  { label: "Design", value: "design", icon: <Icon name="color-picker" /> },
  { label: "Performance", value: "performance", icon: <Icon name="stopwatch" /> },
  { label: "Accessibility", value: "a11y", icon: <Icon name="view" /> },
  { label: "Breaking change", value: "breaking", icon: <Icon name="warning" /> },
  { label: "Good first issue", value: "good-first-issue", icon: <Icon name="heart" /> },
]
