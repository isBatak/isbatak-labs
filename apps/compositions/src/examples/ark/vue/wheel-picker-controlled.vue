<script setup lang="ts">
import { css } from "styled-system/css"
import { wheelPicker as wheelPickerRecipe } from "styled-system/recipes"
import { WheelPicker } from "@isbatak/ark-wheel-picker/vue"
import { ref } from "vue"

const items = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
]

const styles = wheelPickerRecipe()

const classes = {
  root: css({ display: "grid", gap: "4" }),
  actions: css({ display: "flex", justifyContent: "center", gap: "2" }),
  button: css({
    px: "3",
    py: "1.5",
    borderWidth: "1px",
    borderRadius: "l2",
    textStyle: "sm",
    cursor: "button",
    _hover: { bg: "bg.muted" },
  }),
  output: css({ color: "fg.muted", textStyle: "sm", textAlign: "center" }),
}

const value = ref("react")
</script>

<template>
  <div :class="classes.root">
    <WheelPicker.Root :items="items" v-model="value" :class="styles.root">
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
    <div :class="classes.actions">
      <button type="button" :class="classes.button" @click="value = 'react'">React</button>
      <button type="button" :class="classes.button" @click="value = 'svelte'">Svelte</button>
    </div>
    <output :class="classes.output">Value: {{ value }}</output>
  </div>
</template>
