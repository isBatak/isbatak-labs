<script setup lang="ts">
import { Avatar } from "@isbatak/vue-ui/avatar"
import { HStack, Stack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"
</script>

<template>
  <Stack gap="8">
    <HStack gap="4">
      <Avatar.Root>
        <Avatar.Fallback name="Edgar Degas" />
        <Avatar.Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Edgar_Degas_self_portrait_1855.jpeg/330px-Edgar_Degas_self_portrait_1855.jpeg"
        />
      </Avatar.Root>
      <Stack gap="0">
        <Text fontWeight="medium">Edgar Degas</Text>
        <Text color="fg.muted" textStyle="sm">john.mason@example.com</Text>
      </Stack>
    </HStack>
    <HStack gap="4">
      <Avatar.Root>
        <Avatar.Fallback name="Mary Cassatt" />
        <Avatar.Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Mary_Cassatt-Selfportrait.jpg/330px-Mary_Cassatt-Selfportrait.jpg"
        />
      </Avatar.Root>
      <Stack gap="0">
        <Text fontWeight="medium">Mary Cassatt</Text>
        <Text color="fg.muted" textStyle="sm">melissa.jones@example.com</Text>
      </Stack>
    </HStack>
  </Stack>
</template>
