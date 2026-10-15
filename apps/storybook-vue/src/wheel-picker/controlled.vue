<script setup lang="ts">
import { controlledItems } from "@isbatak/storybook-shared"
import { ref } from "vue"
import Picker from "./picker.vue"

const value = ref("react")
</script>

<template>
  <main class="wheel-picker">
    <Picker v-model="value" label="Framework" :items="controlledItems" />
    <div class="wheel-picker-actions">
      <button type="button" @click="value = 'react'">Select React</button>
      <button type="button" @click="value = 'svelte'">Select Svelte</button>
    </div>
    <output data-testid="value">Controlled value: {{ value }}</output>
  </main>
</template>
