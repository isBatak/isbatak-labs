<script setup lang="ts">
import { css } from "styled-system/css"
import { masonry as masonryRecipe } from "styled-system/recipes"
import * as masonry from "@isbatak/zag-masonry"
import { normalizeProps, useMachine } from "@zag-js/vue"
import { computed, useId } from "vue"

const styles = masonryRecipe()

const classes = {
  tile: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "fg.muted",
    textStyle: "sm",
  }),
}

const service = useMachine(masonry.machine, {
  id: useId(),
  columns: 4,
})

const api = computed(() => masonry.connect(service, normalizeProps))
</script>

<template>
  <div v-bind="api.getRootProps()" :class="styles.root">
    <div v-bind="api.getItemProps({ value: '1' })" :class="styles.item">
      <div :class="classes.tile" :style="{ height: '150px' }">1</div>
    </div>
    <div v-bind="api.getItemProps({ value: '2' })" :class="styles.item">
      <div :class="classes.tile" :style="{ height: '30px' }">2</div>
    </div>
    <div v-bind="api.getItemProps({ value: '3' })" :class="styles.item">
      <div :class="classes.tile" :style="{ height: '90px' }">3</div>
    </div>
    <div v-bind="api.getItemProps({ value: '4' })" :class="styles.item">
      <div :class="classes.tile" :style="{ height: '70px' }">4</div>
    </div>
    <div v-bind="api.getItemProps({ value: '5' })" :class="styles.item">
      <div :class="classes.tile" :style="{ height: '110px' }">5</div>
    </div>
    <div v-bind="api.getItemProps({ value: '6' })" :class="styles.item">
      <div :class="classes.tile" :style="{ height: '150px' }">6</div>
    </div>
    <div v-bind="api.getItemProps({ value: '7' })" :class="styles.item">
      <div :class="classes.tile" :style="{ height: '130px' }">7</div>
    </div>
    <div v-bind="api.getItemProps({ value: '8' })" :class="styles.item">
      <div :class="classes.tile" :style="{ height: '80px' }">8</div>
    </div>
    <div v-bind="api.getItemProps({ value: '9' })" :class="styles.item">
      <div :class="classes.tile" :style="{ height: '50px' }">9</div>
    </div>
    <div v-bind="api.getItemProps({ value: '10' })" :class="styles.item">
      <div :class="classes.tile" :style="{ height: '90px' }">10</div>
    </div>
    <div v-bind="api.getItemProps({ value: '11' })" :class="styles.item">
      <div :class="classes.tile" :style="{ height: '100px' }">11</div>
    </div>
    <div v-bind="api.getItemProps({ value: '12' })" :class="styles.item">
      <div :class="classes.tile" :style="{ height: '150px' }">12</div>
    </div>
    <div v-bind="api.getItemProps({ value: '13' })" :class="styles.item">
      <div :class="classes.tile" :style="{ height: '30px' }">13</div>
    </div>
    <div v-bind="api.getItemProps({ value: '14' })" :class="styles.item">
      <div :class="classes.tile" :style="{ height: '50px' }">14</div>
    </div>
    <div v-bind="api.getItemProps({ value: '15' })" :class="styles.item">
      <div :class="classes.tile" :style="{ height: '80px' }">15</div>
    </div>
  </div>
</template>
