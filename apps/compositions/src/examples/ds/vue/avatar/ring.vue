<script setup lang="ts">
import { Avatar } from "@isbatak/vue-ui/avatar"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="4">
    <Avatar.Root :ring="true" colorPalette="pink">
      <Avatar.Fallback name="Random" />
      <Avatar.Image src="https://randomuser.me/api/portraits/men/70.jpg" />
    </Avatar.Root>
    <Avatar.Root :ring="true" colorPalette="green">
      <Avatar.Fallback name="Random" />
      <Avatar.Image src="https://randomuser.me/api/portraits/men/54.jpg" />
    </Avatar.Root>
    <Avatar.Root :ring="true" colorPalette="blue">
      <Avatar.Fallback name="Random" />
      <Avatar.Image src="https://randomuser.me/api/portraits/men/42.jpg" />
    </Avatar.Root>
  </HStack>
</template>
