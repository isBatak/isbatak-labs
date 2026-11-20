<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Badge } from "@isbatak/svelte-ui/badge"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Command, useCommandCollection } from "@isbatak/svelte-ui/command"
  import { Icon, type IconName } from "@isbatak/svelte-ui/icon"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"
  import { css } from "styled-system/css"

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

  let title = $state("Fix login redirect loop on Safari")
  let invited = $state.raw<string[]>([])
  let query = $state("")

  const items = $derived.by(() => {
    const text = query.trim()
    const result = [...actions]
    if (text) {
      result.push({
        label: `Rename to "${text}"`,
        value: "rename:apply",
        parent: "rename",
        icon: "edit",
        onSelect: () => (title = text),
      })
    }
    if (isEmail(text)) {
      result.push({
        label: `Send invite to ${text}`,
        value: "invite:send",
        parent: "invite",
        icon: "send",
        onSelect: () => (invited = [...invited, text]),
      })
    }
    return result
  })

  const command = useCommandCollection(() => ({
    initialItems: items,
    query,
    onQueryChange: (value: string) => (query = value),
  }))
</script>

<Stack gap="4" align="flex-start">
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
            <Icon name="search" /> Search actions...
          </Button>
        {/snippet}
      </Command.DialogTrigger>
      <Portal>
        <Command.DialogBackdrop />
        <Command.DialogContent>
          <Command.Root>
            <Command.Control>
              <Command.Indicator />
              {#if command.page}
                <Badge size="sm" variant="subtle" class={css({ flexShrink: "0" })}>{command.page.title}</Badge>
              {/if}
              <Command.Input placeholder={command.page?.placeholder ?? "Type a command or search..."} />
            </Command.Control>
            <Command.List>
              {#each command.collection.items as item (item.value)}
                <Command.Item {item}>
                  <Icon name={item.icon} />
                  <Command.ItemText text={item.label} highlight={!command.page} />
                </Command.Item>
              {/each}
              <Command.Empty>{command.page?.hint ?? "No results found"}</Command.Empty>
            </Command.List>
          </Command.Root>
        </Command.DialogContent>
      </Portal>
    </Command.Dialog>
  </Command.Provider>
  <Stack gap="1" class={css({ textStyle: "sm" })}>
    <Text fontWeight="medium">{title}</Text>
    <Text color="fg.muted">{invited.length ? `Invited ${invited.join(", ")}` : "No invites yet"}</Text>
  </Stack>
</Stack>
