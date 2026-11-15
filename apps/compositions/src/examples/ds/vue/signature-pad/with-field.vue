<script setup lang="ts">
import { Field } from "@isbatak/vue-ui/field"
import { SignaturePad } from "@isbatak/vue-ui/signature-pad"
</script>

<template>
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
</template>
