import { SignaturePad, type SignaturePadContextProps as ArkSignaturePadContextProps } from "@ark-ui/vue/signature-pad"
import { defineComponent, h, type Component } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { signaturePad } from "@isbatak/panda-ds/recipes"
import { Icon } from "../icon"

const { withProvider, withContext } = createSlotRecipeContext(signaturePad)

export const SignaturePadRoot = withProvider(SignaturePad.Root, "root")
export type SignaturePadRootProps = ComponentProps<typeof SignaturePadRoot>

export const SignaturePadRootProvider = withProvider(SignaturePad.RootProvider, "root")
export type SignaturePadRootProviderProps = ComponentProps<typeof SignaturePadRootProvider>

export const SignaturePadLabel = withContext(SignaturePad.Label, "label")
export type SignaturePadLabelProps = ComponentProps<typeof SignaturePadLabel>

export const SignaturePadControl = withContext(SignaturePad.Control, "control")
export type SignaturePadControlProps = ComponentProps<typeof SignaturePadControl>

export const SignaturePadSegment = withContext(SignaturePad.Segment, "segment")
export type SignaturePadSegmentProps = ComponentProps<typeof SignaturePadSegment>

export const SignaturePadGuide = withContext(SignaturePad.Guide, "guide")
export type SignaturePadGuideProps = ComponentProps<typeof SignaturePadGuide>

const StyledSignaturePadClearTrigger = withContext(SignaturePad.ClearTrigger, "clearTrigger")
export type SignaturePadClearTriggerProps = ComponentProps<typeof StyledSignaturePadClearTrigger>

export const SignaturePadClearTrigger = defineComponent({
  name: "SignaturePadClearTrigger",
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () =>
      h(StyledSignaturePadClearTrigger as Component, attrs, slots.default ?? (() => h(Icon, { name: "undo" })))
  },
}) as unknown as typeof StyledSignaturePadClearTrigger

export const SignaturePadHiddenInput = SignaturePad.HiddenInput
export type SignaturePadHiddenInputProps = ComponentProps<typeof SignaturePadHiddenInput>

export const SignaturePadContext = SignaturePad.Context
export type SignaturePadContextProps = ArkSignaturePadContextProps
