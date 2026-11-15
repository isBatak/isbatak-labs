<script setup lang="ts">
import { Frame } from "@isbatak/vue-ui/frame"
import { h } from "vue"

const head = () =>
  h(
    "style",
    "body { font-family: system-ui, sans-serif; } .frame-root { padding: 1.5rem; } h1 { font-size: 1.25rem; font-weight: 600; } p { margin-top: 0.5rem; }",
  )
</script>

<template>
  <Frame title="Custom frame">
    <template #head><component :is="head" /></template>
    <h1>Hello from inside the frame!</h1>
    <p>This content renders in an iframe, so the page's styles and scripts don't reach it.</p>
  </Frame>
</template>
