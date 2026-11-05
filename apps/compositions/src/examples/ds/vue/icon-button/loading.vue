<script setup lang="ts">
import { IconButton } from "@isbatak/vue-ui/button"
import { Icon } from "@isbatak/vue-ui/icon"
</script>

<template>
  <IconButton aria-label="Upload" variant="outline" :loading="true">
    <Icon name="upload" />
  </IconButton>
</template>
