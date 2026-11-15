<script setup lang="ts">
import { Frame } from "@isbatak/vue-ui/frame"
import { h, useTemplateRef } from "vue"

const container = useTemplateRef<HTMLDivElement>("container")
const head = () =>
  h(
    "style",
    "body { font-family: system-ui, sans-serif; } .frame-root { padding: 1.5rem; } h1 { font-size: 1.25rem; font-weight: 600; } p { margin-top: 0.5rem; }",
  )

function onMount() {
  const doc = container.value?.querySelector("iframe")?.contentDocument
  if (!doc) return
  const script = doc.createElement("script")
  script.textContent = 'document.getElementById("output").textContent = "Written by a script running inside the frame."'
  doc.body.appendChild(script)
}
</script>

<template>
  <div ref="container">
    <Frame title="Frame with a script" @mount="onMount">
      <template #head><component :is="head" /></template>
      <h1>Hello from inside the frame!</h1>
      <p id="output">Waiting for the script…</p>
    </Frame>
  </div>
</template>
