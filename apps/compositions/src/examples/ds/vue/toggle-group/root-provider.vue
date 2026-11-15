<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Icon } from "@isbatak/vue-ui/icon"
import { HStack, Stack } from "@isbatak/vue-ui/stack"
import { ToggleGroup, useToggleGroup } from "@isbatak/vue-ui/toggle-group"
import { css } from "styled-system/css"

const toggleGroup = useToggleGroup({ defaultValue: ["left"] })
</script>

<template>
  <Stack gap="3" align="flex-start">
    <HStack gap="3">
      <ToggleGroup.RootProvider :value="toggleGroup" aria-label="Text alignment">
        <ToggleGroup.Item value="left" aria-label="Align left">
          <Icon name="align-left" />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="center" aria-label="Align center">
          <Icon name="align-center" />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="right" aria-label="Align right">
          <Icon name="align-right" />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="justify" aria-label="Justify">
          <Icon name="align-justify" />
        </ToggleGroup.Item>
      </ToggleGroup.RootProvider>
      <Button variant="outline" size="sm" @click="toggleGroup.setValue(['center'])">Set to center</Button>
    </HStack>
    <p :class="css({ color: 'fg.muted', textStyle: 'sm' })">Aligned: {{ toggleGroup.value.join(", ") }}</p>
  </Stack>
</template>
