import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { TimerDemo } from "@isbatak/compositions/ds/solid/timer/usage"
import { TimerCountdownDemo } from "@isbatak/compositions/ds/solid/timer/countdown"
import { TimerEventsDemo } from "@isbatak/compositions/ds/solid/timer/events"
import { TimerIntervalDemo } from "@isbatak/compositions/ds/solid/timer/interval"
import { TimerPomodoroDemo } from "@isbatak/compositions/ds/solid/timer/pomodoro"
import { TimerRootProviderDemo } from "@isbatak/compositions/ds/solid/timer/root-provider"
import { TimerVariantsDemo } from "@isbatak/compositions/ds/solid/timer/variants"
import { TimerSizesDemo } from "@isbatak/compositions/ds/solid/timer/sizes"

const meta = {
  title: "DS/Timer",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <TimerDemo />,
}

export const Countdown: Story = {
  render: () => <TimerCountdownDemo />,
}

export const Events: Story = {
  render: () => <TimerEventsDemo />,
}

export const Interval: Story = {
  render: () => <TimerIntervalDemo />,
}

export const Pomodoro: Story = {
  render: () => <TimerPomodoroDemo />,
}

export const RootProvider: Story = {
  render: () => <TimerRootProviderDemo />,
}

export const Variants: Story = {
  render: () => <TimerVariantsDemo />,
}

export const Sizes: Story = {
  render: () => <TimerSizesDemo />,
}
