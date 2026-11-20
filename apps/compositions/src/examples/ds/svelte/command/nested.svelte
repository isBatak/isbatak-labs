<script lang="ts">
  import { useFormatHotkey, useHotkeys } from "@ark-ui/svelte/hotkeys"
  import { Portal } from "@ark-ui/svelte/portal"
  import { Avatar } from "@isbatak/svelte-ui/avatar"
  import { Badge } from "@isbatak/svelte-ui/badge"
  import { Box } from "@isbatak/svelte-ui/box"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Command, useCommandCollection } from "@isbatak/svelte-ui/command"
  import { DataList } from "@isbatak/svelte-ui/data-list"
  import { Icon, type IconName } from "@isbatak/svelte-ui/icon"
  import { Kbd, KbdGroup } from "@isbatak/svelte-ui/kbd"
  import { HStack, Stack } from "@isbatak/svelte-ui/stack"
  import { Status } from "@isbatak/svelte-ui/status"
  import { Text } from "@isbatak/svelte-ui/text"
  import { css, cx } from "styled-system/css"
  import { badge } from "styled-system/recipes"

  interface Issue {
    status: string
    priority: string
    assignee: string
    labels: string[]
    project: string
  }

  type Field = keyof Issue

  type Dot = "gray" | "blue" | "orange" | "purple" | "green" | "red" | "pink" | "teal"

  interface IssueCommand extends Command.ItemData {
    label: string
    value: string
    title?: string
    placeholder?: string
    icon?: IconName
    dot?: Dot
    person?: string
    hotkey?: string
    copy?: string
    group?: string
    field?: Field
    option?: string
  }

  interface OptionInput {
    label: string
    option: string
    icon?: IconName
    dot?: Dot
    person?: string
  }

  const titleOf = (item: IssueCommand) => item.title ?? item.label

  const toggle = (list: string[], value: string) =>
    list.includes(value) ? list.filter((entry) => entry !== value) : [...list, value]

  const applyOption = (issue: Issue, field: Field, option: string): Issue => ({
    ...issue,
    [field]: field === "labels" ? toggle(issue.labels, option) : option,
  })

  const options = (field: Field, parent: string, list: OptionInput[]): IssueCommand[] =>
    list.map((item) => ({
      ...item,
      value: `${field}:${item.option}`,
      parent,
      field,
      closeOnSelect: field !== "labels",
    }))

  const teams = [
    {
      label: "Engineering",
      value: "eng",
      projects: [
        { label: "Auth revamp", value: "auth" },
        { label: "Billing v2", value: "billing" },
        { label: "Mobile app", value: "mobile" },
      ],
    },
    {
      label: "Design",
      value: "design",
      projects: [
        { label: "Design system", value: "design-system" },
        { label: "Marketing site", value: "marketing" },
      ],
    },
  ]

  const items: IssueCommand[] = [
    {
      label: "Change status...",
      value: "status",
      title: "Status",
      placeholder: "Change status...",
      group: "Change",
      icon: "circle-dot",
      hotkey: "s",
    },
    {
      label: "Change priority...",
      value: "priority",
      title: "Priority",
      placeholder: "Change priority...",
      group: "Change",
      icon: "chart-pie",
      hotkey: "p",
    },
    {
      label: "Assign to...",
      value: "assignee",
      title: "Assignee",
      placeholder: "Assign to...",
      group: "Change",
      icon: "account",
      hotkey: "a",
    },
    {
      label: "Add labels...",
      value: "labels",
      title: "Labels",
      placeholder: "Add labels...",
      group: "Change",
      icon: "bookmark",
      hotkey: "l",
    },
    {
      label: "Move to project...",
      value: "project",
      title: "Project",
      placeholder: "Pick a team...",
      group: "Change",
      icon: "folder",
      hotkey: "shift+p",
    },
    { label: "Copy issue ID", value: "copy-id", group: "Issue", icon: "copy", hotkey: "mod+.", copy: "ENG-142" },
    {
      label: "Copy issue URL",
      value: "copy-url",
      group: "Issue",
      icon: "link",
      hotkey: "mod+shift+,",
      copy: "https://example.com/issues/ENG-142",
    },
    { label: "Delete issue", value: "delete", group: "Issue", icon: "delete" },
    ...options("status", "status", [
      { label: "Backlog", option: "backlog", dot: "gray" },
      { label: "Todo", option: "todo", dot: "blue" },
      { label: "In progress", option: "in-progress", dot: "orange" },
      { label: "In review", option: "in-review", dot: "purple" },
      { label: "Done", option: "done", dot: "green" },
      { label: "Canceled", option: "canceled", dot: "red" },
    ]),
    ...options("priority", "priority", [
      { label: "No priority", option: "none", icon: "minus" },
      { label: "Urgent", option: "urgent", icon: "warning" },
      { label: "High", option: "high", icon: "arrow-up" },
      { label: "Medium", option: "medium", icon: "arrow-right" },
      { label: "Low", option: "low", icon: "arrow-down" },
    ]),
    ...options("assignee", "assignee", [
      { label: "Unassigned", option: "unassigned", icon: "account" },
      { label: "Berthe Morisot", option: "morisot", person: "Berthe Morisot" },
      { label: "Mary Cassatt", option: "cassatt", person: "Mary Cassatt" },
      { label: "Judith Leyster", option: "leyster", person: "Judith Leyster" },
    ]),
    ...options("labels", "labels", [
      { label: "Bug", option: "bug", dot: "red" },
      { label: "Feature", option: "feature", dot: "purple" },
      { label: "Improvement", option: "improvement", dot: "blue" },
      { label: "Design", option: "design", dot: "pink" },
      { label: "Documentation", option: "docs", dot: "teal" },
    ]),
    ...teams.map(
      (team): IssueCommand => ({
        label: team.label,
        value: `team:${team.value}`,
        parent: "project",
        placeholder: `Move to ${team.label}...`,
        icon: "account",
      }),
    ),
    ...teams.flatMap((team) =>
      options(
        "project",
        `team:${team.value}`,
        team.projects.map((project) => ({ label: project.label, option: project.value, icon: "folder" as const })),
      ),
    ),
  ]

  const findOption = (field: Field, option: string) =>
    items.find((item) => item.field === field && item.option === option)

  const shortcutItems = items.filter((item) => item.hotkey)

  let issue = $state.raw<Issue>({
    status: "in-progress",
    priority: "high",
    assignee: "morisot",
    labels: ["bug"],
    project: "auth",
  })
  let open = $state(false)
  let copied = $state<string>()
  const command = useCommandCollection({ initialItems: items, groupBy: (item) => item.group ?? "", deepSearch: true })

  const openPage = (value: string) => {
    command.reset(value)
    open = true
  }

  const copy = (text: string) => {
    void navigator.clipboard.writeText(text)
    copied = text
  }

  const run = (item: IssueCommand) => {
    if (command.isPage(item)) openPage(item.value)
    else if (item.copy) copy(item.copy)
  }

  useHotkeys({
    commands: shortcutItems.map((item) => ({
      id: item.value,
      hotkey: item.hotkey ?? "",
      label: item.label,
      action: () => run(item),
      options: { preventDefault: true },
    })),
  })

  const formatHotkey = useFormatHotkey()
  const keysOf = (hotkey: string) => formatHotkey(hotkey).split(" ")

  const isSelected = (item: IssueCommand) => {
    if (!item.field || !item.option) return false
    const current = issue[item.field]
    return Array.isArray(current) ? current.includes(item.option) : current === item.option
  }

  const onSelect = (details: Command.SelectionDetails) => {
    const item = items.find((entry) => entry.value === details.itemValue)
    if (item?.copy) copy(item.copy)
    if (!item?.field || !item.option) return
    issue = applyOption(issue, item.field, item.option)
  }

  const summary = $derived({
    status: findOption("status", issue.status),
    priority: findOption("priority", issue.priority),
    assignee: findOption("assignee", issue.assignee),
    project: findOption("project", issue.project),
  })

  const crumbClass = (variant: "surface" | "subtle" | "plain", mono = false) =>
    cx(badge({ variant, size: "sm" }), css({ cursor: "button" }), mono && css({ fontFamily: "mono" }))
