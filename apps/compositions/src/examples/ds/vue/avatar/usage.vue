<script setup lang="ts">
import { Avatar } from "@isbatak/vue-ui/avatar"
</script>

<template>
  <Avatar.Root>
    <Avatar.Fallback name="Jane Doe" />
    <Avatar.Image src="https://i.pravatar.cc/300?u=jane-doe" />
  </Avatar.Root>
</template>
