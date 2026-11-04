<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Group } from "@isbatak/vue-ui/group"
</script>

<template>
  <Group :grow="true" w="full" maxW="sm">
    <Button variant="outline">First</Button>
    <Button variant="outline">Second</Button>
    <Button variant="outline">Third</Button>
  </Group>
</template>
