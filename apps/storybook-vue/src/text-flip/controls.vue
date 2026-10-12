<script setup lang="ts">
import { textFlip as textFlipRecipe } from "@isbatak/storybook-shared/recipes"
import { formatTextFlip, textFlipArgs, textFlipClasses as classes } from "@isbatak/storybook-shared"
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
      <span v-bind="api.getRootProps()" :class="styles.root">
        <span v-bind="api.getItemProps({ index: 0 })" :class="styles.item">Hello</span>
        <span v-bind="api.getItemProps({ index: 1 })" :class="styles.item">Bonjour</span>
        <span v-bind="api.getItemProps({ index: 2 })" :class="styles.item">Hola</span>
        <span v-bind="api.getItemProps({ index: 3 })" :class="styles.item">Ciao</span>
        <span v-bind="api.getItemProps({ index: 4 })" :class="styles.item">Hallo</span>
      </span>
    </h1>
    <div :class="classes.actions">
      <button type="button" :class="classes.button" @click="api.prev()">Previous</button>
      <button type="button" :class="classes.button" @click="api.playing ? api.pause() : api.play()">
        {{ api.playing ? "Pause" : "Play" }}
      </button>
      <button type="button" :class="classes.button" @click="api.next()">Next</button>
      <button type="button" :class="classes.button" @click="api.goTo(0)">First</button>
    </div>
    <output :class="classes.status" data-testid="status">{{ formatTextFlip(api.index, 5, api.playing) }}</output>
  </main>
</template>
