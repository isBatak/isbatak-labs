<script setup lang="ts">
import { hourItems, meridiemItems, minuteItems } from "@isbatak/storybook-shared"
import { ref } from "vue"
import Picker from "./picker.vue"

const hour = ref("9")
const minute = ref("41")
const meridiem = ref("AM")
</script>

<template>
  <main class="wheel-picker">
    <div class="wheel-picker-group" role="group" aria-label="Time">
      <Picker v-model="hour" label="Hour" name="hour" :items="hourItems" loop />
      <Picker v-model="minute" label="Minute" name="minute" :items="minuteItems" loop />
      <Picker v-model="meridiem" label="Meridiem" name="meridiem" :items="meridiemItems" />
    </div>
    <output data-testid="value">Selected time: {{ hour }}:{{ minute }} {{ meridiem }}</output>
  </main>
</template>
