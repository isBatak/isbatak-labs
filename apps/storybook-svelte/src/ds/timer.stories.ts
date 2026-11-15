import type { Meta, StoryObj } from "@storybook/svelte-vite"
import TimerDemo from "@isbatak/compositions/ds/svelte/timer/usage"
import TimerCountdownDemo from "@isbatak/compositions/ds/svelte/timer/countdown"
import TimerEventsDemo from "@isbatak/compositions/ds/svelte/timer/events"
import TimerIntervalDemo from "@isbatak/compositions/ds/svelte/timer/interval"
import TimerPomodoroDemo from "@isbatak/compositions/ds/svelte/timer/pomodoro"
import TimerRootProviderDemo from "@isbatak/compositions/ds/svelte/timer/root-provider"
import TimerVariantsDemo from "@isbatak/compositions/ds/svelte/timer/variants"
import TimerSizesDemo from "@isbatak/compositions/ds/svelte/timer/sizes"

const meta = {
  title: "DS/Timer",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof TimerDemo> = {
  render: () => ({ Component: TimerDemo }),
}

export const Countdown: StoryObj<typeof TimerCountdownDemo> = {
  render: () => ({ Component: TimerCountdownDemo }),
}

export const Events: StoryObj<typeof TimerEventsDemo> = {
  render: () => ({ Component: TimerEventsDemo }),
}

export const Interval: StoryObj<typeof TimerIntervalDemo> = {
  render: () => ({ Component: TimerIntervalDemo }),
}

export const Pomodoro: StoryObj<typeof TimerPomodoroDemo> = {
  render: () => ({ Component: TimerPomodoroDemo }),
}

export const RootProvider: StoryObj<typeof TimerRootProviderDemo> = {
  render: () => ({ Component: TimerRootProviderDemo }),
}

export const Variants: StoryObj<typeof TimerVariantsDemo> = {
  render: () => ({ Component: TimerVariantsDemo }),
}

export const Sizes: StoryObj<typeof TimerSizesDemo> = {
  render: () => ({ Component: TimerSizesDemo }),
}
