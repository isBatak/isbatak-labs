import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "storybook/test"
import { Basic as BasicExample } from "./basic"

const meta = {
  title: "Swipeable List",
} satisfies Meta

export default meta

export const Basic: StoryObj<typeof BasicExample> = {
  render: (args) => <BasicExample {...args} />,
  args: {
    dir: "ltr",
    disabled: false,
    fullSwipe: true,
    fullSwipeThreshold: 0.5,
    threshold: 0.5,
    snapBounce: 0.14,
    resistance: 0.55,
    onOpenItemChange: fn(),
    onFullSwipe: fn(),
  },
  argTypes: {
    dir: { control: "inline-radio", options: ["ltr", "rtl"] },
    fullSwipeThreshold: { control: { type: "range", min: 0.2, max: 0.9, step: 0.05 } },
    threshold: { control: { type: "range", min: 0.1, max: 0.9, step: 0.05 } },
    snapBounce: { control: { type: "range", min: 0, max: 0.6, step: 0.02 } },
    resistance: { control: { type: "range", min: 0.05, max: 1, step: 0.05 } },
  },
}
