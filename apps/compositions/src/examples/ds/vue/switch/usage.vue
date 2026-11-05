<script setup lang="ts">
import { Switch } from "@isbatak/vue-ui/switch"
</script>

<template>
  <Switch.Root :defaultChecked="true">
    <Switch.HiddenInput />
    <Switch.Control>
      <Switch.Thumb />
    </Switch.Control>
    <Switch.Label>Email notifications</Switch.Label>
  </Switch.Root>
</template>
