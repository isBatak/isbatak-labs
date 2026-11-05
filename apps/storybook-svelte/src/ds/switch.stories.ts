import type { Meta, StoryObj } from "@storybook/svelte-vite"
import SwitchDemo from "@isbatak/compositions/ds/svelte/switch/usage"
import SwitchDisabledDemo from "@isbatak/compositions/ds/svelte/switch/disabled"
import SwitchSizesDemo from "@isbatak/compositions/ds/svelte/switch/sizes"
import SwitchVariantsDemo from "@isbatak/compositions/ds/svelte/switch/variants"
import SwitchWithThumbIconsDemo from "@isbatak/compositions/ds/svelte/switch/with-thumb-icons"

const meta = {
  title: "DS/Switch",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof SwitchDemo> = {
  render: () => ({ Component: SwitchDemo }),
}

export const Disabled: StoryObj<typeof SwitchDisabledDemo> = {
  render: () => ({ Component: SwitchDisabledDemo }),
}

export const Sizes: StoryObj<typeof SwitchSizesDemo> = {
  render: () => ({ Component: SwitchSizesDemo }),
}

export const Variants: StoryObj<typeof SwitchVariantsDemo> = {
  render: () => ({ Component: SwitchVariantsDemo }),
}

export const WithThumbIcons: StoryObj<typeof SwitchWithThumbIconsDemo> = {
  render: () => ({ Component: SwitchWithThumbIconsDemo }),
}
