<script setup lang="ts">
import { Editable } from "@isbatak/vue-ui/editable"
</script>

<template>
  <Editable.Root defaultValue="Click to edit">
    <Editable.Area>
      <Editable.Preview />
      <Editable.Input />
    </Editable.Area>
  </Editable.Root>
</template>
