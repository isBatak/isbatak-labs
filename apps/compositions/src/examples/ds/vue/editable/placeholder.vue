<script setup lang="ts">
import { Editable } from "@isbatak/vue-ui/editable"
</script>

<template>
  <Editable.Root placeholder="Add a title">
    <Editable.Area>
      <Editable.Preview />
      <Editable.Input />
    </Editable.Area>
  </Editable.Root>
</template>