</script>

{#snippet itemIcon(item: IssueCommand)}
  {#if item.dot}
    <Status.Root colorPalette={item.dot} size="sm">
      <Status.Indicator />
    </Status.Root>
  {:else if item.person}
    <Avatar.Root size="2xs">
      <Avatar.Fallback name={item.person} />
    </Avatar.Root>
  {:else if item.icon}
    <Icon name={item.icon} />
  {/if}
{/snippet}

<Stack gap="6" align="flex-start">
  <Command.Provider value={command}>
    <Command.Dialog bind:open>
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
          <Command.Root {onSelect}>
            <HStack gap="1" class={css({ px: "4", pt: "3", textStyle: "xs", color: "fg.muted" })}>
              <button
                type="button"
                class={crumbClass("surface", true)}
                onclick={() => command.setPage(null)}
                onmousedown={(event) => event.preventDefault()}
              >
                ENG-142
              </button>
              {#if command.pages.length === 0}
                <Text as="span" truncate ms="1">Fix login redirect loop on Safari</Text>
              {/if}
              {#each command.pages as item, index (item.value)}
                <Icon name="chevron-right" />
                <button
                  type="button"
                  class={crumbClass(index === command.pages.length - 1 ? "subtle" : "plain")}
                  onclick={() => command.setPage(item.value)}
                  onmousedown={(event) => event.preventDefault()}
                >
                  {titleOf(item)}
                </button>
              {/each}
            </HStack>
            <Command.Control>
              <Command.Indicator />
              <Command.Input placeholder={command.page?.placeholder ?? "Type a command or search..."} />
            </Command.Control>
            <Command.List>
              {#each command.collection.group() as [group, groupItems] (group)}
                <Command.ItemGroup>
                  {#if group}
                    <Command.ItemGroupLabel>{group}</Command.ItemGroupLabel>
                  {/if}
                  {#each groupItems as item (item.value)}
                    {@const path = command.getPath(item)}
                    <Command.Item {item}>
                      {@render itemIcon(item)}
                      {#if path.length > 0}
                        <HStack gap="1" class={css({ color: "fg.muted", flexShrink: "0" })}>
                          {#each path as parent (parent.value)}
                            {titleOf(parent)}
                            <Icon name="chevron-right" />
                          {/each}
                        </HStack>
                      {/if}
                      <Command.ItemText text={item.label} highlight />
                      {#if isSelected(item)}
                        <Box as="span" display="inline-flex" color="fg" ms="auto"><Icon name="check" /></Box>
                      {/if}
                      {#if command.isPage(item) && !item.hotkey}
                        <Box as="span" display="inline-flex" color="fg.subtle" ms="auto">
                          <Icon name="chevron-right" />
                        </Box>
                      {/if}
                      {#each item.hotkey ? keysOf(item.hotkey) : [] as key (key)}
                        <Command.ItemCommand>{key}</Command.ItemCommand>
                      {/each}
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

  <DataList.Root orientation="horizontal" size="sm">
    <DataList.Item>
      <DataList.ItemLabel>Status</DataList.ItemLabel>
      <DataList.ItemValue>
        <HStack gap="1.5">
          {#if summary.status}{@render itemIcon(summary.status)}{/if}
          {summary.status?.label}
        </HStack>
      </DataList.ItemValue>
    </DataList.Item>
    <DataList.Item>
      <DataList.ItemLabel>Priority</DataList.ItemLabel>
      <DataList.ItemValue>
        <HStack gap="1.5">
          {#if summary.priority}{@render itemIcon(summary.priority)}{/if}
          {summary.priority?.label}
        </HStack>
      </DataList.ItemValue>
    </DataList.Item>
    <DataList.Item>
      <DataList.ItemLabel>Assignee</DataList.ItemLabel>
      <DataList.ItemValue>
        <HStack gap="1.5">
          {#if summary.assignee}{@render itemIcon(summary.assignee)}{/if}
          {summary.assignee?.label}
        </HStack>
      </DataList.ItemValue>
    </DataList.Item>
    <DataList.Item>
      <DataList.ItemLabel>Project</DataList.ItemLabel>
      <DataList.ItemValue>
        <HStack gap="1.5">
          {#if summary.project}{@render itemIcon(summary.project)}{/if}
          {summary.project?.label}
        </HStack>
      </DataList.ItemValue>
    </DataList.Item>
    <DataList.Item>
      <DataList.ItemLabel>Labels</DataList.ItemLabel>
      <DataList.ItemValue>
        <HStack gap="1.5" class={css({ flexWrap: "wrap" })}>
          {#if issue.labels.length === 0}
            <Text as="span" color="fg.muted">None</Text>
          {/if}
          {#each issue.labels as value (value)}
            {@const label = findOption("labels", value)}
            <Badge variant="outline" size="sm">
              {#if label}{@render itemIcon(label)}{/if}
              {label?.label}
            </Badge>
          {/each}
        </HStack>
      </DataList.ItemValue>
    </DataList.Item>
  </DataList.Root>

  <Stack gap="2" class={css({ textStyle: "sm", p: "4", borderWidth: "1px", rounded: "l3", bg: "bg.subtle", minW: "64" })}>
    <Text fontWeight="medium">Shortcuts</Text>
    <HStack gap="3">
      <KbdGroup size="sm" variant="subtle" class={css({ minW: "16" })}>
        {#each keysOf("s") as key (key)}
          <Kbd>{key}</Kbd>
        {/each}
      </KbdGroup>
      <Text as="span" textStyle="xs" color="fg.muted">Change status...</Text>
    </HStack>
    <HStack gap="3">
      <KbdGroup size="sm" variant="subtle" class={css({ minW: "16" })}>
        {#each keysOf("p") as key (key)}
          <Kbd>{key}</Kbd>
        {/each}
      </KbdGroup>
      <Text as="span" textStyle="xs" color="fg.muted">Change priority...</Text>
    </HStack>
    <HStack gap="3">
      <KbdGroup size="sm" variant="subtle" class={css({ minW: "16" })}>
        {#each keysOf("a") as key (key)}
          <Kbd>{key}</Kbd>
        {/each}
      </KbdGroup>
      <Text as="span" textStyle="xs" color="fg.muted">Assign to...</Text>
    </HStack>
    <HStack gap="3">
      <KbdGroup size="sm" variant="subtle" class={css({ minW: "16" })}>
        {#each keysOf("l") as key (key)}
          <Kbd>{key}</Kbd>
        {/each}
      </KbdGroup>
      <Text as="span" textStyle="xs" color="fg.muted">Add labels...</Text>
    </HStack>
    <HStack gap="3">
      <KbdGroup size="sm" variant="subtle" class={css({ minW: "16" })}>
        {#each keysOf("shift+p") as key (key)}
          <Kbd>{key}</Kbd>
        {/each}
      </KbdGroup>
      <Text as="span" textStyle="xs" color="fg.muted">Move to project...</Text>
    </HStack>
    <HStack gap="3">
      <KbdGroup size="sm" variant="subtle" class={css({ minW: "16" })}>
        {#each keysOf("mod+.") as key (key)}
          <Kbd>{key}</Kbd>
        {/each}
      </KbdGroup>
      <Text as="span" textStyle="xs" color="fg.muted">Copy issue ID</Text>
    </HStack>
    <HStack gap="3">
      <KbdGroup size="sm" variant="subtle" class={css({ minW: "16" })}>
        {#each keysOf("mod+shift+,") as key (key)}
          <Kbd>{key}</Kbd>
        {/each}
      </KbdGroup>
      <Text as="span" textStyle="xs" color="fg.muted">Copy issue URL</Text>
    </HStack>
  </Stack>
  {#if copied}
    <Text textStyle="sm" color="fg.muted">Copied {copied} to clipboard</Text>
  {/if}
</Stack>
