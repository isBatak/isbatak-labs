<script setup lang="ts">
import { Card } from "@isbatak/vue-ui/card"
import { VStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <VStack gap="4">
    <Card.Root size="sm" maxW="sm">
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Description>
          This is the card body. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Card.Description>
      </Card.Body>
    </Card.Root>
    <Card.Root size="md" maxW="sm">
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Description>
          This is the card body. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Card.Description>
      </Card.Body>
    </Card.Root>
    <Card.Root size="lg" maxW="sm">
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Description>
          This is the card body. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Card.Description>
      </Card.Body>
    </Card.Root>
  </VStack>
</template>
