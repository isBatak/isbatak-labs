<script setup lang="ts">
import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
import * as wheelPicker from "@isbatak/zag-wheel-picker"
import { normalizeProps } from "@zag-js/vue"
import { computed, onBeforeUnmount, onMounted, ref, useId, watch } from "vue"

const items = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular", disabled: true },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
  { label: "Preact", value: "preact" },
  { label: "Qwik", value: "qwik" },
  { label: "Lit", value: "lit" },
]

const styles = wheelPickerRecipe()

const id = useId()
const value = ref("react")
const picker = wheelPicker.createWheelPicker()

const props = computed<wheelPicker.Props>(() => ({
  id,
  items,
  value: value.value,
  onValueChange: (details) => (value.value = details.value),
}))

let stop: (() => void) | undefined

onMounted(() => {
  stop = picker.mount(() => props.value)
  picker.sync(props.value)
})

onBeforeUnmount(() => stop?.())

watch(value, () => picker.sync(props.value), { flush: "post" })

const api = computed(() => picker.connect(props.value, normalizeProps))
</script>

<template>
  <div v-bind="api.getRootProps()" :class="styles.root">
    <span v-bind="api.getLabelProps()" :class="styles.label">Framework</span>
    <div v-bind="api.getControlProps()" :class="styles.control">
      <div v-bind="api.getViewportProps()" :class="styles.viewport">
        <div v-bind="api.getItemGroupProps()" :class="styles.itemGroup">
          <div v-for="{ row, item } in api.rows" :key="row" v-bind="api.getItemProps({ row })" :class="styles.item">
            {{ item.label }}
          </div>
        </div>
      </div>
      <div v-bind="api.getHighlightProps()" :class="styles.highlight" />
    </div>
    <input v-bind="api.getHiddenInputProps()" />
  </div>
</template>
