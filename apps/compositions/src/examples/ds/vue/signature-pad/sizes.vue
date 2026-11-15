<script setup lang="ts">
import { SignaturePad } from "@isbatak/vue-ui/signature-pad"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack gap="6" maxW="sm" w="full">
    <SignaturePad.Root size="sm">
      <SignaturePad.Label>Small</SignaturePad.Label>
      <SignaturePad.Control>
        <SignaturePad.Segment />
        <SignaturePad.ClearTrigger />
        <SignaturePad.Guide />
      </SignaturePad.Control>
    </SignaturePad.Root>
    <SignaturePad.Root size="md">
      <SignaturePad.Label>Medium</SignaturePad.Label>
      <SignaturePad.Control>
        <SignaturePad.Segment />
        <SignaturePad.ClearTrigger />
        <SignaturePad.Guide />
      </SignaturePad.Control>
    </SignaturePad.Root>
    <SignaturePad.Root size="lg">
      <SignaturePad.Label>Large</SignaturePad.Label>
      <SignaturePad.Control>
        <SignaturePad.Segment />
        <SignaturePad.ClearTrigger />
        <SignaturePad.Guide />
      </SignaturePad.Control>
    </SignaturePad.Root>
  </Stack>
</template>
