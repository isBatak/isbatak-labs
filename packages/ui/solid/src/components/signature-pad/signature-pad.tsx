import { SignaturePad } from "@ark-ui/solid/signature-pad"
import { Show, splitProps, type ComponentProps } from "solid-js"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
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

export function SignaturePadClearTrigger(props: SignaturePadClearTriggerProps) {
  const [local, rest] = splitProps(props, ["children"])
  return (
    <StyledSignaturePadClearTrigger {...rest}>
      <Show when={local.children} fallback={<Icon name="undo" />}>
        {local.children}
      </Show>
    </StyledSignaturePadClearTrigger>
  )
}

export const SignaturePadHiddenInput = SignaturePad.HiddenInput
export type SignaturePadHiddenInputProps = ComponentProps<typeof SignaturePadHiddenInput>

export const SignaturePadContext = SignaturePad.Context
export type SignaturePadContextProps = SignaturePad.ContextProps
