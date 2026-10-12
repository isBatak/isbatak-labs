<script setup lang="ts">
import { css } from "styled-system/css"
import { textFlip as textFlipRecipe } from "styled-system/recipes"
import * as textFlip from "@isbatak/zag-text-flip"
import { normalizeProps, useMachine } from "@zag-js/vue"
import { computed, useId } from "vue"

const styles = textFlipRecipe()

const classes = {
  heading: css({ textStyle: "3xl", fontWeight: "semibold", letterSpacing: "tight" }),
}

const service = useMachine(textFlip.machine, {
  id: useId(),
})

const api = computed(() => textFlip.connect(service, normalizeProps))
</script>

<template>
  <p :class="classes.heading">
    Build for
    <span v-bind="api.getRootProps()" :class="styles.root">
      <span v-bind="api.getItemProps({ index: 0 })" :class="styles.item">React</span>
      <span v-bind="api.getItemProps({ index: 1 })" :class="styles.item">Vue</span>
      <span v-bind="api.getItemProps({ index: 2 })" :class="styles.item">Svelte</span>
      <span v-bind="api.getItemProps({ index: 3 })" :class="styles.item">Solid</span>
    </span>
  </p>
</template>
