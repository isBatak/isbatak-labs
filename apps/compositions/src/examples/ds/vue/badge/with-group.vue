<script setup lang="ts">
import { Badge } from "@isbatak/vue-ui/badge"
import { Group } from "@isbatak/vue-ui/group"
</script>

<template>
  <Group :attached="true">
    <Badge variant="solid" colorPalette="blue"> Commit status </Badge>
    <Badge variant="solid" colorPalette="green"> 90+ </Badge>
  </Group>
</template>
