import type { HTMLArkProps } from "@ark-ui/vue/factory"
import { Editable } from "@ark-ui/vue/editable"
import type { ComponentProps } from "vue-component-type-helpers"
import type { FunctionalComponent } from "vue"
import { editable } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"

const { withProvider, withContext } = createSlotRecipeContext(editable)

export const EditableRoot = withProvider(Editable.Root, "root")
export type EditableRootProps = ComponentProps<typeof EditableRoot>

export const EditableRootProvider = withProvider(Editable.RootProvider, "root")
export type EditableRootProviderProps = ComponentProps<typeof EditableRootProvider>

export const EditableLabel = withContext(Editable.Label, "label")
export type EditableLabelProps = ComponentProps<typeof EditableLabel>

export const EditableArea = withContext(Editable.Area, "area")
export type EditableAreaProps = ComponentProps<typeof EditableArea>

export const EditablePreview = withContext(Editable.Preview, "preview")
export type EditablePreviewProps = ComponentProps<typeof EditablePreview>

export const EditableInput = withContext(
  Editable.Input as unknown as FunctionalComponent<HTMLArkProps<"input">>,
  "input",
)
export type EditableInputProps = ComponentProps<typeof EditableInput>

export const EditableControl = withContext(Editable.Control, "control")
export type EditableControlProps = ComponentProps<typeof EditableControl>

export const EditableEditTrigger = withContext(Editable.EditTrigger, "editTrigger")
export type EditableEditTriggerProps = ComponentProps<typeof EditableEditTrigger>

export const EditableSubmitTrigger = withContext(Editable.SubmitTrigger, "submitTrigger")
export type EditableSubmitTriggerProps = ComponentProps<typeof EditableSubmitTrigger>

export const EditableCancelTrigger = withContext(Editable.CancelTrigger, "cancelTrigger")
export type EditableCancelTriggerProps = ComponentProps<typeof EditableCancelTrigger>

export const EditableContext = Editable.Context
export type EditableContextProps = ComponentProps<typeof EditableContext>
