import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import CommandDemo from "@isbatak/compositions/ds/vue/command/usage"
import CommandAsyncContentDemo from "@isbatak/compositions/ds/vue/command/async-content"
import CommandAsyncPagesDemo from "@isbatak/compositions/ds/vue/command/async-pages"
import CommandControlledSearchDemo from "@isbatak/compositions/ds/vue/command/controlled-search"
import CommandEmptyStateDemo from "@isbatak/compositions/ds/vue/command/empty-state"
import CommandFooterActionsDemo from "@isbatak/compositions/ds/vue/command/footer-actions"
import CommandGroupsDemo from "@isbatak/compositions/ds/vue/command/groups"
import CommandHotkeysDemo from "@isbatak/compositions/ds/vue/command/hotkeys"
import CommandInlineDemo from "@isbatak/compositions/ds/vue/command/inline"
import CommandInputPageDemo from "@isbatak/compositions/ds/vue/command/input-page"
import CommandKeywordsDemo from "@isbatak/compositions/ds/vue/command/keywords"
import CommandLinksDemo from "@isbatak/compositions/ds/vue/command/links"
import CommandLoadMoreDemo from "@isbatak/compositions/ds/vue/command/load-more"
import CommandMultipleDemo from "@isbatak/compositions/ds/vue/command/multiple"
import CommandNestedDemo from "@isbatak/compositions/ds/vue/command/nested"
import CommandPrefixSearchDemo from "@isbatak/compositions/ds/vue/command/prefix-search"
import CommandRecentItemsDemo from "@isbatak/compositions/ds/vue/command/recent-items"
import CommandRootProviderDemo from "@isbatak/compositions/ds/vue/command/root-provider"
import CommandSizesDemo from "@isbatak/compositions/ds/vue/command/sizes"
import CommandTabsDemo from "@isbatak/compositions/ds/vue/command/tabs"
import CommandVirtualizedDemo from "@isbatak/compositions/ds/vue/command/virtualized"

const meta = {
  title: "DS/Command",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(CommandDemo) }),
}

export const AsyncContent: Story = {
  render: () => ({ setup: () => () => h(CommandAsyncContentDemo) }),
}

export const AsyncPages: Story = {
  render: () => ({ setup: () => () => h(CommandAsyncPagesDemo) }),
}

export const ControlledSearch: Story = {
  render: () => ({ setup: () => () => h(CommandControlledSearchDemo) }),
}

export const EmptyState: Story = {
  render: () => ({ setup: () => () => h(CommandEmptyStateDemo) }),
}

export const FooterActions: Story = {
  render: () => ({ setup: () => () => h(CommandFooterActionsDemo) }),
}

export const Groups: Story = {
  render: () => ({ setup: () => () => h(CommandGroupsDemo) }),
}

export const Hotkeys: Story = {
  render: () => ({ setup: () => () => h(CommandHotkeysDemo) }),
}

export const Inline: Story = {
  render: () => ({ setup: () => () => h(CommandInlineDemo) }),
}

export const InputPage: Story = {
  render: () => ({ setup: () => () => h(CommandInputPageDemo) }),
}

export const Keywords: Story = {
  render: () => ({ setup: () => () => h(CommandKeywordsDemo) }),
}

export const Links: Story = {
  render: () => ({ setup: () => () => h(CommandLinksDemo) }),
}

export const LoadMore: Story = {
  render: () => ({ setup: () => () => h(CommandLoadMoreDemo) }),
}

export const Multiple: Story = {
  render: () => ({ setup: () => () => h(CommandMultipleDemo) }),
}

export const Nested: Story = {
  render: () => ({ setup: () => () => h(CommandNestedDemo) }),
}

export const PrefixSearch: Story = {
  render: () => ({ setup: () => () => h(CommandPrefixSearchDemo) }),
}

export const RecentItems: Story = {
  render: () => ({ setup: () => () => h(CommandRecentItemsDemo) }),
}

export const RootProvider: Story = {
  render: () => ({ setup: () => () => h(CommandRootProviderDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(CommandSizesDemo) }),
}

export const Tabs: Story = {
  render: () => ({ setup: () => () => h(CommandTabsDemo) }),
}

export const Virtualized: Story = {
  render: () => ({ setup: () => () => h(CommandVirtualizedDemo) }),
}
