import { SignaturePad } from "@isbatak/react-ui/signature-pad"

export function SignaturePadDisabledDemo() {
  return (
    <SignaturePad.Root disabled maxW="sm">
      <SignaturePad.Label>Sign below</SignaturePad.Label>
      <SignaturePad.Control>
        <SignaturePad.Segment />
        <SignaturePad.ClearTrigger />
        <SignaturePad.Guide />
      </SignaturePad.Control>
    </SignaturePad.Root>
  )
}
