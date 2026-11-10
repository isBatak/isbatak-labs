<script setup lang="ts">
import { Grid } from "@isbatak/vue-ui/grid"
import { Toc } from "@isbatak/vue-ui/toc"
import { ref } from "vue"
import DemoArticle from "./_demo-article.vue"

const items = [
  { value: "toc-basic-introduction", depth: 1 },
  { value: "toc-basic-installation", depth: 1 },
  { value: "toc-basic-usage", depth: 1 },
  { value: "toc-basic-props", depth: 2 },
  { value: "toc-basic-events", depth: 2 },
  { value: "toc-basic-styling", depth: 1 },
]

const article = ref<{ $el: HTMLElement } | null>(null)
const getScrollEl = () => article.value?.$el ?? null
</script>

<template>
  <Grid gridTemplateColumns="minmax(0, 1fr) 11rem" gap="8" w="full">
    <DemoArticle ref="article" prefix="toc-basic" />
    <Toc.Root :items="items" :scrollEl="getScrollEl">
      <Toc.Title>On this page</Toc.Title>
      <Toc.List>
        <Toc.Indicator />
        <Toc.Item :item="{ value: 'toc-basic-introduction', depth: 1 }">
          <Toc.Link href="#toc-basic-introduction">Introduction</Toc.Link>
        </Toc.Item>
        <Toc.Item :item="{ value: 'toc-basic-installation', depth: 1 }">
          <Toc.Link href="#toc-basic-installation">Installation</Toc.Link>
        </Toc.Item>
        <Toc.Item :item="{ value: 'toc-basic-usage', depth: 1 }">
          <Toc.Link href="#toc-basic-usage">Usage</Toc.Link>
        </Toc.Item>
        <Toc.Item :item="{ value: 'toc-basic-props', depth: 2 }">
          <Toc.Link href="#toc-basic-props">Props</Toc.Link>
        </Toc.Item>
        <Toc.Item :item="{ value: 'toc-basic-events', depth: 2 }">
          <Toc.Link href="#toc-basic-events">Events</Toc.Link>
        </Toc.Item>
        <Toc.Item :item="{ value: 'toc-basic-styling', depth: 1 }">
          <Toc.Link href="#toc-basic-styling">Styling</Toc.Link>
        </Toc.Item>
      </Toc.List>
    </Toc.Root>
  </Grid>
</template>
