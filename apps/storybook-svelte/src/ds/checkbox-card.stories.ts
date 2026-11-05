import type { Meta, StoryObj } from "@storybook/svelte-vite"
import CheckboxCardDemo from "@isbatak/compositions/ds/svelte/checkbox-card/usage"
import CheckboxCardGroupDemo from "@isbatak/compositions/ds/svelte/checkbox-card/group"
import CheckboxCardVariantsDemo from "@isbatak/compositions/ds/svelte/checkbox-card/variants"

const meta = {
  title: "DS/Checkbox card",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof CheckboxCardDemo> = {
  render: () => ({ Component: CheckboxCardDemo }),
}

export const Group: StoryObj<typeof CheckboxCardGroupDemo> = {
  render: () => ({ Component: CheckboxCardGroupDemo }),
}

export const Variants: StoryObj<typeof CheckboxCardVariantsDemo> = {
  render: () => ({ Component: CheckboxCardVariantsDemo }),
}
