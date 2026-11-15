import type { Meta, StoryObj } from "@storybook/react-vite"
import { TimerDemo } from "@isbatak/compositions/ds/react/timer/usage"
import { TimerCountdownDemo } from "@isbatak/compositions/ds/react/timer/countdown"
import { TimerEventsDemo } from "@isbatak/compositions/ds/react/timer/events"
import { TimerIntervalDemo } from "@isbatak/compositions/ds/react/timer/interval"
import { TimerPomodoroDemo } from "@isbatak/compositions/ds/react/timer/pomodoro"
import { TimerRootProviderDemo } from "@isbatak/compositions/ds/react/timer/root-provider"
import { TimerVariantsDemo } from "@isbatak/compositions/ds/react/timer/variants"
import { TimerSizesDemo } from "@isbatak/compositions/ds/react/timer/sizes"

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
