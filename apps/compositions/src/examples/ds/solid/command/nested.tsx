import { useFormatHotkey, useHotkeys } from "@ark-ui/solid/hotkeys"
import { Avatar } from "@isbatak/solid-ui/avatar"
import { Badge } from "@isbatak/solid-ui/badge"
import { Box } from "@isbatak/solid-ui/box"
import { Button } from "@isbatak/solid-ui/button"
import { Command, useCommandCollection } from "@isbatak/solid-ui/command"
import { DataList } from "@isbatak/solid-ui/data-list"
import { Icon, type IconName } from "@isbatak/solid-ui/icon"
import { Kbd, KbdGroup } from "@isbatak/solid-ui/kbd"
import { HStack, Stack } from "@isbatak/solid-ui/stack"
import { Status } from "@isbatak/solid-ui/status"
import { Text } from "@isbatak/solid-ui/text"
import { For, type JSX, Show, createSignal } from "solid-js"
import { Portal } from "solid-js/web"
import { css, cx } from "styled-system/css"
import { type BadgeVariantProps, badge } from "styled-system/recipes"

export function CommandNestedDemo() {
  const [issue, setIssue] = createSignal<Issue>({
    status: "in-progress",
    priority: "high",
    assignee: "morisot",
    labels: ["bug"],
    project: "auth",
  })
  const [open, setOpen] = createSignal(false)
  const [copied, setCopied] = createSignal<string>()
  const command = useCommandCollection({ initialItems: items, groupBy: (item) => item.group ?? "", deepSearch: true })

  const openPage = (value: string) => {
    command.reset(value)
    setOpen(true)
  }

  const copy = (text: string) => {
    void navigator.clipboard.writeText(text)
    setCopied(text)
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
    const current = issue()[item.field]
    return Array.isArray(current) ? current.includes(item.option) : current === item.option
  }

  return (
    <Stack gap="6" alignItems="flex-start">
      <Command.Provider value={command}>
        <Command.Dialog open={open()} onOpenChange={(details) => setOpen(details.open)}>
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
              <Command.Root
                onSelect={(details) => {
                  const item = items.find((entry) => entry.value === details.itemValue)
                  if (item?.copy) copy(item.copy)
                  if (!item?.field || !item.option) return
                  const { field, option } = item
                  setIssue((prev) => applyOption(prev, field, option))
                }}
              >
                <HStack px="4" pt="3" gap="1" textStyle="xs" color="fg.muted">
                  <Crumb variant="surface" mono onClick={() => command.setPage(null)}>
                    ENG-142
                  </Crumb>
                  <Show when={command.pages.length === 0}>
                    <Text as="span" truncate ms="1">
                      Fix login redirect loop on Safari
                    </Text>
                  </Show>
                  <For each={command.pages}>
                    {(item, index) => (
                      <>
                        <Icon name="chevron-right" />
                        <Crumb
                          variant={index() === command.pages.length - 1 ? "subtle" : "plain"}
                          onClick={() => command.setPage(item.value)}
                        >
                          {titleOf(item)}
                        </Crumb>
                      </>
                    )}
                  </For>
                </HStack>
                <Command.Control>
                  <Command.Indicator />
                  <Command.Input placeholder={command.page?.placeholder ?? "Type a command or search..."} />
                </Command.Control>
                <Command.List>
                  <For each={command.collection.group()}>
                    {([group, groupItems]) => (
                      <Command.ItemGroup>
                        <Show when={group}>
                          <Command.ItemGroupLabel>{group}</Command.ItemGroupLabel>
                        </Show>
                        <For each={groupItems}>
                          {(item) => (
                            <Command.Item item={item}>
                              <ItemIcon item={item} />
                              <Show when={command.getPath(item).length > 0}>
                                <HStack gap="1" color="fg.muted" flexShrink="0">
                                  <For each={command.getPath(item)}>
                                    {(parent) => (
                                      <>
                                        {titleOf(parent)}
                                        <Icon name="chevron-right" />
                                      </>
                                    )}
                                  </For>
                                </HStack>
                              </Show>
                              <Command.ItemText highlight>{item.label}</Command.ItemText>
                              <Show when={isSelected(item)}>
                                <Box as="span" display="inline-flex" color="fg" ms="auto">
                                  <Icon name="check" />
                                </Box>
                              </Show>
                              <Show when={command.isPage(item) && !item.hotkey}>
                                <Box as="span" display="inline-flex" color="fg.subtle" ms="auto">
                                  <Icon name="chevron-right" />
                                </Box>
                              </Show>
                              <For each={item.hotkey ? keysOf(item.hotkey) : []}>
                                {(key) => <Command.ItemCommand>{key}</Command.ItemCommand>}
                              </For>
                            </Command.Item>
                          )}
                        </For>
                      </Command.ItemGroup>
                    )}
                  </For>
                  <Command.Empty>No results found</Command.Empty>
                </Command.List>
              </Command.Root>
            </Command.DialogContent>
          </Portal>
        </Command.Dialog>
      </Command.Provider>

      <DataList.Root orientation="horizontal" size="sm">
        <SummaryRow label="Status" item={findOption("status", issue().status)} />
        <SummaryRow label="Priority" item={findOption("priority", issue().priority)} />
        <SummaryRow label="Assignee" item={findOption("assignee", issue().assignee)} />
        <SummaryRow label="Project" item={findOption("project", issue().project)} />
        <DataList.Item>
          <DataList.ItemLabel>Labels</DataList.ItemLabel>
          <DataList.ItemValue>
            <HStack gap="1.5" flexWrap="wrap">
              <Show when={issue().labels.length === 0}>
                <Text as="span" color="fg.muted">
                  None
                </Text>
              </Show>
              <For each={issue().labels}>
                {(value) => {
                  const label = findOption("labels", value)
                  return (
                    <Badge variant="outline" size="sm">
                      <Show when={label}>{(found) => <ItemIcon item={found()} />}</Show>
                      {label?.label}
                    </Badge>
                  )
                }}
              </For>
            </HStack>
          </DataList.ItemValue>
        </DataList.Item>
      </DataList.Root>

      <Stack gap="2" textStyle="sm" p="4" borderWidth="1px" rounded="l3" bg="bg.subtle" minW="64">
        <Text fontWeight="medium">Shortcuts</Text>
        <ShortcutRow hotkey="s" label="Change status..." keysOf={keysOf} />
        <ShortcutRow hotkey="p" label="Change priority..." keysOf={keysOf} />
        <ShortcutRow hotkey="a" label="Assign to..." keysOf={keysOf} />
        <ShortcutRow hotkey="l" label="Add labels..." keysOf={keysOf} />
        <ShortcutRow hotkey="shift+p" label="Move to project..." keysOf={keysOf} />
        <ShortcutRow hotkey="mod+." label="Copy issue ID" keysOf={keysOf} />
        <ShortcutRow hotkey="mod+shift+," label="Copy issue URL" keysOf={keysOf} />
      </Stack>
      <Show when={copied()}>
        <Text textStyle="sm" color="fg.muted">
          Copied {copied()} to clipboard
        </Text>
      </Show>
    </Stack>
  )
}

