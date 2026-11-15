<script setup lang="ts">
import { SignaturePad } from "@isbatak/vue-ui/signature-pad"
</script>

<template>
  <SignaturePad.Root disabled maxW="sm">
    <SignaturePad.Label>Sign below</SignaturePad.Label>
    <SignaturePad.Control>
      <SignaturePad.Segment />
      <SignaturePad.ClearTrigger />
      <SignaturePad.Guide />
    </SignaturePad.Control>
  </SignaturePad.Root>
</template>
