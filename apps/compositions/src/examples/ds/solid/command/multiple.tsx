import { Badge } from "@isbatak/solid-ui/badge"
import { Box } from "@isbatak/solid-ui/box"
import { Button } from "@isbatak/solid-ui/button"
import { Command, useCommandCollection } from "@isbatak/solid-ui/command"
import { Icon, type IconName } from "@isbatak/solid-ui/icon"
import { Wrap } from "@isbatak/solid-ui/wrap"
import { Text } from "@isbatak/solid-ui/text"
import { For, Show, createSignal } from "solid-js"
import { Portal } from "solid-js/web"

export function CommandMultipleDemo() {
  const [value, setValue] = createSignal<string[]>(["bug", "a11y"])
  const command = useCommandCollection({ initialItems: labels })
  const selected = () => labels.filter((item) => value().includes(item.value))

  return (
    <>
      <Command.Provider value={command}>
        <Command.Dialog>
          <Command.DialogTrigger
            asChild={(props) => (
              <Button {...props()} variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
                <Icon name="bookmark" /> Add labels...
              </Button>
            )}
          />
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
                  <For each={command.collection.items}>
                    {(item) => (
                      <Command.Item item={item}>
                        <Icon name={item.icon} />
                        <Command.ItemText highlight>{item.label}</Command.ItemText>
                        <Show when={value().includes(item.value)}>
                          <Box as="span" display="inline-flex" color="fg" ms="auto">
                            <Icon name="check" />
                          </Box>
                        </Show>
                      </Command.Item>
                    )}
                  </For>
                  <Command.Empty>No labels found</Command.Empty>
                </Command.List>
              </Command.Root>
            </Command.DialogContent>
          </Portal>
        </Command.Dialog>
      </Command.Provider>
      <Show
        when={selected().length > 0}
        fallback={
          <Text mt="4" textStyle="sm" color="fg.muted">
            No labels selected
          </Text>
        }
      >
        <Wrap mt="4" gap="1.5">
          <For each={selected()}>
            {(item) => (
              <Badge variant="surface" size="md">
                <Icon name={item.icon} />
                {item.label}
              </Badge>
            )}
          </For>
        </Wrap>
      </Show>
    </>
  )
}

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
