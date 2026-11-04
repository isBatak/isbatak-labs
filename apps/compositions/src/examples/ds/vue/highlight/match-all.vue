<script setup lang="ts">
import { Highlight } from "@isbatak/vue-ui/highlight"
import { Text } from "@isbatak/vue-ui/text"
</script>

<template>
  <Text>
    <Highlight query="a" text="A banana and a papaya" variant="solid" :matchAll="true" :ignoreCase="true" />
  </Text>
</template>
