<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
import { Center } from "@isbatak/vue-ui/center"
import { Icon } from "@isbatak/vue-ui/icon"
</script>

<template>
  <Box :asChild="true" color="fg">
    <a href="#center">
      <Center :inline="true" gap="2">
        <Icon name="external-link" />
        Visit the docs
      </Center>
    </a>
  </Box>
</template>
