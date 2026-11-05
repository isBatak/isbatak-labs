import { Clipboard } from "@ark-ui/vue/clipboard"
import { clipboard } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import type { ComponentProps } from "vue-component-type-helpers"

const { withProvider, withContext } = createSlotRecipeContext(clipboard)

export const ClipboardRoot = withProvider(Clipboard.Root, "root")
export type ClipboardRootProps = ComponentProps<typeof ClipboardRoot>

export const ClipboardLabel = withContext(Clipboard.Label, "label")
export type ClipboardLabelProps = ComponentProps<typeof ClipboardLabel>

export const ClipboardControl = withContext(Clipboard.Control, "control")
export type ClipboardControlProps = ComponentProps<typeof ClipboardControl>

export const ClipboardInput = Clipboard.Input
export type ClipboardInputProps = Clipboard.InputProps

export const ClipboardTrigger = withContext(Clipboard.Trigger, "trigger")
export type ClipboardTriggerProps = ComponentProps<typeof ClipboardTrigger>

export const ClipboardIndicator = withContext(Clipboard.Indicator, "indicator")
export type ClipboardIndicatorProps = ComponentProps<typeof ClipboardIndicator>

export const ClipboardValueText = withContext(Clipboard.ValueText, "valueText")
export type ClipboardValueTextProps = ComponentProps<typeof ClipboardValueText>

export const ClipboardContext = Clipboard.Context
