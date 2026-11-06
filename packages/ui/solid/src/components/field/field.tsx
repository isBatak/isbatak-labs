import { ark } from "@ark-ui/solid/factory"
import { Field, useFieldContext } from "@ark-ui/solid/field"
import { type ComponentProps, Show, splitProps } from "solid-js"
import { field } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"

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
export function FieldRequiredIndicator(props: FieldRequiredIndicatorProps) {
  const [local, rest] = splitProps(props, ["children"])
  return <StyledRequiredIndicator {...rest}>{local.children ?? "*"}</StyledRequiredIndicator>
}

function OptionalText(props: ComponentProps<typeof ark.span>) {
  const fieldContext = useFieldContext()
  const [local, rest] = splitProps(props, ["children"])
  return (
    <Show when={!fieldContext?.().required}>
      <ark.span {...rest}>{local.children ?? "(optional)"}</ark.span>
    </Show>
  )
}

export const FieldOptionalText = withContext(OptionalText, "optionalText")
export type FieldOptionalTextProps = ComponentProps<typeof FieldOptionalText>

export const FieldContext = Field.Context
export type FieldContextProps = Field.ContextProps
