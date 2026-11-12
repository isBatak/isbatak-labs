<script setup lang="ts">
import { Avatar, useAvatar } from "@isbatak/vue-ui/avatar"
import { Code } from "@isbatak/vue-ui/code"
import { Stack } from "@isbatak/vue-ui/stack"

const avatar = useAvatar()
</script>

<template>
  <Stack align="flex-start">
    <Avatar.RootProvider :value="avatar">
      <Avatar.Image src="https://bit.ly/sage-adebayo" />
      <Avatar.Fallback name="Segun Adebayo" />
    </Avatar.RootProvider>
    <Code>{{ avatar.loaded ? "loaded" : "not loaded" }}</Code>
  </Stack>
</template>
