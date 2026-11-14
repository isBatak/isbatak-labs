<script setup lang="ts">
import { Badge } from "@isbatak/vue-ui/badge"
import { Skeleton } from "@isbatak/vue-ui/skeleton"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="4">
    <Skeleton :loading="true">
      <Badge>Select</Badge>
    </Skeleton>
    <Skeleton :loading="false">
      <Badge>Select</Badge>
    </Skeleton>
  </HStack>
</template>
