<script setup lang="ts">
import { Badge } from "@isbatak/vue-ui/badge"
import { EndIcon, Icon, StartIcon } from "@isbatak/vue-ui/icon"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="2">
    <Badge variant="solid" colorPalette="blue">
      <StartIcon :asChild="true">
        <Icon name="star" />
      </StartIcon>
      New
    </Badge>
    <Badge variant="surface" colorPalette="green">
      <StartIcon :asChild="true">
        <Icon name="check-circle" />
      </StartIcon>
      Verified
    </Badge>
    <Badge variant="outline" colorPalette="yellow">
      Expiring
      <EndIcon :asChild="true">
        <Icon name="warning" />
      </EndIcon>
    </Badge>
  </HStack>
</template>
