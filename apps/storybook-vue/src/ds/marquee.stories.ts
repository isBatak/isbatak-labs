import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import MarqueeDemo from "@isbatak/compositions/ds/vue/marquee/usage"
import MarqueeAutoFillDemo from "@isbatak/compositions/ds/vue/marquee/auto-fill"
import MarqueeReverseDemo from "@isbatak/compositions/ds/vue/marquee/reverse"
import MarqueeVerticalDemo from "@isbatak/compositions/ds/vue/marquee/vertical"
import MarqueeWithEdgesDemo from "@isbatak/compositions/ds/vue/marquee/with-edges"
import MarqueePauseOnInteractionDemo from "@isbatak/compositions/ds/vue/marquee/pause-on-interaction"
import MarqueeProgrammaticControlDemo from "@isbatak/compositions/ds/vue/marquee/programmatic-control"

const meta = {
  title: "DS/Marquee",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(MarqueeDemo) }),
}

export const AutoFill: Story = {
  render: () => ({ setup: () => () => h(MarqueeAutoFillDemo) }),
}

export const Reverse: Story = {
  render: () => ({ setup: () => () => h(MarqueeReverseDemo) }),
}

export const Vertical: Story = {
  render: () => ({ setup: () => () => h(MarqueeVerticalDemo) }),
}

export const WithEdges: Story = {
  render: () => ({ setup: () => () => h(MarqueeWithEdgesDemo) }),
}

export const PauseOnInteraction: Story = {
  render: () => ({ setup: () => () => h(MarqueePauseOnInteractionDemo) }),
}

export const ProgrammaticControl: Story = {
  render: () => ({ setup: () => () => h(MarqueeProgrammaticControlDemo) }),
}
