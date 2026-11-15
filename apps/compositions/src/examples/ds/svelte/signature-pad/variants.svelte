<script lang="ts">
  import { SignaturePad } from "@isbatak/svelte-ui/signature-pad"
  import { Stack } from "@isbatak/svelte-ui/stack"
</script>

<Stack gap="6" maxW="sm" w="full">
  <SignaturePad.Root variant="outline">
    <SignaturePad.Label>Outline</SignaturePad.Label>
    <SignaturePad.Control>
      <SignaturePad.Segment />
      <SignaturePad.ClearTrigger />
      <SignaturePad.Guide />
    </SignaturePad.Control>
  </SignaturePad.Root>
  <SignaturePad.Root variant="subtle">
    <SignaturePad.Label>Subtle</SignaturePad.Label>
    <SignaturePad.Control>
      <SignaturePad.Segment />
      <SignaturePad.ClearTrigger />
      <SignaturePad.Guide />
    </SignaturePad.Control>
  </SignaturePad.Root>
</Stack>
