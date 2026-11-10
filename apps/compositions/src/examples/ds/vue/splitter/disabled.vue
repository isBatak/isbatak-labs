<script setup lang="ts">
import { Splitter } from "@isbatak/vue-ui/splitter"
</script>

<template>
  <Splitter.Root
    :panels="[{ id: 'a' }, { id: 'b' }, { id: 'c' }]"
    :defaultSize="[30, 40, 30]"
    minH="60"
    borderWidth="1px"
    borderRadius="l2"
  >
    <Splitter.Panel id="a" display="flex" alignItems="center" justifyContent="center" textStyle="sm" color="fg.muted"
      >A</Splitter.Panel
    >
    <Splitter.ResizeTrigger id="a:b" :disabled="true" />
    <Splitter.Panel id="b" display="flex" alignItems="center" justifyContent="center" textStyle="sm" color="fg.muted"
      >A:B is disabled</Splitter.Panel
    >
    <Splitter.ResizeTrigger id="b:c" />
    <Splitter.Panel id="c" display="flex" alignItems="center" justifyContent="center" textStyle="sm" color="fg.muted"
      >C</Splitter.Panel
    >
  </Splitter.Root>
</template>
