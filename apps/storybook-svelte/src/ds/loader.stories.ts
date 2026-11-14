import type { Meta, StoryObj } from "@storybook/svelte-vite"
import LoaderDemo from "@isbatak/compositions/ds/svelte/loader/usage"
import LoaderSpinnerPlacementDemo from "@isbatak/compositions/ds/svelte/loader/spinner-placement"
import LoaderCustomSpinnerDemo from "@isbatak/compositions/ds/svelte/loader/custom-spinner"
import LoaderWithBadgeDemo from "@isbatak/compositions/ds/svelte/loader/with-badge"
import LoaderWithOverlayDemo from "@isbatak/compositions/ds/svelte/loader/with-overlay"

const meta = {
  title: "DS/Loader",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof LoaderDemo> = {
  render: () => ({ Component: LoaderDemo }),
}

export const SpinnerPlacement: StoryObj<typeof LoaderSpinnerPlacementDemo> = {
  render: () => ({ Component: LoaderSpinnerPlacementDemo }),
}

export const CustomSpinner: StoryObj<typeof LoaderCustomSpinnerDemo> = {
  render: () => ({ Component: LoaderCustomSpinnerDemo }),
}

export const WithBadge: StoryObj<typeof LoaderWithBadgeDemo> = {
  render: () => ({ Component: LoaderWithBadgeDemo }),
}

export const WithOverlay: StoryObj<typeof LoaderWithOverlayDemo> = {
  render: () => ({ Component: LoaderWithOverlayDemo }),
}
