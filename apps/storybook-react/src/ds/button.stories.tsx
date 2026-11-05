import type { Meta, StoryObj } from "@storybook/react-vite"
import { ButtonDemo } from "@isbatak/compositions/ds/react/button/usage"
import { ButtonAccessibleWhenDisabledDemo } from "@isbatak/compositions/ds/react/button/accessible-when-disabled"
import { ButtonAsLinkDemo } from "@isbatak/compositions/ds/react/button/as-link"
import { ButtonDisabledDemo } from "@isbatak/compositions/ds/react/button/disabled"
import { ButtonGroupDemo } from "@isbatak/compositions/ds/react/button/group"
import { ButtonLoadingDemo } from "@isbatak/compositions/ds/react/button/loading"
import { ButtonSizesDemo } from "@isbatak/compositions/ds/react/button/sizes"
import { ButtonSpinnerPlacementDemo } from "@isbatak/compositions/ds/react/button/spinner-placement"
import { ButtonVariantsDemo } from "@isbatak/compositions/ds/react/button/variants"
import { ButtonVerticalDemo } from "@isbatak/compositions/ds/react/button/vertical"
import { ButtonWithIconsDemo } from "@isbatak/compositions/ds/react/button/with-icons"

const meta = {
  title: "DS/Button",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <ButtonDemo />,
}

export const AccessibleWhenDisabled: Story = {
  render: () => <ButtonAccessibleWhenDisabledDemo />,
}

export const AsLink: Story = {
  render: () => <ButtonAsLinkDemo />,
}

export const Disabled: Story = {
  render: () => <ButtonDisabledDemo />,
}

export const Group: Story = {
  render: () => <ButtonGroupDemo />,
}

export const Loading: Story = {
  render: () => <ButtonLoadingDemo />,
}

export const Sizes: Story = {
  render: () => <ButtonSizesDemo />,
}

export const SpinnerPlacement: Story = {
  render: () => <ButtonSpinnerPlacementDemo />,
}

export const Variants: Story = {
  render: () => <ButtonVariantsDemo />,
}

export const Vertical: Story = {
  render: () => <ButtonVerticalDemo />,
}

export const WithIcons: Story = {
  render: () => <ButtonWithIconsDemo />,
}
