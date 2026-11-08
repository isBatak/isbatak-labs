<script setup lang="ts">
import { NativeSelect } from "@isbatak/vue-ui/native-select"
</script>

<template>
  <NativeSelect.Root maxW="xs">
    <NativeSelect.Field aria-label="Fruit or vegetable">
      <optgroup label="Fruits">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
      </optgroup>
      <optgroup label="Vegetables">
        <option value="carrot">Carrot</option>
        <option value="pea">Pea</option>
      </optgroup>
    </NativeSelect.Field>
    <NativeSelect.Indicator />
  </NativeSelect.Root>
</template>
