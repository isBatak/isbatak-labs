<script setup lang="ts">
import { frameworkItems, wheelPickerArgs } from "@isbatak/storybook-shared"
import type * as wheelPicker from "@isbatak/zag-wheel-picker"
import { ref } from "vue"
import Picker from "./picker.vue"

const props = withDefaults(
  defineProps<{
    disabled?: boolean
    loop?: boolean
    visibleCount?: number
    itemHeight?: number
    onValueChange?: (details: wheelPicker.ValueChangeDetails) => void
  }>(),
  wheelPickerArgs,
)

const value = ref("react")

function onValueChange(details: wheelPicker.ValueChangeDetails) {
  value.value = details.value
  props.onValueChange?.(details)
}
</script>

<template>
  <main class="wheel-picker">
    <Picker
      label="Framework"
      name="framework"
      default-value="react"
      :items="frameworkItems"
      :disabled="disabled"
      :loop="loop"
      :visible-count="visibleCount"
      :item-height="itemHeight"
      @value-change="onValueChange"
    />
    <output data-testid="value">Selected: {{ value }}</output>
  </main>
</template>
