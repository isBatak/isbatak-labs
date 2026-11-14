<script setup lang="ts">
import { Avatar } from "@isbatak/vue-ui/avatar"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="4">
    <Avatar.Root shape="square" size="lg">
      <Avatar.Fallback name="Berthe Morisot" />
      <Avatar.Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Edouard_Manet_-_Berthe_Morisot_With_a_Bouquet_of_Violets_-_Google_Art_Project.jpg/330px-Edouard_Manet_-_Berthe_Morisot_With_a_Bouquet_of_Violets_-_Google_Art_Project.jpg"
      />
    </Avatar.Root>
    <Avatar.Root shape="rounded" size="lg">
      <Avatar.Fallback name="Vincent van Gogh" />
      <Avatar.Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/330px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg"
      />
    </Avatar.Root>
    <Avatar.Root shape="full" size="lg">
      <Avatar.Fallback name="Judith Leyster" />
      <Avatar.Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Judith_Leyster_-_Self-Portrait_-_Google_Art_Project.jpg/330px-Judith_Leyster_-_Self-Portrait_-_Google_Art_Project.jpg"
      />
    </Avatar.Root>
  </HStack>
</template>
