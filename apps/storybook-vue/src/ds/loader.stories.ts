import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { h } from "vue"
import LoaderDemo from "@isbatak/compositions/ds/vue/loader/usage"
import LoaderSpinnerPlacementDemo from "@isbatak/compositions/ds/vue/loader/spinner-placement"
import LoaderCustomSpinnerDemo from "@isbatak/compositions/ds/vue/loader/custom-spinner"
import LoaderWithBadgeDemo from "@isbatak/compositions/ds/vue/loader/with-badge"
import LoaderWithOverlayDemo from "@isbatak/compositions/ds/vue/loader/with-overlay"

const meta = {
  title: "DS/Loader",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => ({ setup: () => () => h(LoaderDemo) }),
}

export const SpinnerPlacement: Story = {
  render: () => ({ setup: () => () => h(LoaderSpinnerPlacementDemo) }),
}

export const CustomSpinner: Story = {
  render: () => ({ setup: () => () => h(LoaderCustomSpinnerDemo) }),
}

export const WithBadge: Story = {
  render: () => ({ setup: () => () => h(LoaderWithBadgeDemo) }),
}

export const WithOverlay: Story = {
  render: () => ({ setup: () => () => h(LoaderWithOverlayDemo) }),
}
