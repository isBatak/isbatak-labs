import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { GridDemo } from "@isbatak/compositions/ds/solid/grid/usage"
import { GridColSpanDemo } from "@isbatak/compositions/ds/solid/grid/col-span"
import { GridInlineDemo } from "@isbatak/compositions/ds/solid/grid/inline"
import { GridSpanningColumnsDemo } from "@isbatak/compositions/ds/solid/grid/spanning-columns"
import { GridTemplateAreasDemo } from "@isbatak/compositions/ds/solid/grid/template-areas"

const meta = {
  title: "DS/Grid",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <GridDemo />,
}

export const ColSpan: Story = {
  render: () => <GridColSpanDemo />,
}

export const Inline: Story = {
  render: () => <GridInlineDemo />,
}

export const SpanningColumns: Story = {
  render: () => <GridSpanningColumnsDemo />,
}

export const TemplateAreas: Story = {
  render: () => <GridTemplateAreasDemo />,
}
