import type { Meta, StoryObj } from "@storybook/react-vite"
import { FrameDemo } from "@isbatak/compositions/ds/react/frame/usage"
import { FrameInheritStylesDemo } from "@isbatak/compositions/ds/react/frame/inherit-styles"
import { FrameScriptDemo } from "@isbatak/compositions/ds/react/frame/script"
import { FrameSrcDocDemo } from "@isbatak/compositions/ds/react/frame/src-doc"

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
