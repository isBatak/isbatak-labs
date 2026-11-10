<script setup lang="ts">
import { Grid } from "@isbatak/vue-ui/grid"
import { Toc } from "@isbatak/vue-ui/toc"
import { ref } from "vue"
import DemoArticle from "./_demo-article.vue"

const items = [
  { value: "toc-track-introduction", depth: 1 },
  { value: "toc-track-installation", depth: 1 },
  { value: "toc-track-usage", depth: 1 },
  { value: "toc-track-props", depth: 2 },
  { value: "toc-track-events", depth: 2 },
  { value: "toc-track-styling", depth: 1 },
]

const article = ref<{ $el: HTMLElement } | null>(null)
const getScrollEl = () => article.value?.$el ?? null
</script>

<template>
  <Grid gridTemplateColumns="minmax(0, 1fr) 11rem" gap="8" w="full">
    <DemoArticle ref="article" prefix="toc-track" />
    <Toc.Root :items="items" :scrollEl="getScrollEl" variant="track">
      <Toc.List>
        <Toc.Track :scrollEl="getScrollEl" />
        <Toc.Indicator />
        <Toc.Item :item="{ value: 'toc-track-introduction', depth: 1 }">
          <Toc.Link href="#toc-track-introduction">Introduction</Toc.Link>
        </Toc.Item>
        <Toc.Item :item="{ value: 'toc-track-installation', depth: 1 }">
          <Toc.Link href="#toc-track-installation">Installation</Toc.Link>
        </Toc.Item>
        <Toc.Item :item="{ value: 'toc-track-usage', depth: 1 }">
          <Toc.Link href="#toc-track-usage">Usage</Toc.Link>
        </Toc.Item>
        <Toc.Item :item="{ value: 'toc-track-props', depth: 2 }">
          <Toc.Link href="#toc-track-props">Props</Toc.Link>
        </Toc.Item>
        <Toc.Item :item="{ value: 'toc-track-events', depth: 2 }">
          <Toc.Link href="#toc-track-events">Events</Toc.Link>
        </Toc.Item>
        <Toc.Item :item="{ value: 'toc-track-styling', depth: 1 }">
          <Toc.Link href="#toc-track-styling">Styling</Toc.Link>
        </Toc.Item>
      </Toc.List>
    </Toc.Root>
  </Grid>
</template>
