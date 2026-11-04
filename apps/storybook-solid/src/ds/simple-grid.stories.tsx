import type { Meta, StoryObj } from "storybook-solidjs-vite"
import { SimpleGridDemo } from "@isbatak/compositions/ds/solid/simple-grid/usage"
import { SimpleGridAutofitDemo } from "@isbatak/compositions/ds/solid/simple-grid/autofit"
import { SimpleGridColSpanDemo } from "@isbatak/compositions/ds/solid/simple-grid/col-span"
import { SimpleGridResponsiveColumnsDemo } from "@isbatak/compositions/ds/solid/simple-grid/responsive-columns"
import { SimpleGridRowAndColumnGapDemo } from "@isbatak/compositions/ds/solid/simple-grid/row-and-column-gap"

const meta = {
  title: "DS/Simple grid",
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Usage: Story = {
  render: () => <SimpleGridDemo />,
}

export const Autofit: Story = {
  render: () => <SimpleGridAutofitDemo />,
}

export const ColSpan: Story = {
  render: () => <SimpleGridColSpanDemo />,
}

export const ResponsiveColumns: Story = {
  render: () => <SimpleGridResponsiveColumnsDemo />,
}

export const RowAndColumnGap: Story = {
  render: () => <SimpleGridRowAndColumnGapDemo />,
}
