<script setup lang="ts">
import { Tabs } from "@isbatak/vue-ui/tabs"
import { onMounted, onUnmounted, ref } from "vue"
import { token } from "styled-system/tokens"

const query = `(min-width: ${token("breakpoints.md")})`
const wide = ref(false)
let media: MediaQueryList | undefined
const update = () => {
  wide.value = media?.matches ?? false
}

onMounted(() => {
  media = window.matchMedia(query)
  update()
  media.addEventListener("change", update)
})
onUnmounted(() => media?.removeEventListener("change", update))
</script>

<template>
  <Tabs.Root minW="md" variant="subtle" defaultValue="members" :orientation="wide ? 'vertical' : 'horizontal'">
    <Tabs.List>
      <Tabs.Trigger value="members">Members</Tabs.Trigger>
      <Tabs.Trigger value="projects">Projects</Tabs.Trigger>
      <Tabs.Trigger value="tasks">Tasks</Tabs.Trigger>
      <Tabs.Indicator />
    </Tabs.List>
    <Tabs.Content value="members">Manage your team members and their roles here.</Tabs.Content>
    <Tabs.Content value="projects">Manage your projects and their status here.</Tabs.Content>
    <Tabs.Content value="tasks">Manage your tasks and their progress here.</Tabs.Content>
  </Tabs.Root>
</template>
