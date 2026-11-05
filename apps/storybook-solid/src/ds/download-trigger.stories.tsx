import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { DownloadTriggerDemo } from "@isbatak/compositions/ds/solid/download-trigger/usage"
import { DownloadTriggerSvgDemo } from "@isbatak/compositions/ds/solid/download-trigger/svg"

const meta = {
  title: "DS/Download trigger",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <DownloadTriggerDemo />,
}

export const Svg: Story = {
  render: () => <DownloadTriggerSvgDemo />,
}
