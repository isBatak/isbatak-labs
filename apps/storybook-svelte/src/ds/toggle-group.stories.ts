import type { Meta, StoryObj } from "@storybook/svelte-vite"
import ToggleGroupDemo from "@isbatak/compositions/ds/svelte/toggle-group/usage"
import ToggleGroupMultipleDemo from "@isbatak/compositions/ds/svelte/toggle-group/multiple"
import ToggleGroupControlledDemo from "@isbatak/compositions/ds/svelte/toggle-group/controlled"
import ToggleGroupRootProviderDemo from "@isbatak/compositions/ds/svelte/toggle-group/root-provider"
import ToggleGroupVariantsDemo from "@isbatak/compositions/ds/svelte/toggle-group/variants"
import ToggleGroupSizesDemo from "@isbatak/compositions/ds/svelte/toggle-group/sizes"
import ToggleGroupVerticalDemo from "@isbatak/compositions/ds/svelte/toggle-group/vertical"
import ToggleGroupFittedDemo from "@isbatak/compositions/ds/svelte/toggle-group/fitted"
import ToggleGroupWithTooltipDemo from "@isbatak/compositions/ds/svelte/toggle-group/with-tooltip"

const meta = {
  title: "DS/Toggle group",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof ToggleGroupDemo> = {
  render: () => ({ Component: ToggleGroupDemo }),
}

export const Multiple: StoryObj<typeof ToggleGroupMultipleDemo> = {
  render: () => ({ Component: ToggleGroupMultipleDemo }),
}

export const Controlled: StoryObj<typeof ToggleGroupControlledDemo> = {
  render: () => ({ Component: ToggleGroupControlledDemo }),
}

export const RootProvider: StoryObj<typeof ToggleGroupRootProviderDemo> = {
  render: () => ({ Component: ToggleGroupRootProviderDemo }),
}

export const Variants: StoryObj<typeof ToggleGroupVariantsDemo> = {
  render: () => ({ Component: ToggleGroupVariantsDemo }),
}

export const Sizes: StoryObj<typeof ToggleGroupSizesDemo> = {
  render: () => ({ Component: ToggleGroupSizesDemo }),
}

export const Vertical: StoryObj<typeof ToggleGroupVerticalDemo> = {
  render: () => ({ Component: ToggleGroupVerticalDemo }),
}

export const Fitted: StoryObj<typeof ToggleGroupFittedDemo> = {
  render: () => ({ Component: ToggleGroupFittedDemo }),
}

export const WithTooltip: StoryObj<typeof ToggleGroupWithTooltipDemo> = {
  render: () => ({ Component: ToggleGroupWithTooltipDemo }),
}
