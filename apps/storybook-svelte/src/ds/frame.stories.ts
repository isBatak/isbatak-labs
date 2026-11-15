import type { Meta, StoryObj } from "@storybook/svelte-vite"
import FrameDemo from "@isbatak/compositions/ds/svelte/frame/usage"
import FrameInheritStylesDemo from "@isbatak/compositions/ds/svelte/frame/inherit-styles"
import FrameScriptDemo from "@isbatak/compositions/ds/svelte/frame/script"
import FrameSrcDocDemo from "@isbatak/compositions/ds/svelte/frame/src-doc"

const meta = {
  title: "DS/Frame",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof FrameDemo> = {
  render: () => ({ Component: FrameDemo }),
}

export const InheritStyles: StoryObj<typeof FrameInheritStylesDemo> = {
  render: () => ({ Component: FrameInheritStylesDemo }),
}

export const Script: StoryObj<typeof FrameScriptDemo> = {
  render: () => ({ Component: FrameScriptDemo }),
}

export const SrcDoc: StoryObj<typeof FrameSrcDocDemo> = {
  render: () => ({ Component: FrameSrcDocDemo }),
}
