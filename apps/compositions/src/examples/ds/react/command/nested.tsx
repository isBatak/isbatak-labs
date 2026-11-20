import { useFormatHotkey, useHotkeys } from "@ark-ui/react/hotkeys"
import { Portal } from "@ark-ui/react/portal"
import { Avatar } from "@isbatak/react-ui/avatar"
import { Badge } from "@isbatak/react-ui/badge"
import { Button } from "@isbatak/react-ui/button"
import { Command, useCommandCollection } from "@isbatak/react-ui/command"
import { DataList } from "@isbatak/react-ui/data-list"
import { Icon } from "@isbatak/react-ui/icon"
import { Kbd, KbdGroup } from "@isbatak/react-ui/kbd"
import { Status } from "@isbatak/react-ui/status"
import { Fragment, type ReactNode, useState } from "react"
import { HStack, Stack, styled } from "styled-system/jsx"
import { type BadgeVariantProps, badge } from "styled-system/recipes"

export function CommandNestedDemo() {
  const [issue, setIssue] = useState<Issue>({
    status: "in-progress",
    priority: "high",
    assignee: "morisot",
    labels: ["bug"],
    project: "auth",
  })
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState<string>()
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
    const current = issue[item.field]
    return Array.isArray(current) ? current.includes(item.option) : current === item.option
  }

  const page = command.page

  return (
    <Stack gap="6" alignItems="flex-start">
      <Command.Provider value={command}>
        <Command.Dialog open={open} onOpenChange={(details) => setOpen(details.open)}>
          <Command.DialogTrigger asChild>
            <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
              <Icon name="search" /> Search actions...
            </Button>
          </Command.DialogTrigger>
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
                  {command.pages.length === 0 && (
                    <styled.span truncate ms="1">
                      Fix login redirect loop on Safari
                    </styled.span>
                  )}
                  {command.pages.map((item, index) => (
                    <Fragment key={item.value}>
                      <Icon name="chevron-right" />
                      <Crumb
                        variant={index === command.pages.length - 1 ? "subtle" : "plain"}
                        onClick={() => command.setPage(item.value)}
                      >
                        {titleOf(item)}
                      </Crumb>
                    </Fragment>
                  ))}
                </HStack>
                <Command.Control>
                  <Command.Indicator />
                  <Command.Input placeholder={page?.placeholder ?? "Type a command or search..."} />
                </Command.Control>
                <Command.List>
                  {command.collection.group().map(([group, groupItems]) => (
                    <Command.ItemGroup key={group}>
                      {group && <Command.ItemGroupLabel>{group}</Command.ItemGroupLabel>}
                      {groupItems.map((item) => {
                        const path = command.getPath(item)
                        return (
                          <Command.Item item={item} key={item.value}>
                            {item.icon}
                            {path.length > 0 && (
                              <HStack gap="1" color="fg.muted" flexShrink="0">
                                {path.map((parent) => (
                                  <Fragment key={parent.value}>
                                    {titleOf(parent)}
                                    <Icon name="chevron-right" />
                                  </Fragment>
                                ))}
                              </HStack>
                            )}
                            <Command.ItemText highlight>{item.label}</Command.ItemText>
                            {isSelected(item) && (
                              <styled.span display="inline-flex" color="fg" ms="auto">
                                <Icon name="check" />
                              </styled.span>
                            )}
                            {command.isPage(item) && !item.hotkey && (
                              <styled.span display="inline-flex" color="fg.subtle" ms="auto">
                                <Icon name="chevron-right" />
                              </styled.span>
                            )}
                            {item.hotkey &&
                              keysOf(item.hotkey).map((key) => (
                                <Command.ItemCommand key={key}>{key}</Command.ItemCommand>
                              ))}
                          </Command.Item>
                        )
                      })}
                    </Command.ItemGroup>
                  ))}
                  <Command.Empty>No results found</Command.Empty>
                </Command.List>
              </Command.Root>
            </Command.DialogContent>
          </Portal>
        </Command.Dialog>
      </Command.Provider>

      <DataList.Root orientation="horizontal" size="sm">
        <SummaryRow label="Status" item={findOption("status", issue.status)} />
        <SummaryRow label="Priority" item={findOption("priority", issue.priority)} />
        <SummaryRow label="Assignee" item={findOption("assignee", issue.assignee)} />
        <SummaryRow label="Project" item={findOption("project", issue.project)} />
        <DataList.Item>
          <DataList.ItemLabel>Labels</DataList.ItemLabel>
          <DataList.ItemValue>
            <HStack gap="1.5" flexWrap="wrap">
              {issue.labels.length === 0 && <styled.span color="fg.muted">None</styled.span>}
              {issue.labels.map((value) => {
                const label = findOption("labels", value)
                return (
                  <Badge key={value} variant="outline" size="sm">
                    {label?.icon}
                    {label?.label}
                  </Badge>
                )
              })}
            </HStack>
          </DataList.ItemValue>
        </DataList.Item>
      </DataList.Root>

      <Stack gap="2" textStyle="sm" p="4" borderWidth="1px" rounded="l3" bg="bg.subtle" minW="64">
        <styled.p fontWeight="medium">Shortcuts</styled.p>
        <ShortcutRow hotkey="s" label="Change status..." keysOf={keysOf} />
        <ShortcutRow hotkey="p" label="Change priority..." keysOf={keysOf} />
        <ShortcutRow hotkey="a" label="Assign to..." keysOf={keysOf} />
        <ShortcutRow hotkey="l" label="Add labels..." keysOf={keysOf} />
        <ShortcutRow hotkey="shift+p" label="Move to project..." keysOf={keysOf} />
        <ShortcutRow hotkey="mod+." label="Copy issue ID" keysOf={keysOf} />
        <ShortcutRow hotkey="mod+shift+," label="Copy issue URL" keysOf={keysOf} />
      </Stack>
      {copied && (
        <styled.p textStyle="sm" color="fg.muted">
          Copied {copied} to clipboard
        </styled.p>
      )}
    </Stack>
  )
}

