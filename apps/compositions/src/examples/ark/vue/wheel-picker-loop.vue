<script setup lang="ts">
import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
import { WheelPicker } from "@isbatak/ark-wheel-picker/vue"

const items = Array.from({ length: 60 }, (_, minute) => {
  const label = String(minute).padStart(2, "0")
  return { label, value: label }
})

const styles = wheelPickerRecipe()
</script>

<template>
  <WheelPicker.Root :items="items" default-value="30" loop :class="styles.root">
    <WheelPicker.Label :class="styles.label">Minute</WheelPicker.Label>
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
