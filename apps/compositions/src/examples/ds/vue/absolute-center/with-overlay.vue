<script setup lang="ts">
import { AbsoluteCenter } from "@isbatak/vue-ui/absolute-center"
import { Box } from "@isbatak/vue-ui/box"
import { Spinner } from "@isbatak/vue-ui/spinner"
</script>

<template>
  <Box position="relative" h="32" w="full" maxW="sm" borderWidth="1px" borderRadius="l2" p="4" color="fg.muted">
    Loading the report…
    <AbsoluteCenter>
      <Spinner />
    </AbsoluteCenter>
  </Box>
</template>
