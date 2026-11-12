<script setup lang="ts">
import { Avatar } from "@isbatak/vue-ui/avatar"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack>
    <Avatar.Root>
      <Avatar.Fallback name="Oshigaki Kisame" />
      <Avatar.Image src="https://bit.ly/broken-link" />
    </Avatar.Root>
    <Avatar.Root colorPalette="teal">
      <Avatar.Fallback name="Sasuke Uchiha" />
      <Avatar.Image src="https://bit.ly/broken-link" />
    </Avatar.Root>
    <Avatar.Root colorPalette="red">
      <Avatar.Fallback />
      <Avatar.Image src="https://bit.ly/broken-link" />
    </Avatar.Root>
  </HStack>
</template>
