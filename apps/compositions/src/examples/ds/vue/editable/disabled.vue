<script setup lang="ts">
import { Editable } from "@isbatak/vue-ui/editable"
</script>

<template>
  <Editable.Root defaultValue="Can't edit this" :disabled="true">
    <Editable.Area>
      <Editable.Preview />
      <Editable.Input />
    </Editable.Area>
  </Editable.Root>
</template>
