<script setup lang="ts">
import { Frame } from "@isbatak/vue-ui/frame"
import { Heading } from "@isbatak/vue-ui/heading"
import { Text } from "@isbatak/vue-ui/text"
import { useTemplateRef } from "vue"

const container = useTemplateRef<HTMLDivElement>("container")

function onMount() {
  const head = container.value?.querySelector("iframe")?.contentDocument?.head
  if (!head) return
  for (const node of document.head.querySelectorAll('style, link[rel="stylesheet"]')) {
    head.appendChild(node.cloneNode(true))
  }
}
</script>

<template>
  <div ref="container">
    <Frame title="Frame with the page's styles" @mount="onMount">
      <Heading size="lg" p="6" pb="1">Ark UI / Frame</Heading>
      <Text color="fg.muted" px="6" pb="6">
        This component renders in an iframe that copied the page's stylesheets when it mounted.
      </Text>
    </Frame>
  </div>
</template>
