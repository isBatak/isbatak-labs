import { Field, useFieldContext } from "@ark-ui/vue/field"
import { field } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { type FunctionalComponent, type HTMLAttributes, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

const { withProvider, withContext } = createSlotRecipeContext(field)

export const FieldRoot = withProvider(Field.Root, "root")
export type FieldRootProps = ComponentProps<typeof FieldRoot>

export const FieldRootProvider = withProvider(Field.RootProvider, "root")
export type FieldRootProviderProps = ComponentProps<typeof FieldRootProvider>

export const FieldLabel = withContext(Field.Label, "label")
export type FieldLabelProps = ComponentProps<typeof FieldLabel>

export const FieldHelperText = withContext(Field.HelperText, "helperText")
export type FieldHelperTextProps = ComponentProps<typeof FieldHelperText>

export const FieldErrorText = withContext(Field.ErrorText, "errorText")
export type FieldErrorTextProps = ComponentProps<typeof FieldErrorText>

const StyledRequiredIndicator = withContext(Field.RequiredIndicator, "requiredIndicator")

export type FieldRequiredIndicatorProps = ComponentProps<typeof StyledRequiredIndicator>
export const FieldRequiredIndicator: FunctionalComponent<FieldRequiredIndicatorProps> = (props, { slots }) =>
  h(StyledRequiredIndicator, props, { ...slots, default: () => slots.default?.() ?? "*" })

const OptionalText = defineComponent({
  name: "FieldOptionalText",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    const fieldContext = useFieldContext()
    return () => (fieldContext?.value.required ? null : h("span", attrs, slots.default?.() ?? "(optional)"))
  },
}) as unknown as FunctionalComponent<HTMLAttributes>

export const FieldOptionalText = withContext(OptionalText, "optionalText")
export type FieldOptionalTextProps = ComponentProps<typeof FieldOptionalText>

export const FieldContext = Field.Context
export type FieldContextProps = Field.ContextProps
