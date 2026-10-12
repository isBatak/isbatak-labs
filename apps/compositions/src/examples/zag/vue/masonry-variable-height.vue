<script setup lang="ts">
import { css } from "styled-system/css"
import { masonry as masonryRecipe } from "styled-system/recipes"
import * as masonry from "@isbatak/zag-masonry"
import { normalizeProps } from "@zag-js/vue"
import { computed, onBeforeUnmount, onMounted, shallowRef, useId } from "vue"

const styles = masonryRecipe()

const classes = {
  details: css({ color: "fg.muted", textStyle: "sm" }),
  summary: css({ px: "3", py: "2", color: "fg", fontWeight: "medium", cursor: "pointer" }),
  content: css({ px: "3", pb: "3" }),
}

const controller = masonry.createMasonry()
const layout = shallowRef<masonry.Layout | null>(null)
const masonryProps: masonry.Props = { id: useId(), columns: 3 }

let stop: (() => void) | undefined

onMounted(() => {
  stop = controller.mount(
    () => masonryProps,
    (next) => (layout.value = next),
  )
})

onBeforeUnmount(() => stop?.())

const api = computed(() => controller.connect(masonryProps, layout.value, normalizeProps))
</script>

<template>
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
</template>
