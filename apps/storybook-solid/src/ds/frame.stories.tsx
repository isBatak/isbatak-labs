import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { FrameDemo } from "@isbatak/compositions/ds/solid/frame/usage"
import { FrameInheritStylesDemo } from "@isbatak/compositions/ds/solid/frame/inherit-styles"
import { FrameScriptDemo } from "@isbatak/compositions/ds/solid/frame/script"
import { FrameSrcDocDemo } from "@isbatak/compositions/ds/solid/frame/src-doc"

const meta = {
  title: "DS/Frame",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <FrameDemo />,
}

export const InheritStyles: Story = {
  render: () => <FrameInheritStylesDemo />,
}

export const Script: Story = {
  render: () => <FrameScriptDemo />,
}

export const SrcDoc: Story = {
  render: () => <FrameSrcDocDemo />,
}
