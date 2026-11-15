export {
  SignaturePadRoot,
  SignaturePadRootProvider,
  SignaturePadLabel,
  SignaturePadControl,
  SignaturePadSegment,
  SignaturePadGuide,
  SignaturePadClearTrigger,
  SignaturePadHiddenInput,
  SignaturePadContext,
} from "./signature-pad"

export type {
  SignaturePadRootProps,
  SignaturePadRootProviderProps,
  SignaturePadLabelProps,
  SignaturePadControlProps,
  SignaturePadSegmentProps,
  SignaturePadGuideProps,
  SignaturePadClearTriggerProps,
  SignaturePadHiddenInputProps,
  SignaturePadContextProps,
} from "./signature-pad"

export { useSignaturePad, useSignaturePadContext } from "@ark-ui/svelte/signature-pad"
export type {
  UseSignaturePadProps,
  UseSignaturePadReturn,
  UseSignaturePadContext,
  SignaturePadDrawDetails,
  SignaturePadDrawEndDetails,
  SignaturePadDrawingOptions,
} from "@ark-ui/svelte/signature-pad"

export * as SignaturePad from "./namespace"
