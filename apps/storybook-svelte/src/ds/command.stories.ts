import type { Meta, StoryObj } from "@storybook/svelte-vite"
import CommandDemo from "@isbatak/compositions/ds/svelte/command/usage"
import CommandAsyncContentDemo from "@isbatak/compositions/ds/svelte/command/async-content"
import CommandAsyncPagesDemo from "@isbatak/compositions/ds/svelte/command/async-pages"
import CommandControlledSearchDemo from "@isbatak/compositions/ds/svelte/command/controlled-search"
import CommandEmptyStateDemo from "@isbatak/compositions/ds/svelte/command/empty-state"
import CommandFooterActionsDemo from "@isbatak/compositions/ds/svelte/command/footer-actions"
import CommandGroupsDemo from "@isbatak/compositions/ds/svelte/command/groups"
import CommandHotkeysDemo from "@isbatak/compositions/ds/svelte/command/hotkeys"
import CommandInlineDemo from "@isbatak/compositions/ds/svelte/command/inline"
import CommandInputPageDemo from "@isbatak/compositions/ds/svelte/command/input-page"
import CommandKeywordsDemo from "@isbatak/compositions/ds/svelte/command/keywords"
import CommandLinksDemo from "@isbatak/compositions/ds/svelte/command/links"
import CommandLoadMoreDemo from "@isbatak/compositions/ds/svelte/command/load-more"
import CommandMultipleDemo from "@isbatak/compositions/ds/svelte/command/multiple"
import CommandNestedDemo from "@isbatak/compositions/ds/svelte/command/nested"
import CommandPrefixSearchDemo from "@isbatak/compositions/ds/svelte/command/prefix-search"
import CommandRecentItemsDemo from "@isbatak/compositions/ds/svelte/command/recent-items"
import CommandRootProviderDemo from "@isbatak/compositions/ds/svelte/command/root-provider"
import CommandSizesDemo from "@isbatak/compositions/ds/svelte/command/sizes"
import CommandTabsDemo from "@isbatak/compositions/ds/svelte/command/tabs"
import CommandVirtualizedDemo from "@isbatak/compositions/ds/svelte/command/virtualized"

const meta = {
  title: "DS/Command",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof CommandDemo> = {
  render: () => ({ Component: CommandDemo }),
}

export const AsyncContent: StoryObj<typeof CommandAsyncContentDemo> = {
  render: () => ({ Component: CommandAsyncContentDemo }),
}

export const AsyncPages: StoryObj<typeof CommandAsyncPagesDemo> = {
  render: () => ({ Component: CommandAsyncPagesDemo }),
}

export const ControlledSearch: StoryObj<typeof CommandControlledSearchDemo> = {
  render: () => ({ Component: CommandControlledSearchDemo }),
}

export const EmptyState: StoryObj<typeof CommandEmptyStateDemo> = {
  render: () => ({ Component: CommandEmptyStateDemo }),
}

export const FooterActions: StoryObj<typeof CommandFooterActionsDemo> = {
  render: () => ({ Component: CommandFooterActionsDemo }),
}

export const Groups: StoryObj<typeof CommandGroupsDemo> = {
  render: () => ({ Component: CommandGroupsDemo }),
}

export const Hotkeys: StoryObj<typeof CommandHotkeysDemo> = {
  render: () => ({ Component: CommandHotkeysDemo }),
}

export const Inline: StoryObj<typeof CommandInlineDemo> = {
  render: () => ({ Component: CommandInlineDemo }),
}

export const InputPage: StoryObj<typeof CommandInputPageDemo> = {
  render: () => ({ Component: CommandInputPageDemo }),
}

export const Keywords: StoryObj<typeof CommandKeywordsDemo> = {
  render: () => ({ Component: CommandKeywordsDemo }),
}

export const Links: StoryObj<typeof CommandLinksDemo> = {
  render: () => ({ Component: CommandLinksDemo }),
}

export const LoadMore: StoryObj<typeof CommandLoadMoreDemo> = {
  render: () => ({ Component: CommandLoadMoreDemo }),
}

export const Multiple: StoryObj<typeof CommandMultipleDemo> = {
  render: () => ({ Component: CommandMultipleDemo }),
}

export const Nested: StoryObj<typeof CommandNestedDemo> = {
  render: () => ({ Component: CommandNestedDemo }),
}

export const PrefixSearch: StoryObj<typeof CommandPrefixSearchDemo> = {
  render: () => ({ Component: CommandPrefixSearchDemo }),
}

export const RecentItems: StoryObj<typeof CommandRecentItemsDemo> = {
  render: () => ({ Component: CommandRecentItemsDemo }),
}

export const RootProvider: StoryObj<typeof CommandRootProviderDemo> = {
  render: () => ({ Component: CommandRootProviderDemo }),
}

export const Sizes: StoryObj<typeof CommandSizesDemo> = {
  render: () => ({ Component: CommandSizesDemo }),
}

export const Tabs: StoryObj<typeof CommandTabsDemo> = {
  render: () => ({ Component: CommandTabsDemo }),
}

export const Virtualized: StoryObj<typeof CommandVirtualizedDemo> = {
  render: () => ({ Component: CommandVirtualizedDemo }),
}
