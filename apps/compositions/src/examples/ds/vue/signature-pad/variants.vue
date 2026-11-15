<script setup lang="ts">
import { SignaturePad } from "@isbatak/vue-ui/signature-pad"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
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
</template>
