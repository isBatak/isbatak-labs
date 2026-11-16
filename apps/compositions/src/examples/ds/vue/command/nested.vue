<script setup lang="ts">
import { useFormatHotkey, useHotkeys } from "@ark-ui/vue/hotkeys"
import { Avatar } from "@isbatak/vue-ui/avatar"
import { Badge } from "@isbatak/vue-ui/badge"
import { Box } from "@isbatak/vue-ui/box"
import { Button } from "@isbatak/vue-ui/button"
import { Command, useCommandCollection } from "@isbatak/vue-ui/command"
import { DataList } from "@isbatak/vue-ui/data-list"
import { Icon, type IconName } from "@isbatak/vue-ui/icon"
import { Kbd, KbdGroup } from "@isbatak/vue-ui/kbd"
import { HStack, Stack } from "@isbatak/vue-ui/stack"
import { Status } from "@isbatak/vue-ui/status"
import { Text } from "@isbatak/vue-ui/text"
import { css, cx } from "styled-system/css"
import { badge } from "styled-system/recipes"
import { type PropType, computed, defineComponent, h, ref } from "vue"

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

const ItemIcon = defineComponent({
  props: { item: { type: Object as PropType<IssueCommand>, required: true } },
  setup(props) {
    return () => {
      const { dot, person, icon } = props.item
      if (dot) return h(Status.Root, { colorPalette: dot, size: "sm" }, () => h(Status.Indicator))
      if (person) return h(Avatar.Root, { size: "2xs" }, () => h(Avatar.Fallback, { name: person }))
      return icon ? h(Icon, { name: icon }) : null
    }
  },
})

const issue = ref<Issue>({
  status: "in-progress",
  priority: "high",
  assignee: "morisot",
  labels: ["bug"],
  project: "auth",
})
const open = ref(false)
const copied = ref<string>()
const command = useCommandCollection({ initialItems: items, groupBy: (item) => item.group ?? "", deepSearch: true })

const openPage = (value: string) => {
  command.reset(value)
  open.value = true
}

