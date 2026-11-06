<script setup lang="ts">
import { Editable } from "@isbatak/vue-ui/editable"
</script>

<template>
  <Editable.Root defaultValue="Double-click to edit" activationMode="dblclick">
    <Editable.Area>
      <Editable.Preview />
      <Editable.Input />
    </Editable.Area>
  </Editable.Root>
</template>
