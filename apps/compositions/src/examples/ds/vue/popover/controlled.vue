<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Popover } from "@isbatak/vue-ui/popover"
import { HStack } from "@isbatak/vue-ui/stack"
import { css } from "styled-system/css"
import { ref } from "vue"

const open = ref(false)
</script>

<template>
  <HStack gap="4">
    <Popover.Root v-model:open="open">
      <Popover.Trigger :asChild="true">
        <Button variant="outline">Show details</Button>
      </Popover.Trigger>
      <Teleport to="body">
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Arrow>
              <Popover.ArrowTip />
            </Popover.Arrow>
            <Popover.Header>
              <Popover.Title>Release notes</Popover.Title>
              <Popover.Description>See what changed in this version.</Popover.Description>
            </Popover.Header>
            <Popover.Footer>
              <Popover.ActionTrigger :asChild="true">
                <Button size="sm">Got it</Button>
              </Popover.ActionTrigger>
            </Popover.Footer>
          </Popover.Content>
        </Popover.Positioner>
      </Teleport>
    </Popover.Root>
    <p :class="css({ color: 'fg.muted', textStyle: 'sm' })">
      {{ open ? "The popover is open" : "The popover is closed" }}
    </p>
  </HStack>
</template>
