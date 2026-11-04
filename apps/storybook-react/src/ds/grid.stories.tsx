import type { Meta, StoryObj } from "@storybook/react-vite"
import { GridDemo } from "@isbatak/compositions/ds/react/grid/usage"
import { GridColSpanDemo } from "@isbatak/compositions/ds/react/grid/col-span"
import { GridInlineDemo } from "@isbatak/compositions/ds/react/grid/inline"
import { GridSpanningColumnsDemo } from "@isbatak/compositions/ds/react/grid/spanning-columns"
import { GridTemplateAreasDemo } from "@isbatak/compositions/ds/react/grid/template-areas"

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
