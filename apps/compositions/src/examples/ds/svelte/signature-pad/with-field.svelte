<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { Field } from "@isbatak/svelte-ui/field"
  import { SignaturePad } from "@isbatak/svelte-ui/signature-pad"
</script>

<Box maxW="sm" w="full">
  <Field.Root>
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
</Box>
