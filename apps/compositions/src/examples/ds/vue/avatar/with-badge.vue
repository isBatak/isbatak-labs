<script setup lang="ts">
import { Avatar } from "@isbatak/vue-ui/avatar"
import { Circle } from "@isbatak/vue-ui/circle"
import { Float } from "@isbatak/vue-ui/float"
</script>

<template>
  <Avatar.Root colorPalette="green" variant="subtle">
    <Avatar.Fallback name="Dari Ann" />
    <Float placement="bottom-end" offsetX="1" offsetY="1">
      <Circle bg="green.solid" size="2" outline="[0.2em solid]" outlineColor="bg" />
    </Float>
  </Avatar.Root>
</template>
