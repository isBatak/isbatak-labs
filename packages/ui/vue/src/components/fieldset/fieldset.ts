import { ark } from "@ark-ui/vue/factory"
import { Fieldset } from "@ark-ui/vue/fieldset"
import { fieldset } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import type { ComponentProps } from "vue-component-type-helpers"

const { withProvider, withContext } = createSlotRecipeContext(fieldset)

export const FieldsetRoot = withProvider(Fieldset.Root, "root")
export type FieldsetRootProps = ComponentProps<typeof FieldsetRoot>

export const FieldsetLegend = withContext(Fieldset.Legend, "legend")
export type FieldsetLegendProps = ComponentProps<typeof FieldsetLegend>

export const FieldsetContent = withContext(ark.div, "content")
export type FieldsetContentProps = ComponentProps<typeof FieldsetContent>

export const FieldsetHelperText = withContext(Fieldset.HelperText, "helperText")
export type FieldsetHelperTextProps = ComponentProps<typeof FieldsetHelperText>

export const FieldsetErrorText = withContext(Fieldset.ErrorText, "errorText")
export type FieldsetErrorTextProps = ComponentProps<typeof FieldsetErrorText>

export const FieldsetContext = Fieldset.Context
export type FieldsetContextProps = Fieldset.ContextProps
