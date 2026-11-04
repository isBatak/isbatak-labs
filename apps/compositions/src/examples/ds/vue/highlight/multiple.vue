<script setup lang="ts">
import { Highlight } from "@isbatak/vue-ui/highlight"
import { Text } from "@isbatak/vue-ui/text"
</script>

<template>
  <Text>
    <Highlight
      :query="['spotlight', 'emphasize']"
      text="Spotlight or emphasize several words at once."
      variant="subtle"
      :ignoreCase="true"
    />
  </Text>
</template>