function SummaryRow({ label, item }: { label: string; item: IssueCommand | undefined }) {
  return (
    <DataList.Item>
      <DataList.ItemLabel>{label}</DataList.ItemLabel>
      <DataList.ItemValue>
        <HStack gap="1.5">
          {item?.icon}
          {item?.label}
        </HStack>
      </DataList.ItemValue>
    </DataList.Item>
  )
}

function ShortcutRow(props: { hotkey: string; label: string; keysOf: (hotkey: string) => string[] }) {
  return (
    <HStack gap="3">
      <KbdGroup size="sm" variant="subtle" minW="16">
        {props.keysOf(props.hotkey).map((key) => (
          <Kbd key={key}>{key}</Kbd>
        ))}
      </KbdGroup>
      <styled.span textStyle="xs" color="fg.muted">
        {props.label}
      </styled.span>
    </HStack>
  )
}

function Crumb(props: {
  variant: BadgeVariantProps["variant"]
  mono?: boolean
  onClick: VoidFunction
  children: ReactNode
}) {
  return (
    <styled.button
      type="button"
      className={badge({ variant: props.variant, size: "sm" })}
      cursor="button"
      fontFamily={props.mono ? "mono" : undefined}
      onClick={props.onClick}
      onMouseDown={(event) => event.preventDefault()}
    >
      {props.children}
    </styled.button>
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

interface IssueCommand extends Command.ItemData {
  label: string
  value: string
  title?: string
  placeholder?: string
  icon?: ReactNode
  hotkey?: string
  copy?: string
  group?: string
  field?: Field
  option?: string
}

const titleOf = (item: IssueCommand) => item.title ?? item.label

const toggle = (list: string[], value: string) =>
  list.includes(value) ? list.filter((entry) => entry !== value) : [...list, value]

const applyOption = (issue: Issue, field: Field, option: string): Issue => ({
  ...issue,
  [field]: field === "labels" ? toggle(issue.labels, option) : option,
})

const options = (
  field: Field,
  parent: string,
  list: { label: string; option: string; icon: ReactNode }[],
): IssueCommand[] =>
  list.map((item) => ({
    ...item,
    value: `${field}:${item.option}`,
    parent,
    field,
    closeOnSelect: field !== "labels",
  }))

const dots = {
  gray: (
    <Status.Root colorPalette="gray" size="sm">
      <Status.Indicator />
    </Status.Root>
  ),
  blue: (
    <Status.Root colorPalette="blue" size="sm">
      <Status.Indicator />
    </Status.Root>
  ),
  orange: (
    <Status.Root colorPalette="orange" size="sm">
      <Status.Indicator />
    </Status.Root>
  ),
  purple: (
    <Status.Root colorPalette="purple" size="sm">
      <Status.Indicator />
    </Status.Root>
  ),
  green: (
    <Status.Root colorPalette="green" size="sm">
      <Status.Indicator />
    </Status.Root>
  ),
  red: (
    <Status.Root colorPalette="red" size="sm">
      <Status.Indicator />
    </Status.Root>
  ),
  pink: (
    <Status.Root colorPalette="pink" size="sm">
      <Status.Indicator />
    </Status.Root>
  ),
  teal: (
    <Status.Root colorPalette="teal" size="sm">
      <Status.Indicator />
    </Status.Root>
  ),
}

const person = (name: string) => (
  <Avatar.Root size="2xs">
    <Avatar.Fallback name={name} />
  </Avatar.Root>
)

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
    icon: <Icon name="circle-dot" />,
    hotkey: "s",
  },
  {
    label: "Change priority...",
    value: "priority",
    title: "Priority",
    placeholder: "Change priority...",
    group: "Change",
    icon: <Icon name="chart-pie" />,
    hotkey: "p",
  },
  {
    label: "Assign to...",
    value: "assignee",
    title: "Assignee",
    placeholder: "Assign to...",
    group: "Change",
    icon: <Icon name="account" />,
    hotkey: "a",
  },
  {
    label: "Add labels...",
    value: "labels",
    title: "Labels",
    placeholder: "Add labels...",
    group: "Change",
    icon: <Icon name="bookmark" />,
    hotkey: "l",
  },
  {
    label: "Move to project...",
    value: "project",
    title: "Project",
    placeholder: "Pick a team...",
    group: "Change",
    icon: <Icon name="folder" />,
    hotkey: "shift+p",
  },
  {
    label: "Copy issue ID",
    value: "copy-id",
    group: "Issue",
    icon: <Icon name="copy" />,
    hotkey: "mod+.",
    copy: "ENG-142",
  },
  {
    label: "Copy issue URL",
    value: "copy-url",
    group: "Issue",
    icon: <Icon name="link" />,
    hotkey: "mod+shift+,",
    copy: "https://example.com/issues/ENG-142",
  },
  { label: "Delete issue", value: "delete", group: "Issue", icon: <Icon name="delete" /> },
  ...options("status", "status", [
    { label: "Backlog", option: "backlog", icon: dots.gray },
    { label: "Todo", option: "todo", icon: dots.blue },
    { label: "In progress", option: "in-progress", icon: dots.orange },
    { label: "In review", option: "in-review", icon: dots.purple },
    { label: "Done", option: "done", icon: dots.green },
    { label: "Canceled", option: "canceled", icon: dots.red },
  ]),
  ...options("priority", "priority", [
    { label: "No priority", option: "none", icon: <Icon name="minus" /> },
    { label: "Urgent", option: "urgent", icon: <Icon name="warning" /> },
    { label: "High", option: "high", icon: <Icon name="arrow-up" /> },
    { label: "Medium", option: "medium", icon: <Icon name="arrow-right" /> },
    { label: "Low", option: "low", icon: <Icon name="arrow-down" /> },
  ]),
  ...options("assignee", "assignee", [
    { label: "Unassigned", option: "unassigned", icon: <Icon name="account" /> },
    { label: "Berthe Morisot", option: "morisot", icon: person("Berthe Morisot") },
    { label: "Mary Cassatt", option: "cassatt", icon: person("Mary Cassatt") },
    { label: "Judith Leyster", option: "leyster", icon: person("Judith Leyster") },
  ]),
  ...options("labels", "labels", [
    { label: "Bug", option: "bug", icon: dots.red },
    { label: "Feature", option: "feature", icon: dots.purple },
    { label: "Improvement", option: "improvement", icon: dots.blue },
    { label: "Design", option: "design", icon: dots.pink },
    { label: "Documentation", option: "docs", icon: dots.teal },
  ]),
  ...teams.map((team) => ({
    label: team.label,
    value: `team:${team.value}`,
    parent: "project",
    placeholder: `Move to ${team.label}...`,
    icon: <Icon name="account" />,
  })),
  ...teams.flatMap((team) =>
    options(
      "project",
      `team:${team.value}`,
      team.projects.map((project) => ({ label: project.label, option: project.value, icon: <Icon name="folder" /> })),
    ),
  ),
]

const findOption = (field: Field, option: string) =>
  items.find((item) => item.field === field && item.option === option)

const shortcutItems = items.filter((item) => item.hotkey)
