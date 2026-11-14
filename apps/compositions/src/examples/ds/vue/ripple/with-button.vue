<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Ripple } from "@isbatak/vue-ui/ripple"
</script>

<template>
  <Ripple :asChild="true">
    <Button variant="outline">Press or use keyboard</Button>
  </Ripple>
</template>
