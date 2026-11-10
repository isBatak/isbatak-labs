import type { Meta, StoryObj } from "@storybook/svelte-vite"
import AccordionDemo from "@isbatak/compositions/ds/svelte/accordion/usage"
import AccordionSizesDemo from "@isbatak/compositions/ds/svelte/accordion/sizes"
import AccordionVariantsDemo from "@isbatak/compositions/ds/svelte/accordion/variants"
import AccordionControlledDemo from "@isbatak/compositions/ds/svelte/accordion/controlled"
import AccordionMultipleDemo from "@isbatak/compositions/ds/svelte/accordion/multiple"
import AccordionDisabledItemDemo from "@isbatak/compositions/ds/svelte/accordion/disabled-item"
import AccordionWithIconDemo from "@isbatak/compositions/ds/svelte/accordion/with-icon"
import AccordionWithSubtextDemo from "@isbatak/compositions/ds/svelte/accordion/with-subtext"

const meta = {
  title: "DS/Accordion",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof AccordionDemo> = {
  render: () => ({ Component: AccordionDemo }),
}

export const Sizes: StoryObj<typeof AccordionSizesDemo> = {
  render: () => ({ Component: AccordionSizesDemo }),
}

export const Variants: StoryObj<typeof AccordionVariantsDemo> = {
  render: () => ({ Component: AccordionVariantsDemo }),
}

export const Controlled: StoryObj<typeof AccordionControlledDemo> = {
  render: () => ({ Component: AccordionControlledDemo }),
}

export const Multiple: StoryObj<typeof AccordionMultipleDemo> = {
  render: () => ({ Component: AccordionMultipleDemo }),
}

export const DisabledItem: StoryObj<typeof AccordionDisabledItemDemo> = {
  render: () => ({ Component: AccordionDisabledItemDemo }),
}

export const WithIcon: StoryObj<typeof AccordionWithIconDemo> = {
  render: () => ({ Component: AccordionWithIconDemo }),
}

export const WithSubtext: StoryObj<typeof AccordionWithSubtextDemo> = {
  render: () => ({ Component: AccordionWithSubtextDemo }),
}
