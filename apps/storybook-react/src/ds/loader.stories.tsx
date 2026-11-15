import type { Meta, StoryObj } from "@storybook/react-vite"
import { LoaderDemo } from "@isbatak/compositions/ds/react/loader/usage"
import { LoaderSpinnerPlacementDemo } from "@isbatak/compositions/ds/react/loader/spinner-placement"
import { LoaderCustomSpinnerDemo } from "@isbatak/compositions/ds/react/loader/custom-spinner"
import { LoaderWithBadgeDemo } from "@isbatak/compositions/ds/react/loader/with-badge"
import { LoaderWithOverlayDemo } from "@isbatak/compositions/ds/react/loader/with-overlay"

const meta = {
  title: "DS/Loader",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <LoaderDemo />,
}

export const SpinnerPlacement: Story = {
  render: () => <LoaderSpinnerPlacementDemo />,
}

export const CustomSpinner: Story = {
  render: () => <LoaderCustomSpinnerDemo />,
}

export const WithBadge: Story = {
  render: () => <LoaderWithBadgeDemo />,
}

export const WithOverlay: Story = {
  render: () => <LoaderWithOverlayDemo />,
}
