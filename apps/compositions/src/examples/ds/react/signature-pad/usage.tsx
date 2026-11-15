import { SignaturePad } from "@isbatak/react-ui/signature-pad"

export function SignaturePadDemo() {
  return (
    <SignaturePad.Root maxW="sm">
      <SignaturePad.Label>Sign below</SignaturePad.Label>
      <SignaturePad.Control>
        <SignaturePad.Segment />
        <SignaturePad.ClearTrigger />
        <SignaturePad.Guide />
      </SignaturePad.Control>
    </SignaturePad.Root>
  )
}
