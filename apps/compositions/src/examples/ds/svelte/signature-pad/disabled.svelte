<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { SignaturePad } from "@isbatak/svelte-ui/signature-pad"
</script>

<Box maxW="sm" w="full">
  <SignaturePad.Root disabled>
    <SignaturePad.Label>Sign below</SignaturePad.Label>
    <SignaturePad.Control>
      <SignaturePad.Segment />
      <SignaturePad.ClearTrigger />
      <SignaturePad.Guide />
    </SignaturePad.Control>
  </SignaturePad.Root>
</Box>
