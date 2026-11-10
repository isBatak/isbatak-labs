<script setup lang="ts">
import { Splitter } from "@isbatak/vue-ui/splitter"
</script>

<template>
  <Splitter.Root
    orientation="vertical"
    :panels="[{ id: 'a' }, { id: 'b' }]"
    :defaultSize="[50, 50]"
    minH="60"
    borderWidth="1px"
    borderRadius="l2"
  >
    <Splitter.Panel id="a" display="flex" alignItems="center" justifyContent="center" textStyle="sm" color="fg.muted"
      >A</Splitter.Panel
    >
    <Splitter.ResizeTrigger id="a:b" />
    <Splitter.Panel id="b" display="flex" alignItems="center" justifyContent="center" textStyle="sm" color="fg.muted"
      >B</Splitter.Panel
    >
  </Splitter.Root>
</template>
