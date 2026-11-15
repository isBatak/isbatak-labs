"use client"

import { SignaturePad } from "@ark-ui/react/signature-pad"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { signaturePad } from "@isbatak/panda-ds/recipes"
import { Icon } from "../icon/icon"

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

export function SignaturePadClearTrigger({ children, ...props }: SignaturePadClearTriggerProps) {
  return <StyledSignaturePadClearTrigger {...props}>{children ?? <Icon name="undo" />}</StyledSignaturePadClearTrigger>
}

export const SignaturePadHiddenInput = SignaturePad.HiddenInput
export type SignaturePadHiddenInputProps = ComponentProps<typeof SignaturePadHiddenInput>

export const SignaturePadContext = SignaturePad.Context
export type SignaturePadContextProps = SignaturePad.ContextProps
