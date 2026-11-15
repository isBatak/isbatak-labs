import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import FrameDemo from "@isbatak/compositions/ds/vue/frame/usage"
import FrameInheritStylesDemo from "@isbatak/compositions/ds/vue/frame/inherit-styles"
import FrameScriptDemo from "@isbatak/compositions/ds/vue/frame/script"
import FrameSrcDocDemo from "@isbatak/compositions/ds/vue/frame/src-doc"

const meta = {
  title: "DS/Frame",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(FrameDemo) }),
}

export const InheritStyles: Story = {
  render: () => ({ setup: () => () => h(FrameInheritStylesDemo) }),
}

export const Script: Story = {
  render: () => ({ setup: () => () => h(FrameScriptDemo) }),
}

export const SrcDoc: Story = {
  render: () => ({ setup: () => () => h(FrameSrcDocDemo) }),
}
