<script setup lang="ts">
import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
import { createWheelPickerCollection, WheelPicker } from "@isbatak/ark-wheel-picker/vue"

const collection = createWheelPickerCollection({
  items: [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Angular", value: "angular", disabled: true },
    { label: "Svelte", value: "svelte" },
    { label: "Solid", value: "solid" },
    { label: "Preact", value: "preact" },
    { label: "Qwik", value: "qwik" },
    { label: "Lit", value: "lit" },
  ],
})

const styles = wheelPickerRecipe()
</script>

<template>
  <WheelPicker.Root :collection="collection" default-value="react" :class="styles.root">
    <WheelPicker.Label :class="styles.label">Framework</WheelPicker.Label>
    <WheelPicker.Control :class="styles.control">
      <WheelPicker.Viewport :class="styles.viewport">
        <WheelPicker.ItemGroup :class="styles.itemGroup">
          <WheelPicker.Context v-slot="api">
            <WheelPicker.Item
              v-for="{ item, index, key } in api.items"
              :key="key"
              :item="item"
              :index="index"
              :class="styles.item"
            >
              {{ item.label }}
            </WheelPicker.Item>
          </WheelPicker.Context>
        </WheelPicker.ItemGroup>
        <WheelPicker.Highlight :class="styles.highlight">
          <WheelPicker.HighlightItemGroup :class="styles.highlightItemGroup">
            <WheelPicker.Context v-slot="api">
              <WheelPicker.HighlightItem
                v-for="{ item, index, key } in api.highlightItems"
                :key="key"
                :item="item"
                :index="index"
                :class="styles.highlightItem"
              >
                {{ item.label }}
              </WheelPicker.HighlightItem>
            </WheelPicker.Context>
          </WheelPicker.HighlightItemGroup>
        </WheelPicker.Highlight>
      </WheelPicker.Viewport>
    </WheelPicker.Control>
    <WheelPicker.HiddenSelect />
  </WheelPicker.Root>
</template>
