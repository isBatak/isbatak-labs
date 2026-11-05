import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import ButtonDemo from "@isbatak/compositions/ds/vue/button/usage"
import ButtonAccessibleWhenDisabledDemo from "@isbatak/compositions/ds/vue/button/accessible-when-disabled"
import ButtonAsLinkDemo from "@isbatak/compositions/ds/vue/button/as-link"
import ButtonDisabledDemo from "@isbatak/compositions/ds/vue/button/disabled"
import ButtonGroupDemo from "@isbatak/compositions/ds/vue/button/group"
import ButtonLoadingDemo from "@isbatak/compositions/ds/vue/button/loading"
import ButtonSizesDemo from "@isbatak/compositions/ds/vue/button/sizes"
import ButtonSpinnerPlacementDemo from "@isbatak/compositions/ds/vue/button/spinner-placement"
import ButtonVariantsDemo from "@isbatak/compositions/ds/vue/button/variants"
import ButtonVerticalDemo from "@isbatak/compositions/ds/vue/button/vertical"
import ButtonWithIconsDemo from "@isbatak/compositions/ds/vue/button/with-icons"

const meta = {
  title: "DS/Button",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(ButtonDemo) }),
}

export const AccessibleWhenDisabled: Story = {
  render: () => ({ setup: () => () => h(ButtonAccessibleWhenDisabledDemo) }),
}

export const AsLink: Story = {
  render: () => ({ setup: () => () => h(ButtonAsLinkDemo) }),
}

export const Disabled: Story = {
  render: () => ({ setup: () => () => h(ButtonDisabledDemo) }),
}

export const Group: Story = {
  render: () => ({ setup: () => () => h(ButtonGroupDemo) }),
}

export const Loading: Story = {
  render: () => ({ setup: () => () => h(ButtonLoadingDemo) }),
}

export const Sizes: Story = {
  render: () => ({ setup: () => () => h(ButtonSizesDemo) }),
}

export const SpinnerPlacement: Story = {
  render: () => ({ setup: () => () => h(ButtonSpinnerPlacementDemo) }),
}

export const Variants: Story = {
  render: () => ({ setup: () => () => h(ButtonVariantsDemo) }),
}

export const Vertical: Story = {
  render: () => ({ setup: () => () => h(ButtonVerticalDemo) }),
}

export const WithIcons: Story = {
  render: () => ({ setup: () => () => h(ButtonWithIconsDemo) }),
}
