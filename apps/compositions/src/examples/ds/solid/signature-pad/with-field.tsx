import { Field } from "@isbatak/solid-ui/field"
import { SignaturePad } from "@isbatak/solid-ui/signature-pad"

export function SignaturePadWithFieldDemo() {
  return (
    <Field.Root maxW="sm" w="full">
      <SignaturePad.Root>
        <SignaturePad.Label>Signature</SignaturePad.Label>
        <SignaturePad.Control>
          <SignaturePad.Segment />
          <SignaturePad.ClearTrigger />
          <SignaturePad.Guide />
        </SignaturePad.Control>
      </SignaturePad.Root>
      <Field.HelperText>Sign with a mouse, pen or finger.</Field.HelperText>
      <Field.ErrorText>A signature is required.</Field.ErrorText>
    </Field.Root>
  )
}
