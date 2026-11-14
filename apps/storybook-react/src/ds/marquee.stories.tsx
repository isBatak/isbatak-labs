import type { Meta, StoryObj } from "@storybook/react-vite"
import { MarqueeDemo } from "@isbatak/compositions/ds/react/marquee/usage"
import { MarqueeAutoFillDemo } from "@isbatak/compositions/ds/react/marquee/auto-fill"
import { MarqueeReverseDemo } from "@isbatak/compositions/ds/react/marquee/reverse"
import { MarqueeVerticalDemo } from "@isbatak/compositions/ds/react/marquee/vertical"
import { MarqueeWithEdgesDemo } from "@isbatak/compositions/ds/react/marquee/with-edges"
import { MarqueePauseOnInteractionDemo } from "@isbatak/compositions/ds/react/marquee/pause-on-interaction"
import { MarqueeProgrammaticControlDemo } from "@isbatak/compositions/ds/react/marquee/programmatic-control"

const meta = {
  title: "DS/Marquee",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <MarqueeDemo />,
}

export const AutoFill: Story = {
  render: () => <MarqueeAutoFillDemo />,
}

export const Reverse: Story = {
  render: () => <MarqueeReverseDemo />,
}

export const Vertical: Story = {
  render: () => <MarqueeVerticalDemo />,
}

export const WithEdges: Story = {
  render: () => <MarqueeWithEdgesDemo />,
}

export const PauseOnInteraction: Story = {
  render: () => <MarqueePauseOnInteractionDemo />,
}

export const ProgrammaticControl: Story = {
  render: () => <MarqueeProgrammaticControlDemo />,
}
