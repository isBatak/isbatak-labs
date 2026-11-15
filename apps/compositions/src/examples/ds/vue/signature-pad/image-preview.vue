<script setup lang="ts">
import { Image } from "@isbatak/vue-ui/image"
import { ref } from "vue"
import { SignaturePad } from "@isbatak/vue-ui/signature-pad"
import { Stack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"

const imageUrl = ref("")
</script>

<template>
  <Stack gap="4" maxW="sm" w="full">
    <SignaturePad.Root @draw-end="(details) => details.getDataUrl('image/png').then((url) => (imageUrl = url))">
      <SignaturePad.Label>Sign below</SignaturePad.Label>
      <SignaturePad.Control>
        <SignaturePad.Segment />
        <SignaturePad.ClearTrigger />
        <SignaturePad.Guide />
      </SignaturePad.Control>
    </SignaturePad.Root>
    <Stack gap="2">
      <Text textStyle="sm" fontWeight="medium"> Preview </Text>
      <Image
        v-if="imageUrl"
        :src="imageUrl"
        alt="Signature preview"
        bg="white"
        borderRadius="l2"
        borderWidth="1px"
        maxW="full"
      />
    </Stack>
  </Stack>
</template>
