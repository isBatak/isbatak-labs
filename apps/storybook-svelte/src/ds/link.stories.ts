import type { Meta, StoryObj } from "@storybook/svelte-vite"
import LinkDemo from "@isbatak/compositions/ds/svelte/link/usage"
import LinkExternalDemo from "@isbatak/compositions/ds/svelte/link/external"
import LinkVariantsDemo from "@isbatak/compositions/ds/svelte/link/variants"
import LinkWithinTextDemo from "@isbatak/compositions/ds/svelte/link/within-text"

const meta = {
  title: "DS/Link",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof LinkDemo> = {
  render: () => ({ Component: LinkDemo }),
}

export const External: StoryObj<typeof LinkExternalDemo> = {
  render: () => ({ Component: LinkExternalDemo }),
}

export const Variants: StoryObj<typeof LinkVariantsDemo> = {
  render: () => ({ Component: LinkVariantsDemo }),
}

export const WithinText: StoryObj<typeof LinkWithinTextDemo> = {
  render: () => ({ Component: LinkWithinTextDemo }),
}
