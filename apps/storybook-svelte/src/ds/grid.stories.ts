import type { Meta, StoryObj } from "@storybook/svelte-vite"
import GridDemo from "@isbatak/compositions/ds/svelte/grid/usage"
import GridColSpanDemo from "@isbatak/compositions/ds/svelte/grid/col-span"
import GridInlineDemo from "@isbatak/compositions/ds/svelte/grid/inline"
import GridSpanningColumnsDemo from "@isbatak/compositions/ds/svelte/grid/spanning-columns"
import GridTemplateAreasDemo from "@isbatak/compositions/ds/svelte/grid/template-areas"

const meta = {
  title: "DS/Grid",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof GridDemo> = {
  render: () => ({ Component: GridDemo }),
}

export const ColSpan: StoryObj<typeof GridColSpanDemo> = {
  render: () => ({ Component: GridColSpanDemo }),
}

export const Inline: StoryObj<typeof GridInlineDemo> = {
  render: () => ({ Component: GridInlineDemo }),
}

export const SpanningColumns: StoryObj<typeof GridSpanningColumnsDemo> = {
  render: () => ({ Component: GridSpanningColumnsDemo }),
}

export const TemplateAreas: StoryObj<typeof GridTemplateAreasDemo> = {
  render: () => ({ Component: GridTemplateAreasDemo }),
}
