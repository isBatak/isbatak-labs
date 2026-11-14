import type { Meta, StoryObj } from "@storybook/svelte-vite"
import MarqueeDemo from "@isbatak/compositions/ds/svelte/marquee/usage"
import MarqueeAutoFillDemo from "@isbatak/compositions/ds/svelte/marquee/auto-fill"
import MarqueeReverseDemo from "@isbatak/compositions/ds/svelte/marquee/reverse"
import MarqueeVerticalDemo from "@isbatak/compositions/ds/svelte/marquee/vertical"
import MarqueeWithEdgesDemo from "@isbatak/compositions/ds/svelte/marquee/with-edges"
import MarqueePauseOnInteractionDemo from "@isbatak/compositions/ds/svelte/marquee/pause-on-interaction"
import MarqueeProgrammaticControlDemo from "@isbatak/compositions/ds/svelte/marquee/programmatic-control"

const meta = {
  title: "DS/Marquee",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof MarqueeDemo> = {
  render: () => ({ Component: MarqueeDemo }),
}

export const AutoFill: StoryObj<typeof MarqueeAutoFillDemo> = {
  render: () => ({ Component: MarqueeAutoFillDemo }),
}

export const Reverse: StoryObj<typeof MarqueeReverseDemo> = {
  render: () => ({ Component: MarqueeReverseDemo }),
}

export const Vertical: StoryObj<typeof MarqueeVerticalDemo> = {
  render: () => ({ Component: MarqueeVerticalDemo }),
}

export const WithEdges: StoryObj<typeof MarqueeWithEdgesDemo> = {
  render: () => ({ Component: MarqueeWithEdgesDemo }),
}

export const PauseOnInteraction: StoryObj<typeof MarqueePauseOnInteractionDemo> = {
  render: () => ({ Component: MarqueePauseOnInteractionDemo }),
}

export const ProgrammaticControl: StoryObj<typeof MarqueeProgrammaticControlDemo> = {
  render: () => ({ Component: MarqueeProgrammaticControlDemo }),
}
