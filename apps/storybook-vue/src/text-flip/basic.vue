<script setup lang="ts">
import { textFlip as textFlipRecipe } from "@isbatak/storybook-shared/recipes"
import { textFlipArgs, textFlipClasses as classes } from "@isbatak/storybook-shared"
import * as textFlip from "@isbatak/zag-text-flip"
import { normalizeProps, useMachine } from "@zag-js/vue"
import { computed, useId } from "vue"

const styles = textFlipRecipe()

const props = withDefaults(
  defineProps<{
    interval?: number
    autoplay?: boolean
    onIndexChange?: (details: textFlip.IndexChangeDetails) => void
  }>(),
  textFlipArgs,
)

const id = useId()
const service = useMachine(
  textFlip.machine,
  computed(() => ({
    id,
    ...props,
  })),
)
const api = computed(() => textFlip.connect(service, normalizeProps))
</script>

<template>
  <main :class="classes.story">
    <h1 :class="classes.heading">
      Build for
      <span v-bind="api.getRootProps()" :class="styles.root">
        <span v-bind="api.getItemProps({ index: 0 })" :class="styles.item">React</span>
        <span v-bind="api.getItemProps({ index: 1 })" :class="styles.item">Vue</span>
        <span v-bind="api.getItemProps({ index: 2 })" :class="styles.item">Svelte</span>
        <span v-bind="api.getItemProps({ index: 3 })" :class="styles.item">Solid</span>
      </span>
    </h1>
  </main>
</template>
