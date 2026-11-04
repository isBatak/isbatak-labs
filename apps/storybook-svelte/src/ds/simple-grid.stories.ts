import type { Meta, StoryObj } from "@storybook/svelte-vite"
import SimpleGridDemo from "@isbatak/compositions/ds/svelte/simple-grid/usage"
import SimpleGridAutofitDemo from "@isbatak/compositions/ds/svelte/simple-grid/autofit"
import SimpleGridColSpanDemo from "@isbatak/compositions/ds/svelte/simple-grid/col-span"
import SimpleGridResponsiveColumnsDemo from "@isbatak/compositions/ds/svelte/simple-grid/responsive-columns"
import SimpleGridRowAndColumnGapDemo from "@isbatak/compositions/ds/svelte/simple-grid/row-and-column-gap"

const meta = {
  title: "DS/Simple grid",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof SimpleGridDemo> = {
  render: () => ({ Component: SimpleGridDemo }),
}

export const Autofit: StoryObj<typeof SimpleGridAutofitDemo> = {
  render: () => ({ Component: SimpleGridAutofitDemo }),
}

export const ColSpan: StoryObj<typeof SimpleGridColSpanDemo> = {
  render: () => ({ Component: SimpleGridColSpanDemo }),
}

export const ResponsiveColumns: StoryObj<typeof SimpleGridResponsiveColumnsDemo> = {
  render: () => ({ Component: SimpleGridResponsiveColumnsDemo }),
}

export const RowAndColumnGap: StoryObj<typeof SimpleGridRowAndColumnGapDemo> = {
  render: () => ({ Component: SimpleGridRowAndColumnGapDemo }),
}
