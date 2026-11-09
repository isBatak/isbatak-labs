<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { HStack } from "@isbatak/vue-ui/stack"
import { Tooltip } from "@isbatak/vue-ui/tooltip"
import { css } from "styled-system/css"
import { ref } from "vue"

const open = ref(false)
</script>

<template>
  <HStack gap="4">
    <Tooltip.Root v-model:open="open">
      <Tooltip.Trigger :asChild="true">
        <Button variant="outline">Hover me</Button>
      </Tooltip.Trigger>
      <Teleport to="body">
        <Tooltip.Positioner>
          <Tooltip.Content>
            <Tooltip.Arrow>
              <Tooltip.ArrowTip />
            </Tooltip.Arrow>
            Saved to your library
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Teleport>
    </Tooltip.Root>
    <p :class="css({ color: 'fg.muted', textStyle: 'sm' })">
      {{ open ? "The tooltip is open" : "The tooltip is closed" }}
    </p>
  </HStack>
</template>