const copy = (text: string) => {
  void navigator.clipboard.writeText(text)
  copied.value = text
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
const keysOf = (hotkey: string) => formatHotkey.value(hotkey).split(" ")

const isSelected = (item: IssueCommand) => {
  if (!item.field || !item.option) return false
  const current = issue.value[item.field]
  return Array.isArray(current) ? current.includes(item.option) : current === item.option
}

const onSelect = (details: Command.SelectionDetails) => {
  const item = items.find((entry) => entry.value === details.itemValue)
  if (item?.copy) copy(item.copy)
  if (!item?.field || !item.option) return
  issue.value = applyOption(issue.value, item.field, item.option)
}

const summary = computed(() => ({
  status: findOption("status", issue.value.status),
  priority: findOption("priority", issue.value.priority),
  assignee: findOption("assignee", issue.value.assignee),
  project: findOption("project", issue.value.project),
  labels: issue.value.labels.map((value) => findOption("labels", value)),
}))

const crumbClass = (variant: "surface" | "subtle" | "plain", mono = false) =>
  cx(badge({ variant, size: "sm" }), css({ cursor: "button" }), mono && css({ fontFamily: "mono" }))
</script>

<template>
  <Stack gap="6" alignItems="flex-start">
    <Command.Provider :value="command">
      <Command.Dialog v-model:open="open">
        <Command.DialogTrigger :asChild="true">
          <Button variant="outline" size="sm" minW="64" justifyContent="flex-start" color="fg.muted">
            <Icon name="search" /> Search actions...
          </Button>
        </Command.DialogTrigger>
        <Teleport to="body">
          <Command.DialogBackdrop />
          <Command.DialogContent>
            <Command.Root @select="onSelect">
              <HStack px="4" pt="3" gap="1" textStyle="xs" color="fg.muted">
                <button
                  type="button"
                  :class="crumbClass('surface', true)"
                  @click="command.setPage(null)"
                  @mousedown.prevent
                >
                  ENG-142
                </button>
                <Text v-if="command.pages.length === 0" as="span" truncate ms="1">
                  Fix login redirect loop on Safari
                </Text>
                <template v-for="(item, index) in command.pages" :key="item.value">
                  <Icon name="chevron-right" />
                  <button
                    type="button"
                    :class="crumbClass(index === command.pages.length - 1 ? 'subtle' : 'plain')"
                    @click="command.setPage(item.value)"
                    @mousedown.prevent
                  >
                    {{ titleOf(item) }}
                  </button>
                </template>
              </HStack>
              <Command.Control>
                <Command.Indicator />
                <Command.Input :placeholder="command.page?.placeholder ?? 'Type a command or search...'" />
              </Command.Control>
              <Command.List>
                <Command.ItemGroup v-for="[group, groupItems] in command.collection.group()" :key="group">
                  <Command.ItemGroupLabel v-if="group">{{ group }}</Command.ItemGroupLabel>
                  <Command.Item v-for="item in groupItems" :key="item.value" :item="item">
                    <ItemIcon :item="item" />
                    <HStack v-if="command.getPath(item).length > 0" gap="1" color="fg.muted" flexShrink="0">
                      <template v-for="parent in command.getPath(item)" :key="parent.value">
                        {{ titleOf(parent) }}
                        <Icon name="chevron-right" />
                      </template>
                    </HStack>
                    <Command.ItemText highlight>{{ item.label }}</Command.ItemText>
                    <Box v-if="isSelected(item)" as="span" display="inline-flex" color="fg" ms="auto">
                      <Icon name="check" />
                    </Box>
                    <Box
                      v-if="command.isPage(item) && !item.hotkey"
                      as="span"
                      display="inline-flex"
                      color="fg.subtle"
                      ms="auto"
                    >
                      <Icon name="chevron-right" />
                    </Box>
                    <Command.ItemCommand v-for="key in item.hotkey ? keysOf(item.hotkey) : []" :key="key">
                      {{ key }}
                    </Command.ItemCommand>
                  </Command.Item>
                </Command.ItemGroup>
                <Command.Empty>No results found</Command.Empty>
              </Command.List>
            </Command.Root>
          </Command.DialogContent>
        </Teleport>
      </Command.Dialog>
    </Command.Provider>

    <DataList.Root orientation="horizontal" size="sm">
      <DataList.Item>
        <DataList.ItemLabel>Status</DataList.ItemLabel>
        <DataList.ItemValue>
          <HStack gap="1.5">
            <ItemIcon v-if="summary.status" :item="summary.status" />
            {{ summary.status?.label }}
          </HStack>
        </DataList.ItemValue>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemLabel>Priority</DataList.ItemLabel>
        <DataList.ItemValue>
          <HStack gap="1.5">
            <ItemIcon v-if="summary.priority" :item="summary.priority" />
            {{ summary.priority?.label }}
          </HStack>
        </DataList.ItemValue>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemLabel>Assignee</DataList.ItemLabel>
        <DataList.ItemValue>
          <HStack gap="1.5">
            <ItemIcon v-if="summary.assignee" :item="summary.assignee" />
            {{ summary.assignee?.label }}
          </HStack>
        </DataList.ItemValue>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemLabel>Project</DataList.ItemLabel>
        <DataList.ItemValue>
          <HStack gap="1.5">
            <ItemIcon v-if="summary.project" :item="summary.project" />
            {{ summary.project?.label }}
          </HStack>
        </DataList.ItemValue>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemLabel>Labels</DataList.ItemLabel>
        <DataList.ItemValue>
          <HStack gap="1.5" flexWrap="wrap">
            <Text v-if="summary.labels.length === 0" as="span" color="fg.muted">None</Text>
            <Badge v-for="label in summary.labels" :key="label?.value" variant="outline" size="sm">
              <ItemIcon v-if="label" :item="label" />
              {{ label?.label }}
            </Badge>
          </HStack>
        </DataList.ItemValue>
      </DataList.Item>
    </DataList.Root>

    <Stack gap="2" textStyle="sm" p="4" borderWidth="1px" rounded="l3" bg="bg.subtle" minW="64">
      <Text fontWeight="medium">Shortcuts</Text>
      <HStack gap="3">
        <KbdGroup size="sm" variant="subtle" minW="16">
          <Kbd v-for="key in keysOf('s')" :key="key">{{ key }}</Kbd>
        </KbdGroup>
        <Text as="span" textStyle="xs" color="fg.muted">Change status...</Text>
      </HStack>
      <HStack gap="3">
        <KbdGroup size="sm" variant="subtle" minW="16">
          <Kbd v-for="key in keysOf('p')" :key="key">{{ key }}</Kbd>
        </KbdGroup>
        <Text as="span" textStyle="xs" color="fg.muted">Change priority...</Text>
      </HStack>
      <HStack gap="3">
        <KbdGroup size="sm" variant="subtle" minW="16">
          <Kbd v-for="key in keysOf('a')" :key="key">{{ key }}</Kbd>
        </KbdGroup>
        <Text as="span" textStyle="xs" color="fg.muted">Assign to...</Text>
      </HStack>
      <HStack gap="3">
        <KbdGroup size="sm" variant="subtle" minW="16">
          <Kbd v-for="key in keysOf('l')" :key="key">{{ key }}</Kbd>
        </KbdGroup>
        <Text as="span" textStyle="xs" color="fg.muted">Add labels...</Text>
      </HStack>
      <HStack gap="3">
        <KbdGroup size="sm" variant="subtle" minW="16">
          <Kbd v-for="key in keysOf('shift+p')" :key="key">{{ key }}</Kbd>
        </KbdGroup>
        <Text as="span" textStyle="xs" color="fg.muted">Move to project...</Text>
      </HStack>
      <HStack gap="3">
        <KbdGroup size="sm" variant="subtle" minW="16">
          <Kbd v-for="key in keysOf('mod+.')" :key="key">{{ key }}</Kbd>
        </KbdGroup>
        <Text as="span" textStyle="xs" color="fg.muted">Copy issue ID</Text>
      </HStack>
      <HStack gap="3">
        <KbdGroup size="sm" variant="subtle" minW="16">
          <Kbd v-for="key in keysOf('mod+shift+,')" :key="key">{{ key }}</Kbd>
        </KbdGroup>
        <Text as="span" textStyle="xs" color="fg.muted">Copy issue URL</Text>
      </HStack>
    </Stack>
    <Text v-if="copied" textStyle="sm" color="fg.muted">Copied {{ copied }} to clipboard</Text>
  </Stack>
</template>
