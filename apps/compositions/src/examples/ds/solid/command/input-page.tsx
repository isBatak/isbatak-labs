import { Badge } from "@isbatak/solid-ui/badge"
import { Button } from "@isbatak/solid-ui/button"
import { Command, useCommandCollection } from "@isbatak/solid-ui/command"
import { Icon, type IconName } from "@isbatak/solid-ui/icon"
import { Stack } from "@isbatak/solid-ui/stack"
import { Text } from "@isbatak/solid-ui/text"
import { For, Show, createMemo, createSignal } from "solid-js"
import { Portal } from "solid-js/web"

export function CommandInputPageDemo() {
  const [title, setTitle] = createSignal("Fix login redirect loop on Safari")
  const [invited, setInvited] = createSignal<string[]>([])
  const [query, setQuery] = createSignal("")

  const items = createMemo(() => {
    const text = query().trim()
    const result = [...actions]
    if (text) {
      result.push({
        label: `Rename to "${text}"`,
        value: "rename:apply",
        parent: "rename",
        icon: "edit",
        onSelect: () => setTitle(text),
      })
    }
    if (isEmail(text)) {
      result.push({
        label: `Send invite to ${text}`,
        value: "invite:send",
        parent: "invite",
        icon: "send",
        onSelect: () => setInvited((prev) => [...prev, text]),
      })
    }
    return result
  })

  const command = useCommandCollection(() => ({ initialItems: items(), query: query(), onQueryChange: setQuery }))

  return (
    <Stack gap="4" alignItems="flex-start">
      <Command.Provider value={command}>
        <Command.Dialog>
          <Command.DialogTrigger
            asChild={(props) => (
              <Button {...props()} variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
                <Icon name="search" /> Search actions...
              </Button>
            )}
          />
          <Portal>
            <Command.DialogBackdrop />
            <Command.DialogContent>
              <Command.Root>
                <Command.Control>
                  <Command.Indicator />
                  <Show when={command.page}>
                    {(page) => (
                      <Badge size="sm" variant="subtle" flexShrink="0">
                        {page().title}
                      </Badge>
                    )}
                  </Show>
                  <Command.Input placeholder={command.page?.placeholder ?? "Type a command or search..."} />
                </Command.Control>
                <Command.List>
                  <For each={command.collection.items}>
                    {(item) => (
                      <Command.Item item={item}>
                        <Icon name={item.icon} />
                        <Command.ItemText highlight={!command.page}>{item.label}</Command.ItemText>
                      </Command.Item>
                    )}
                  </For>
                  <Command.Empty>{command.page?.hint ?? "No results found"}</Command.Empty>
                </Command.List>
              </Command.Root>
            </Command.DialogContent>
          </Portal>
        </Command.Dialog>
      </Command.Provider>
      <Stack gap="1" textStyle="sm">
        <Text fontWeight="medium">{title()}</Text>
        <Text color="fg.muted">{invited().length ? `Invited ${invited().join(", ")}` : "No invites yet"}</Text>
      </Stack>
    </Stack>
  )
}

interface Action extends Command.ItemData {
  label: string
  value: string
  icon: IconName
  title?: string
  placeholder?: string
  hint?: string
}

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

const actions: Action[] = [
  {
    label: "Rename issue...",
    value: "rename",
    page: true,
    title: "Rename",
    placeholder: "Type a new title...",
    hint: "Type a new title, then press Enter",
    icon: "edit",
  },
  {
    label: "Invite by email...",
    value: "invite",
    page: true,
    title: "Invite",
    placeholder: "name@company.com",
    hint: "Type an email address to send an invite",
    icon: "mail",
  },
  { label: "Copy issue link", value: "copy", icon: "copy" },
  { label: "Delete issue", value: "delete", icon: "delete" },
]