function ItemIcon(props: { item: IssueCommand }) {
  return (
    <Show when={props.item.dot} fallback={<ItemAvatar item={props.item} />}>
      {(palette) => (
        <Status.Root colorPalette={palette()} size="sm">
          <Status.Indicator />
        </Status.Root>
      )}
    </Show>
  )
}

function ItemAvatar(props: { item: IssueCommand }) {
  return (
    <Show when={props.item.person} fallback={<Show when={props.item.icon}>{(name) => <Icon name={name()} />}</Show>}>
      {(name) => (
        <Avatar.Root size="2xs">
          <Avatar.Fallback name={name()} />
        </Avatar.Root>
      )}
    </Show>
  )
}

function SummaryRow(props: { label: string; item: IssueCommand | undefined }) {
  return (
    <DataList.Item>
      <DataList.ItemLabel>{props.label}</DataList.ItemLabel>
      <DataList.ItemValue>
        <HStack gap="1.5">
          <Show when={props.item}>{(item) => <ItemIcon item={item()} />}</Show>
          {props.item?.label}
        </HStack>
      </DataList.ItemValue>
    </DataList.Item>
  )
}

function ShortcutRow(props: { hotkey: string; label: string; keysOf: (hotkey: string) => string[] }) {
  return (
    <HStack gap="3">
      <KbdGroup size="sm" variant="subtle" minW="16">
        <For each={props.keysOf(props.hotkey)}>{(key) => <Kbd>{key}</Kbd>}</For>
      </KbdGroup>
      <Text as="span" textStyle="xs" color="fg.muted">
        {props.label}
      </Text>
    </HStack>
  )
}

function Crumb(props: {
  variant: BadgeVariantProps["variant"]
  mono?: boolean
  onClick: VoidFunction
  children: JSX.Element
}) {
  return (
    <button
      type="button"
      class={cx(
        badge({ variant: props.variant, size: "sm" }),
        css({ cursor: "button" }),
        props.mono && css({ fontFamily: "mono" }),
      )}
      onClick={() => props.onClick()}
      onMouseDown={(event) => event.preventDefault()}
    >
      {props.children}
    </button>
  )
}

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
  ...teams.map((team): IssueCommand => ({
    label: team.label,
    value: `team:${team.value}`,
    parent: "project",
    placeholder: `Move to ${team.label}...`,
    icon: "account",
  })),
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
