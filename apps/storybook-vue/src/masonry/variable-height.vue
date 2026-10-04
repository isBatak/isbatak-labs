<script setup lang="ts">
import { masonry as masonryRecipe } from "@isbatak/storybook-shared/recipes"
import { formatLayout, masonryArgs, masonryClasses as classes } from "@isbatak/storybook-shared"
import * as masonry from "@isbatak/zag-masonry"
import { normalizeProps, useMachine } from "@zag-js/vue"
import { computed, useId } from "vue"

const styles = masonryRecipe()

const props = withDefaults(
  defineProps<{
    columns?: number
    gap?: number
    sequential?: boolean
    minColumnWidth?: string
    dir?: "ltr" | "rtl"
    onLayoutChange?: (details: masonry.LayoutChangeDetails) => void
  }>(),
  masonryArgs,
)

const id = useId()
const service = useMachine(
  masonry.machine,
  computed(() => ({
    id,
    ...props,
  })),
)
const api = computed(() => masonry.connect(service, normalizeProps))
</script>

<template>
  <main :class="classes.story">
    <div v-bind="api.getRootProps()" :class="styles.root">
      <div v-bind="api.getItemProps({ value: '1' })" :class="styles.item">
        <details :class="classes.details" :style="{ minHeight: '150px' }">
          <summary :class="classes.summary">Accordion 1</summary>
          <p :class="classes.content">Contents</p>
        </details>
      </div>
      <div v-bind="api.getItemProps({ value: '2' })" :class="styles.item">
        <details :class="classes.details" :style="{ minHeight: '30px' }">
          <summary :class="classes.summary">Accordion 2</summary>
          <p :class="classes.content">Contents</p>
        </details>
      </div>
      <div v-bind="api.getItemProps({ value: '3' })" :class="styles.item">
        <details :class="classes.details" :style="{ minHeight: '90px' }">
          <summary :class="classes.summary">Accordion 3</summary>
          <p :class="classes.content">Contents</p>
        </details>
      </div>
      <div v-bind="api.getItemProps({ value: '4' })" :class="styles.item">
        <details :class="classes.details" :style="{ minHeight: '70px' }">
          <summary :class="classes.summary">Accordion 4</summary>
          <p :class="classes.content">Contents</p>
        </details>
      </div>
      <div v-bind="api.getItemProps({ value: '5' })" :class="styles.item">
        <details :class="classes.details" :style="{ minHeight: '90px' }">
          <summary :class="classes.summary">Accordion 5</summary>
          <p :class="classes.content">Contents</p>
        </details>
      </div>
      <div v-bind="api.getItemProps({ value: '6' })" :class="styles.item">
        <details :class="classes.details" :style="{ minHeight: '100px' }">
          <summary :class="classes.summary">Accordion 6</summary>
          <p :class="classes.content">Contents</p>
        </details>
      </div>
      <div v-bind="api.getItemProps({ value: '7' })" :class="styles.item">
        <details :class="classes.details" :style="{ minHeight: '150px' }">
          <summary :class="classes.summary">Accordion 7</summary>
          <p :class="classes.content">Contents</p>
        </details>
      </div>
      <div v-bind="api.getItemProps({ value: '8' })" :class="styles.item">
        <details :class="classes.details" :style="{ minHeight: '30px' }">
          <summary :class="classes.summary">Accordion 8</summary>
          <p :class="classes.content">Contents</p>
        </details>
      </div>
      <div v-bind="api.getItemProps({ value: '9' })" :class="styles.item">
        <details :class="classes.details" :style="{ minHeight: '50px' }">
          <summary :class="classes.summary">Accordion 9</summary>
          <p :class="classes.content">Contents</p>
        </details>
      </div>
      <div v-bind="api.getItemProps({ value: '10' })" :class="styles.item">
        <details :class="classes.details" :style="{ minHeight: '80px' }">
          <summary :class="classes.summary">Accordion 10</summary>
          <p :class="classes.content">Contents</p>
        </details>
      </div>
    </div>
    <output data-testid="layout">{{ formatLayout(api.columns) }}</output>
  </main>
</template>
