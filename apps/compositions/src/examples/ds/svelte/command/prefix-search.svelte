<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Badge } from "@isbatak/svelte-ui/badge"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Command, useCommandCollection } from "@isbatak/svelte-ui/command"
  import { Icon, type IconName } from "@isbatak/svelte-ui/icon"
  import { css } from "styled-system/css"

  interface SearchItem extends Command.ItemData {
    label: string
    value: string
    group: string
    icon: IconName
  }

  type Prefix = ">" | "@" | "#"

  const commandItems: SearchItem[] = [
    { label: "Create new issue", value: "command-new-issue", group: "Commands", icon: "plus" },
    { label: "Search documentation", value: "command-search-docs", group: "Commands", icon: "file-text" },
    { label: "Toggle dark mode", value: "command-toggle-theme", group: "Commands", icon: "moon", keywords: ["theme"] },
  ]

  const peopleItems: SearchItem[] = [
    { label: "Berthe Morisot", value: "person-morisot", group: "People", icon: "account" },
    { label: "Mary Cassatt", value: "person-cassatt", group: "People", icon: "account" },
    { label: "Judith Leyster", value: "person-leyster", group: "People", icon: "account" },
  ]

  const projectItems: SearchItem[] = [
    { label: "Design system", value: "project-design-system", group: "Projects", icon: "folder" },
    { label: "Marketing site", value: "project-marketing", group: "Projects", icon: "folder" },
    { label: "Mobile app", value: "project-mobile", group: "Projects", icon: "folder" },
  ]

  const allItems = [...commandItems, ...peopleItems, ...projectItems]

  const scopes: Record<Prefix, { label: string; icon: IconName; items: SearchItem[] }> = {
    ">": { label: "Commands", icon: "plus", items: commandItems },
    "@": { label: "People", icon: "account", items: peopleItems },
    "#": { label: "Projects", icon: "folder", items: projectItems },
  }

  const isPrefix = (value: string): value is Prefix => value in scopes

  let prefix = $state<Prefix | null>(null)
  const scope = $derived(prefix ? scopes[prefix] : null)
  const command = useCommandCollection(() => ({
    initialItems: scope?.items ?? allItems,
    groupBy: (item: SearchItem) => item.group,
  }))

  const onKeyDown = (event: KeyboardEvent) => {
    if (command.query) return
    if (!prefix && isPrefix(event.key)) {
      event.preventDefault()
      prefix = event.key
    }
    if (prefix && event.key === "Backspace") {
      event.preventDefault()
      prefix = null
    }
  }
</script>

<Command.Provider value={command}>
  <Command.Dialog onExitComplete={() => (prefix = null)}>
    <Command.DialogTrigger>
      {#snippet asChild(props)}
        <Button
          {...props()}
          variant="outline"
          size="sm"
          class={css({ minW: "64", justifyContent: "flex-start", color: "fg.muted" })}
        >
          <Icon name="search" /> Search everything...
        </Button>
      {/snippet}
    </Command.DialogTrigger>
    <Portal>
      <Command.DialogBackdrop />
      <Command.DialogContent>
        <Command.Root>
          <Command.Control>
            <Command.Indicator />
            {#if scope}
              <Badge size="sm" variant="surface" class={css({ flexShrink: "0" })}>
                <Icon name={scope.icon} />
                {scope.label}
              </Badge>
            {/if}
            <Command.Input
              placeholder={scope ? `Search ${scope.label.toLowerCase()}...` : "Search or type > @ # to filter..."}
              onkeydown={onKeyDown}
            />
          </Command.Control>
          <Command.List>
            {#each command.collection.group() as [group, items] (group)}
              <Command.ItemGroup>
                <Command.ItemGroupLabel>{group}</Command.ItemGroupLabel>
                {#each items as item (item.value)}
                  <Command.Item {item}>
                    <Icon name={item.icon} />
                    <Command.ItemText text={item.label} highlight />
                  </Command.Item>
                {/each}
              </Command.ItemGroup>
            {/each}
            <Command.Empty>No results found</Command.Empty>
          </Command.List>
        </Command.Root>
      </Command.DialogContent>
    </Portal>
  </Command.Dialog>
</Command.Provider>
