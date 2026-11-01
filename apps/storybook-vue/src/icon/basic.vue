<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { type IconControls, iconArgs } from "@isbatak/storybook-shared"

const props = withDefaults(defineProps<Partial<IconControls>>(), iconArgs)
</script>

<template>
  <Icon :name="props.name" :size="props.size" />
</template>
