<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { SignaturePad, useSignaturePad } from "@isbatak/vue-ui/signature-pad"
import { Stack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"

const signaturePad = useSignaturePad()
</script>

<template>
  <Stack gap="3" maxW="sm" w="full" align="flex-start">
    <Text textStyle="sm" color="fg.muted"> Paths: {{ signaturePad.paths.length }} </Text>
    <SignaturePad.RootProvider :value="signaturePad">
      <SignaturePad.Label>Sign below</SignaturePad.Label>
      <SignaturePad.Control>
        <SignaturePad.Segment />
        <SignaturePad.ClearTrigger />
        <SignaturePad.Guide />
      </SignaturePad.Control>
    </SignaturePad.RootProvider>
    <Button variant="outline" size="sm" @click="signaturePad.clear()"> Clear </Button>
  </Stack>
</template>
