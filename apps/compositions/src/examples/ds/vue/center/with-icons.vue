<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
import { Center } from "@isbatak/vue-ui/center"
import { Icon } from "@isbatak/vue-ui/icon"
</script>

<template>
  <Box display="flex" gap="4">
    <Center w="10" h="10" bg="bg.emphasized" borderRadius="l2">
      <Icon name="phone" />
    </Center>
    <Center w="10" h="10" bg="bg.emphasized" borderRadius="l2">
      <Icon name="mail" />
    </Center>
  </Box>
</template>
