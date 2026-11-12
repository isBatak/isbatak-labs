<script setup lang="ts">
import { Stat } from "@isbatak/vue-ui/stat"
import { HStack } from "@isbatak/vue-ui/stack"
import { Badge } from "@isbatak/vue-ui/badge"
</script>

<template>
  <Stat.Root>
    <Stat.Label>Revenue</Stat.Label>
    <HStack>
      <Stat.ValueText>$8,456.40</Stat.ValueText>
      <Badge colorPalette="green" gap="0">
        <Stat.UpIndicator />
        12%
      </Badge>
    </HStack>
    <Stat.HelpText>since last month</Stat.HelpText>
  </Stat.Root>
</template>
