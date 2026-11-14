<script setup lang="ts">
import { Skeleton } from "@isbatak/vue-ui/skeleton"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack gap="5">
    <Skeleton height="5" variant="pulse" />
    <Skeleton height="5" variant="shine" />
  </Stack>
</template>
