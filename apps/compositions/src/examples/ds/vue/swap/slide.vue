<script setup lang="ts">
import { ref } from "vue"
import { Button } from "@isbatak/vue-ui/button"
import { Center } from "@isbatak/vue-ui/center"
import { Stack } from "@isbatak/vue-ui/stack"
import { Swap } from "@isbatak/vue-ui/swap"

const swapped = ref(false)
</script>

<template>
  <Stack gap="4" alignItems="flex-start">
    <Button variant="outline" @click="swapped = !swapped">Next account</Button>
    <Swap.Root
      variant="slide"
      :swap="swapped"
      :data-direction="swapped ? 'forward' : 'backward'"
      w="60"
      h="32"
      borderRadius="l3"
    >
      <Swap.Indicator type="off">
        <Center boxSize="full" bg="bg.emphasized" color="fg" borderRadius="l3" fontWeight="medium">Account 5</Center>
      </Swap.Indicator>
      <Swap.Indicator type="on">
        <Center
          boxSize="full"
          bg="colorPalette.solid"
          color="colorPalette.contrast"
          borderRadius="l3"
          fontWeight="medium"
        >
          Account 7
        </Center>
      </Swap.Indicator>
    </Swap.Root>
  </Stack>
</template>
