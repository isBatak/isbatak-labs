import type { Meta, StoryObj } from "@storybook/react-vite"
import { CommandDemo } from "@isbatak/compositions/ds/react/command/usage"
import { CommandAsyncContentDemo } from "@isbatak/compositions/ds/react/command/async-content"
import { CommandAsyncPagesDemo } from "@isbatak/compositions/ds/react/command/async-pages"
import { CommandControlledSearchDemo } from "@isbatak/compositions/ds/react/command/controlled-search"
import { CommandEmptyStateDemo } from "@isbatak/compositions/ds/react/command/empty-state"
import { CommandFooterActionsDemo } from "@isbatak/compositions/ds/react/command/footer-actions"
import { CommandGroupsDemo } from "@isbatak/compositions/ds/react/command/groups"
import { CommandHotkeysDemo } from "@isbatak/compositions/ds/react/command/hotkeys"
import { CommandInlineDemo } from "@isbatak/compositions/ds/react/command/inline"
import { CommandInputPageDemo } from "@isbatak/compositions/ds/react/command/input-page"
import { CommandKeywordsDemo } from "@isbatak/compositions/ds/react/command/keywords"
import { CommandLinksDemo } from "@isbatak/compositions/ds/react/command/links"
import { CommandLoadMoreDemo } from "@isbatak/compositions/ds/react/command/load-more"
import { CommandMultipleDemo } from "@isbatak/compositions/ds/react/command/multiple"
import { CommandNestedDemo } from "@isbatak/compositions/ds/react/command/nested"
import { CommandPrefixSearchDemo } from "@isbatak/compositions/ds/react/command/prefix-search"
import { CommandRecentItemsDemo } from "@isbatak/compositions/ds/react/command/recent-items"
import { CommandRootProviderDemo } from "@isbatak/compositions/ds/react/command/root-provider"
import { CommandSizesDemo } from "@isbatak/compositions/ds/react/command/sizes"
import { CommandTabsDemo } from "@isbatak/compositions/ds/react/command/tabs"
import { CommandVirtualizedDemo } from "@isbatak/compositions/ds/react/command/virtualized"

const meta = {
  title: "DS/Command",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <CommandDemo />,
}

export const AsyncContent: Story = {
  render: () => <CommandAsyncContentDemo />,
}

export const AsyncPages: Story = {
  render: () => <CommandAsyncPagesDemo />,
}

export const ControlledSearch: Story = {
  render: () => <CommandControlledSearchDemo />,
}

export const EmptyState: Story = {
  render: () => <CommandEmptyStateDemo />,
}

export const FooterActions: Story = {
  render: () => <CommandFooterActionsDemo />,
}

export const Groups: Story = {
  render: () => <CommandGroupsDemo />,
}

export const Hotkeys: Story = {
  render: () => <CommandHotkeysDemo />,
}

export const Inline: Story = {
  render: () => <CommandInlineDemo />,
}

export const InputPage: Story = {
  render: () => <CommandInputPageDemo />,
}

export const Keywords: Story = {
  render: () => <CommandKeywordsDemo />,
}

export const Links: Story = {
  render: () => <CommandLinksDemo />,
}

export const LoadMore: Story = {
  render: () => <CommandLoadMoreDemo />,
}

export const Multiple: Story = {
  render: () => <CommandMultipleDemo />,
}

export const Nested: Story = {
  render: () => <CommandNestedDemo />,
}

export const PrefixSearch: Story = {
  render: () => <CommandPrefixSearchDemo />,
}

export const RecentItems: Story = {
  render: () => <CommandRecentItemsDemo />,
}

export const RootProvider: Story = {
  render: () => <CommandRootProviderDemo />,
}

export const Sizes: Story = {
  render: () => <CommandSizesDemo />,
}

export const Tabs: Story = {
  render: () => <CommandTabsDemo />,
}

export const Virtualized: Story = {
  render: () => <CommandVirtualizedDemo />,
}
