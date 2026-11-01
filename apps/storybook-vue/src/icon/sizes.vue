<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { iconClasses as classes } from "@isbatak/storybook-shared"
</script>

<template>
  <div :class="classes.row">
    <Icon name="star" size="xs" />
    <Icon name="star" size="sm" />
    <Icon name="star" size="md" />
    <Icon name="star" size="lg" />
    <Icon name="star" size="xl" />
    <Icon name="star" size="2xl" />
  </div>
</template>
