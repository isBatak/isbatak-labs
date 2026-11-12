<script setup lang="ts">
import { Card } from "@isbatak/vue-ui/card"
import { Button } from "@isbatak/vue-ui/button"
</script>

<template>
  <Card.Root maxW="sm" :interactive="true">
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Description>
        This is the card body. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Card.Description>
    </Card.Body>
    <Card.Footer>
      <Button variant="outline">View</Button>
      <Button>Join</Button>
    </Card.Footer>
  </Card.Root>
</template>
