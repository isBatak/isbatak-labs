<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Group } from "@isbatak/vue-ui/group"
</script>

<template>
  <Group :attached="true" orientation="vertical">
    <Button variant="outline">Top</Button>
    <Button variant="outline">Middle</Button>
    <Button variant="outline">Bottom</Button>
  </Group>
</template>
