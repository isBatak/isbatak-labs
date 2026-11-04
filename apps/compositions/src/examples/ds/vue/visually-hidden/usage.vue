<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Icon } from "@isbatak/vue-ui/icon"
import { VisuallyHidden } from "@isbatak/vue-ui/visually-hidden"
</script>

<template>
  <Button variant="outline">
    <Icon name="bell" />
    <VisuallyHidden>3 new notifications</VisuallyHidden>
  </Button>
</template>
