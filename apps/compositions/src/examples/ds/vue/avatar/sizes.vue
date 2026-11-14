<script setup lang="ts">
import { Avatar } from "@isbatak/vue-ui/avatar"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="3">
    <Avatar.Root size="2xs">
      <Avatar.Fallback name="Jane Doe" />
      <Avatar.Image src="https://i.pravatar.cc/300?u=jane-doe" />
    </Avatar.Root>
    <Avatar.Root size="xs">
      <Avatar.Fallback name="Jane Doe" />
      <Avatar.Image src="https://i.pravatar.cc/300?u=jane-doe" />
    </Avatar.Root>
    <Avatar.Root size="sm">
      <Avatar.Fallback name="Jane Doe" />
      <Avatar.Image src="https://i.pravatar.cc/300?u=jane-doe" />
    </Avatar.Root>
    <Avatar.Root size="md">
      <Avatar.Fallback name="Jane Doe" />
      <Avatar.Image src="https://i.pravatar.cc/300?u=jane-doe" />
    </Avatar.Root>
    <Avatar.Root size="lg">
      <Avatar.Fallback name="Jane Doe" />
      <Avatar.Image src="https://i.pravatar.cc/300?u=jane-doe" />
    </Avatar.Root>
    <Avatar.Root size="xl">
      <Avatar.Fallback name="Jane Doe" />
      <Avatar.Image src="https://i.pravatar.cc/300?u=jane-doe" />
    </Avatar.Root>
    <Avatar.Root size="2xl">
      <Avatar.Fallback name="Jane Doe" />
      <Avatar.Image src="https://i.pravatar.cc/300?u=jane-doe" />
    </Avatar.Root>
  </HStack>
</template>
