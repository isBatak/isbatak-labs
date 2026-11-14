import type { Meta, StoryObj } from "@storybook/svelte-vite"
import LocaleDemo from "@isbatak/compositions/ds/svelte/locale/usage"

const meta = {
  title: "DS/Locale",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof LocaleDemo> = {
  render: () => ({ Component: LocaleDemo }),
}
