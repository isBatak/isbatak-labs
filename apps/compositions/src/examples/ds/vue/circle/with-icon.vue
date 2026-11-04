<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
import { Circle } from "@isbatak/vue-ui/circle"
import { Icon } from "@isbatak/vue-ui/icon"
import { Square } from "@isbatak/vue-ui/square"
</script>

<template>
  <Box display="flex" gap="4" alignItems="center">
    <Circle size="10" bg="bg.inverted" color="fg.inverted">
      <Icon name="check" />
    </Circle>
    <Square size="10" borderWidth="1px" borderRadius="l2">
      <Icon name="plus" />
    </Square>
  </Box>
</template>
