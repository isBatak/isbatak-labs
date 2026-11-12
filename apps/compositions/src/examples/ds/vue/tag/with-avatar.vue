<script setup lang="ts">
import { Avatar } from "@isbatak/vue-ui/avatar"
import { Tag } from "@isbatak/vue-ui/tag"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="2">
    <Tag.Root size="sm" rounded="full">
      <Tag.StartElement>
        <Avatar.Root size="full">
          <Avatar.Image src="https://bit.ly/sage-adebayo" />
          <Avatar.Fallback name="Segun Adebayo" />
        </Avatar.Root>
      </Tag.StartElement>
      <Tag.Label>Segun</Tag.Label>
    </Tag.Root>
    <Tag.Root size="md" rounded="full">
      <Tag.StartElement>
        <Avatar.Root size="full">
          <Avatar.Image src="https://bit.ly/sage-adebayo" />
          <Avatar.Fallback name="Segun Adebayo" />
        </Avatar.Root>
      </Tag.StartElement>
      <Tag.Label>Segun</Tag.Label>
    </Tag.Root>
    <Tag.Root size="lg" rounded="full">
      <Tag.StartElement>
        <Avatar.Root size="full">
          <Avatar.Image src="https://bit.ly/sage-adebayo" />
          <Avatar.Fallback name="Segun Adebayo" />
        </Avatar.Root>
      </Tag.StartElement>
      <Tag.Label>Segun</Tag.Label>
    </Tag.Root>
    <Tag.Root size="xl" rounded="full">
      <Tag.StartElement>
        <Avatar.Root size="full">
          <Avatar.Image src="https://bit.ly/sage-adebayo" />
          <Avatar.Fallback name="Segun Adebayo" />
        </Avatar.Root>
      </Tag.StartElement>
      <Tag.Label>Segun</Tag.Label>
    </Tag.Root>
  </HStack>
</template>
