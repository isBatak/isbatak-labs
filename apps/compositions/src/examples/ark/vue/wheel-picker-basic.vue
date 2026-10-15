<script setup lang="ts">
import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
import { WheelPicker } from "@isbatak/ark-wheel-picker/vue"

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
</script>

<template>
  <WheelPicker.Root :items="items" default-value="react" :class="styles.root">
    <WheelPicker.Label :class="styles.label">Framework</WheelPicker.Label>
    <WheelPicker.Control :class="styles.control">
      <WheelPicker.Viewport :class="styles.viewport">
        <WheelPicker.ItemGroup :class="styles.itemGroup">
          <WheelPicker.Context v-slot="api">
            <WheelPicker.Item v-for="{ row, item } in api.rows" :key="row" :row="row" :class="styles.item">
              {{ item.label }}
            </WheelPicker.Item>
          </WheelPicker.Context>
        </WheelPicker.ItemGroup>
      </WheelPicker.Viewport>
      <WheelPicker.Highlight :class="styles.highlight" />
    </WheelPicker.Control>
    <WheelPicker.HiddenInput />
  </WheelPicker.Root>
</template>
