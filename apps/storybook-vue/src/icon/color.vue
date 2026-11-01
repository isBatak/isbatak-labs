<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { iconClasses as classes } from "@isbatak/storybook-shared"
</script>

<template>
  <span :class="classes.error">
    <Icon name="warning" size="md" />
    Something went wrong
  </span>
</template>
