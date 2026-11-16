import { Portal } from "@ark-ui/react/portal"
import { Badge } from "@isbatak/react-ui/badge"
import { Button } from "@isbatak/react-ui/button"
import { Command, useCommandCollection } from "@isbatak/react-ui/command"
import { Icon } from "@isbatak/react-ui/icon"
import { type ReactNode, useMemo, useState } from "react"
import { Stack, styled } from "styled-system/jsx"

export function CommandInputPageDemo() {
  const [title, setTitle] = useState("Fix login redirect loop on Safari")
  const [invited, setInvited] = useState<string[]>([])
  const [query, setQuery] = useState("")

  const items = useMemo(() => {
    const text = query.trim()
    const result = [...actions]
    if (text) {
      result.push({
        label: `Rename to "${text}"`,
        value: "rename:apply",
        parent: "rename",
        icon: <Icon name="edit" />,
        onSelect: () => setTitle(text),
      })
    }
    if (isEmail(text)) {
      result.push({
        label: `Send invite to ${text}`,
        value: "invite:send",
        parent: "invite",
        icon: <Icon name="send" />,
        onSelect: () => setInvited((prev) => [...prev, text]),
      })
    }
    return result
  }, [query])

  const command = useCommandCollection({ initialItems: items, query, onQueryChange: setQuery })
  const page = command.page

  return (
    <Stack gap="4" alignItems="flex-start">
      <Command.Provider value={command}>
        <Command.Dialog>
          <Command.DialogTrigger asChild>
            <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
              <Icon name="search" /> Search actions...
            </Button>
          </Command.DialogTrigger>
          <Portal>
            <Command.DialogBackdrop />
            <Command.DialogContent>
              <Command.Root>
                <Command.Control>
                  <Command.Indicator />
                  {page && (
                    <Badge size="sm" variant="subtle" flexShrink="0">
                      {page.title}
                    </Badge>
                  )}
                  <Command.Input placeholder={page?.placeholder ?? "Type a command or search..."} />
                </Command.Control>
                <Command.List>
                  {command.collection.items.map((item) => (
                    <Command.Item item={item} key={item.value}>
                      {item.icon}
                      <Command.ItemText highlight={!page}>{item.label}</Command.ItemText>
                    </Command.Item>
                  ))}
                  <Command.Empty>{page?.hint ?? "No results found"}</Command.Empty>
                </Command.List>
              </Command.Root>
            </Command.DialogContent>
          </Portal>
        </Command.Dialog>
      </Command.Provider>
      <Stack gap="1" textStyle="sm">
        <styled.p fontWeight="medium">{title}</styled.p>
        <styled.p color="fg.muted">{invited.length ? `Invited ${invited.join(", ")}` : "No invites yet"}</styled.p>
      </Stack>
    </Stack>
  )
}

interface Action extends Command.ItemData {
  label: string
  value: string
  icon?: ReactNode
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
    icon: <Icon name="edit" />,
  },
  {
    label: "Invite by email...",
    value: "invite",
    page: true,
    title: "Invite",
    placeholder: "name@company.com",
    hint: "Type an email address to send an invite",
    icon: <Icon name="mail" />,
  },
  { label: "Copy issue link", value: "copy", icon: <Icon name="copy" /> },
  { label: "Delete issue", value: "delete", icon: <Icon name="delete" /> },
]
