import type { Meta, StoryObj } from "@storybook/svelte-vite"
import ButtonDemo from "@isbatak/compositions/ds/svelte/button/usage"
import ButtonAccessibleWhenDisabledDemo from "@isbatak/compositions/ds/svelte/button/accessible-when-disabled"
import ButtonAsLinkDemo from "@isbatak/compositions/ds/svelte/button/as-link"
import ButtonDisabledDemo from "@isbatak/compositions/ds/svelte/button/disabled"
import ButtonGroupDemo from "@isbatak/compositions/ds/svelte/button/group"
import ButtonLoadingDemo from "@isbatak/compositions/ds/svelte/button/loading"
import ButtonSizesDemo from "@isbatak/compositions/ds/svelte/button/sizes"
import ButtonSpinnerPlacementDemo from "@isbatak/compositions/ds/svelte/button/spinner-placement"
import ButtonVariantsDemo from "@isbatak/compositions/ds/svelte/button/variants"
import ButtonVerticalDemo from "@isbatak/compositions/ds/svelte/button/vertical"
import ButtonWithIconsDemo from "@isbatak/compositions/ds/svelte/button/with-icons"

const meta = {
  title: "DS/Button",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof ButtonDemo> = {
  render: () => ({ Component: ButtonDemo }),
}

export const AccessibleWhenDisabled: StoryObj<typeof ButtonAccessibleWhenDisabledDemo> = {
  render: () => ({ Component: ButtonAccessibleWhenDisabledDemo }),
}

export const AsLink: StoryObj<typeof ButtonAsLinkDemo> = {
  render: () => ({ Component: ButtonAsLinkDemo }),
}

export const Disabled: StoryObj<typeof ButtonDisabledDemo> = {
  render: () => ({ Component: ButtonDisabledDemo }),
}

export const Group: StoryObj<typeof ButtonGroupDemo> = {
  render: () => ({ Component: ButtonGroupDemo }),
}

export const Loading: StoryObj<typeof ButtonLoadingDemo> = {
  render: () => ({ Component: ButtonLoadingDemo }),
}

export const Sizes: StoryObj<typeof ButtonSizesDemo> = {
  render: () => ({ Component: ButtonSizesDemo }),
}

export const SpinnerPlacement: StoryObj<typeof ButtonSpinnerPlacementDemo> = {
  render: () => ({ Component: ButtonSpinnerPlacementDemo }),
}

export const Variants: StoryObj<typeof ButtonVariantsDemo> = {
  render: () => ({ Component: ButtonVariantsDemo }),
}

export const Vertical: StoryObj<typeof ButtonVerticalDemo> = {
  render: () => ({ Component: ButtonVerticalDemo }),
}

export const WithIcons: StoryObj<typeof ButtonWithIconsDemo> = {
  render: () => ({ Component: ButtonWithIconsDemo }),
}
