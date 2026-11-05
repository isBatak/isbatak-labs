<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Icon, StartIcon } from "@isbatak/vue-ui/icon"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="1">
    <Button orientation="vertical" variant="ghost" size="sm">
      <StartIcon :asChild="true">
        <Icon name="home" />
      </StartIcon>
      Home
    </Button>
    <Button orientation="vertical" variant="ghost" size="sm">
      <StartIcon :asChild="true">
        <Icon name="search" />
      </StartIcon>
      Search
    </Button>
    <Button orientation="vertical" variant="ghost" size="sm">
      <StartIcon :asChild="true">
        <Icon name="settings" />
      </StartIcon>
      Settings
    </Button>
  </HStack>
</template>
