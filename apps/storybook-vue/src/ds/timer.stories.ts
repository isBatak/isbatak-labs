import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import TimerDemo from "@isbatak/compositions/ds/vue/timer/usage"
import TimerCountdownDemo from "@isbatak/compositions/ds/vue/timer/countdown"
import TimerEventsDemo from "@isbatak/compositions/ds/vue/timer/events"
import TimerIntervalDemo from "@isbatak/compositions/ds/vue/timer/interval"
import TimerPomodoroDemo from "@isbatak/compositions/ds/vue/timer/pomodoro"
import TimerRootProviderDemo from "@isbatak/compositions/ds/vue/timer/root-provider"
import TimerVariantsDemo from "@isbatak/compositions/ds/vue/timer/variants"
import TimerSizesDemo from "@isbatak/compositions/ds/vue/timer/sizes"

const meta = {
  title: "DS/Timer",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(TimerDemo) }),
}

export const Countdown: Story = {
  render: () => ({ setup: () => () => h(TimerCountdownDemo) }),
}

export const Events: Story = {
  render: () => ({ setup: () => () => h(TimerEventsDemo) }),
}

export const Interval: Story = {
  render: () => ({ setup: () => () => h(TimerIntervalDemo) }),
}

export const Pomodoro: Story = {
  render: () => ({ setup: () => () => h(TimerPomodoroDemo) }),
}

export const RootProvider: Story = {
  render: () => ({ setup: () => () => h(TimerRootProviderDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(TimerVariantsDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(TimerSizesDemo) }),
}
