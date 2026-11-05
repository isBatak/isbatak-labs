<script setup lang="ts">
import { RadioGroup } from "@isbatak/vue-ui/radio-group"
import { HStack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <RadioGroup.Root defaultValue="1" :disabled="true">
    <HStack gap="6">
      <RadioGroup.Item value="1">
        <RadioGroup.ItemHiddenInput />
        <RadioGroup.ItemIndicator />
        <RadioGroup.ItemText>Option 1</RadioGroup.ItemText>
      </RadioGroup.Item>
      <RadioGroup.Item value="2">
        <RadioGroup.ItemHiddenInput />
        <RadioGroup.ItemIndicator />
        <RadioGroup.ItemText>Option 2</RadioGroup.ItemText>
      </RadioGroup.Item>
    </HStack>
  </RadioGroup.Root>
</template>
