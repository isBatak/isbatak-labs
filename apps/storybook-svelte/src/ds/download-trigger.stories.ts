import type { Meta, StoryObj } from "@storybook/svelte-vite"
import DownloadTriggerDemo from "@isbatak/compositions/ds/svelte/download-trigger/usage"
import DownloadTriggerSvgDemo from "@isbatak/compositions/ds/svelte/download-trigger/svg"

const meta = {
  title: "DS/Download trigger",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof DownloadTriggerDemo> = {
  render: () => ({ Component: DownloadTriggerDemo }),
}

export const Svg: StoryObj<typeof DownloadTriggerSvgDemo> = {
  render: () => ({ Component: DownloadTriggerSvgDemo }),
}
