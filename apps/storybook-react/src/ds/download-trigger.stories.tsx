import type { Meta, StoryObj } from "@storybook/react-vite"
import { DownloadTriggerDemo } from "@isbatak/compositions/ds/react/download-trigger/usage"
import { DownloadTriggerSvgDemo } from "@isbatak/compositions/ds/react/download-trigger/svg"

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
