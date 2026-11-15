import type { Meta, StoryObj } from "@storybook/react-vite"
import { ToggleGroupDemo } from "@isbatak/compositions/ds/react/toggle-group/usage"
import { ToggleGroupMultipleDemo } from "@isbatak/compositions/ds/react/toggle-group/multiple"
import { ToggleGroupControlledDemo } from "@isbatak/compositions/ds/react/toggle-group/controlled"
import { ToggleGroupRootProviderDemo } from "@isbatak/compositions/ds/react/toggle-group/root-provider"
import { ToggleGroupVariantsDemo } from "@isbatak/compositions/ds/react/toggle-group/variants"
import { ToggleGroupSizesDemo } from "@isbatak/compositions/ds/react/toggle-group/sizes"
import { ToggleGroupVerticalDemo } from "@isbatak/compositions/ds/react/toggle-group/vertical"
import { ToggleGroupFittedDemo } from "@isbatak/compositions/ds/react/toggle-group/fitted"
import { ToggleGroupWithTooltipDemo } from "@isbatak/compositions/ds/react/toggle-group/with-tooltip"

const meta = {
  title: "DS/Toggle group",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <ToggleGroupDemo />,
}

export const Multiple: Story = {
  render: () => <ToggleGroupMultipleDemo />,
}

export const Controlled: Story = {
  render: () => <ToggleGroupControlledDemo />,
}

export const RootProvider: Story = {
  render: () => <ToggleGroupRootProviderDemo />,
}

export const Variants: Story = {
  render: () => <ToggleGroupVariantsDemo />,
}

export const Sizes: Story = {
  render: () => <ToggleGroupSizesDemo />,
}

export const Vertical: Story = {
  render: () => <ToggleGroupVerticalDemo />,
}

export const Fitted: Story = {
  render: () => <ToggleGroupFittedDemo />,
}

export const WithTooltip: Story = {
  render: () => <ToggleGroupWithTooltipDemo />,
}
