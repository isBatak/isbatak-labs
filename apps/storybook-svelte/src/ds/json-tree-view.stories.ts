import type { Meta, StoryObj } from "@storybook/svelte-vite"
import JsonTreeViewDemo from "@isbatak/compositions/ds/svelte/json-tree-view/usage"
import JsonTreeViewArrayDataDemo from "@isbatak/compositions/ds/svelte/json-tree-view/array-data"
import JsonTreeViewErrorsDemo from "@isbatak/compositions/ds/svelte/json-tree-view/errors"
import JsonTreeViewExpandLevelDemo from "@isbatak/compositions/ds/svelte/json-tree-view/expand-level"
import JsonTreeViewFunctionsDemo from "@isbatak/compositions/ds/svelte/json-tree-view/functions"
import JsonTreeViewMapAndSetDemo from "@isbatak/compositions/ds/svelte/json-tree-view/map-and-set"
import JsonTreeViewRegexDemo from "@isbatak/compositions/ds/svelte/json-tree-view/regex"
import JsonTreeViewRenderValueDemo from "@isbatak/compositions/ds/svelte/json-tree-view/render-value"
import JsonTreeViewRootProviderDemo from "@isbatak/compositions/ds/svelte/json-tree-view/root-provider"
import JsonTreeViewIndentGuideDemo from "@isbatak/compositions/ds/svelte/json-tree-view/indent-guide"
import JsonTreeViewVariantsDemo from "@isbatak/compositions/ds/svelte/json-tree-view/variants"
import JsonTreeViewSizesDemo from "@isbatak/compositions/ds/svelte/json-tree-view/sizes"

const meta = {
  title: "DS/JSON tree view",
} satisfies Meta

export default meta

export const Usage: StoryObj<typeof JsonTreeViewDemo> = {
  render: () => ({ Component: JsonTreeViewDemo }),
}

export const ArrayData: StoryObj<typeof JsonTreeViewArrayDataDemo> = {
  render: () => ({ Component: JsonTreeViewArrayDataDemo }),
}

export const Errors: StoryObj<typeof JsonTreeViewErrorsDemo> = {
  render: () => ({ Component: JsonTreeViewErrorsDemo }),
}

export const ExpandLevel: StoryObj<typeof JsonTreeViewExpandLevelDemo> = {
  render: () => ({ Component: JsonTreeViewExpandLevelDemo }),
}

export const Functions: StoryObj<typeof JsonTreeViewFunctionsDemo> = {
  render: () => ({ Component: JsonTreeViewFunctionsDemo }),
}

export const MapAndSet: StoryObj<typeof JsonTreeViewMapAndSetDemo> = {
  render: () => ({ Component: JsonTreeViewMapAndSetDemo }),
}

export const Regex: StoryObj<typeof JsonTreeViewRegexDemo> = {
  render: () => ({ Component: JsonTreeViewRegexDemo }),
}

export const RenderValue: StoryObj<typeof JsonTreeViewRenderValueDemo> = {
  render: () => ({ Component: JsonTreeViewRenderValueDemo }),
}

export const RootProvider: StoryObj<typeof JsonTreeViewRootProviderDemo> = {
  render: () => ({ Component: JsonTreeViewRootProviderDemo }),
}

export const IndentGuide: StoryObj<typeof JsonTreeViewIndentGuideDemo> = {
  render: () => ({ Component: JsonTreeViewIndentGuideDemo }),
}

export const Variants: StoryObj<typeof JsonTreeViewVariantsDemo> = {
  render: () => ({ Component: JsonTreeViewVariantsDemo }),
}

export const Sizes: StoryObj<typeof JsonTreeViewSizesDemo> = {
  render: () => ({ Component: JsonTreeViewSizesDemo }),
}
