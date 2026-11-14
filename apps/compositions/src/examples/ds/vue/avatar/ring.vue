<script setup lang="ts">
import { Avatar } from "@isbatak/vue-ui/avatar"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="4">
    <Avatar.Root :ring="true" colorPalette="pink">
      <Avatar.Fallback name="Ivan Aivazovsky" />
      <Avatar.Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Aivazovsky_-_Self-portrait_1874.jpg/330px-Aivazovsky_-_Self-portrait_1874.jpg"
      />
    </Avatar.Root>
    <Avatar.Root :ring="true" colorPalette="green">
      <Avatar.Fallback name="Paul Cézanne" />
      <Avatar.Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Self_Portrait_with_Bowler_Hat_by_Paul_C%C3%A9zanne%2C_1883-1887_-_Ny_Carlsberg_Glyptotek_-_Copenhagen_-_DSC09427.JPG/330px-Self_Portrait_with_Bowler_Hat_by_Paul_C%C3%A9zanne%2C_1883-1887_-_Ny_Carlsberg_Glyptotek_-_Copenhagen_-_DSC09427.JPG"
      />
    </Avatar.Root>
    <Avatar.Root :ring="true" colorPalette="blue">
      <Avatar.Fallback name="Paul Gauguin" />
      <Avatar.Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Paul_Gauguin_109.jpg/330px-Paul_Gauguin_109.jpg"
      />
    </Avatar.Root>
  </HStack>
</template>
