<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { EndIcon, Icon, StartIcon } from "@isbatak/vue-ui/icon"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="4">
    <Button>
      <StartIcon :asChild="true">
        <Icon name="mail" />
      </StartIcon>
      Email
    </Button>
    <Button variant="outline">
      Call us
      <EndIcon :asChild="true">
        <Icon name="arrow-right" />
      </EndIcon>
    </Button>
  </HStack>
</template>
