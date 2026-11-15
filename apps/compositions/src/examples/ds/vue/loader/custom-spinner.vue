<script setup lang="ts">
import { Loader } from "@isbatak/vue-ui/loader"
import { Spinner } from "@isbatak/vue-ui/spinner"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <HStack gap="2" textStyle="sm" fontWeight="medium" colorPalette="blue">
    <Loader text="Saving…">
      <template #spinner>
        <Spinner size="sm" :showTrack="true" color="colorPalette.solid" />
      </template>
    </Loader>
  </HStack>
</template>
