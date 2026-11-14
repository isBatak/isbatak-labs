import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import LocaleDemo from "@isbatak/compositions/ds/vue/locale/usage"

const meta = {
  title: "DS/Locale",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(LocaleDemo) }),
}
