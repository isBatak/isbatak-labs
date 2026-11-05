import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import DownloadTriggerDemo from "@isbatak/compositions/ds/vue/download-trigger/usage"
import DownloadTriggerSvgDemo from "@isbatak/compositions/ds/vue/download-trigger/svg"

const meta = {
  title: "DS/Download trigger",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(DownloadTriggerDemo) }),
}

export const Svg: Story = {
  render: () => ({ setup: () => () => h(DownloadTriggerSvgDemo) }),
}
