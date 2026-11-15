<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { ref } from "vue"
import { SignaturePad } from "@isbatak/vue-ui/signature-pad"
import { Stack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"

const paths = ref<string[]>([])
</script>

<template>
  <Stack gap="3" maxW="sm" w="full" align="flex-start">
    <Text textStyle="sm" color="fg.muted"> Paths: {{ paths.length }} </Text>
    <SignaturePad.Root v-model:paths="paths">
      <SignaturePad.Label>Sign below</SignaturePad.Label>
      <SignaturePad.Control>
        <SignaturePad.Segment />
        <SignaturePad.ClearTrigger />
        <SignaturePad.Guide />
      </SignaturePad.Control>
    </SignaturePad.Root>
    <Button variant="outline" size="sm" @click="paths = []"> Clear </Button>
  </Stack>
</template>
