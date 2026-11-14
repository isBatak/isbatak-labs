<script setup lang="ts">
import { Avatar, useAvatar } from "@isbatak/vue-ui/avatar"
import { Code } from "@isbatak/vue-ui/code"
import { Stack } from "@isbatak/vue-ui/stack"

const avatar = useAvatar()
</script>

<template>
  <Stack align="flex-start">
    <Avatar.RootProvider :value="avatar">
      <Avatar.Image src="https://i.pravatar.cc/300?u=jane-doe" />
      <Avatar.Fallback name="Jane Doe" />
    </Avatar.RootProvider>
    <Code>{{ avatar.loaded ? "loaded" : "not loaded" }}</Code>
  </Stack>
</template>
