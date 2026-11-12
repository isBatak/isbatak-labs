<script setup lang="ts">
import { Badge } from "@isbatak/vue-ui/badge"
import { Stack } from "@isbatak/vue-ui/stack"
import { Wrap } from "@isbatak/vue-ui/wrap"
</script>

<template>
  <Stack gap="6">
    <Wrap gap="2">
      <Badge :status="true" variant="outline" colorPalette="gray"> Neutral </Badge>
      <Badge :status="true" variant="outline" colorPalette="blue"> Info </Badge>
      <Badge :status="true" variant="outline" colorPalette="green"> Success </Badge>
      <Badge :status="true" variant="outline" colorPalette="yellow"> Warning </Badge>
      <Badge :status="true" variant="outline" colorPalette="red"> Error </Badge>
    </Wrap>
    <Wrap gap="2">
      <Badge :status="true" variant="plain" colorPalette="gray"> Neutral </Badge>
      <Badge :status="true" variant="plain" colorPalette="blue"> Info </Badge>
      <Badge :status="true" variant="plain" colorPalette="green"> Success </Badge>
      <Badge :status="true" variant="plain" colorPalette="yellow"> Warning </Badge>
      <Badge :status="true" variant="plain" colorPalette="red"> Error </Badge>
    </Wrap>
    <Wrap gap="2">
      <Badge :status="true" variant="solid" colorPalette="green"> Solid </Badge>
      <Badge :status="true" variant="subtle" colorPalette="green"> Subtle </Badge>
      <Badge :status="true" variant="surface" colorPalette="green"> Surface </Badge>
    </Wrap>
  </Stack>
</template>
