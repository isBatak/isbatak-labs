<script setup lang="ts">
import { masonry as masonryRecipe } from "@isbatak/storybook-shared/recipes"
import {
  formatLayout,
  initialMasonryTiles,
  masonryArgs,
  masonryClasses as classes,
  nextMasonryTile,
} from "@isbatak/storybook-shared"
import * as masonry from "@isbatak/zag-masonry"
import { normalizeProps, useMachine } from "@zag-js/vue"
import { computed, ref, useId } from "vue"

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

const tiles = ref(initialMasonryTiles)

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
    <div :class="classes.actions">
      <button type="button" :class="classes.button" @click="tiles = [...tiles, nextMasonryTile(tiles)]">
        Add item
      </button>
      <button type="button" :class="classes.button" @click="tiles = tiles.slice(1)">Remove first item</button>
    </div>
    <div v-bind="api.getRootProps()" :class="styles.root">
      <div
        v-for="tile in tiles"
        :key="tile.value"
        v-bind="api.getItemProps({ value: tile.value })"
        :class="styles.item"
      >
        <div :class="classes.tile" :style="{ height: `${tile.height}px` }">{{ tile.value }}</div>
      </div>
    </div>
    <output data-testid="layout">{{ formatLayout(api.columns) }}</output>
  </main>
</template>
