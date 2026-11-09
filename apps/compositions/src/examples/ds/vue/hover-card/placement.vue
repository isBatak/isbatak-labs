<script setup lang="ts">
import { HoverCard } from "@isbatak/vue-ui/hover-card"
import { HStack } from "@isbatak/vue-ui/stack"
import { css } from "styled-system/css"
</script>

<template>
  <HStack gap="6">
    <HoverCard.Root :positioning="{ placement: 'top' }">
      <HoverCard.Trigger :asChild="true">
        <a href="https://ark-ui.com" :class="css({ textDecoration: 'underline', textUnderlineOffset: '4px' })">Top</a>
      </HoverCard.Trigger>
      <Teleport to="body">
        <HoverCard.Positioner>
          <HoverCard.Content maxW="xs">
            <HoverCard.Arrow>
              <HoverCard.ArrowTip />
            </HoverCard.Arrow>
            <p :class="css({ fontWeight: 'medium' })">Ark UI</p>
            <p :class="css({ textStyle: 'sm', color: 'fg.muted' })">
              Headless components for React, Vue, Solid and Svelte.
            </p>
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Teleport>
    </HoverCard.Root>
    <HoverCard.Root :positioning="{ placement: 'right' }">
      <HoverCard.Trigger :asChild="true">
        <a href="https://ark-ui.com" :class="css({ textDecoration: 'underline', textUnderlineOffset: '4px' })">Right</a>
      </HoverCard.Trigger>
      <Teleport to="body">
        <HoverCard.Positioner>
          <HoverCard.Content maxW="xs">
            <HoverCard.Arrow>
              <HoverCard.ArrowTip />
            </HoverCard.Arrow>
            <p :class="css({ fontWeight: 'medium' })">Ark UI</p>
            <p :class="css({ textStyle: 'sm', color: 'fg.muted' })">
              Headless components for React, Vue, Solid and Svelte.
            </p>
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Teleport>
    </HoverCard.Root>
    <HoverCard.Root :positioning="{ placement: 'bottom' }">
      <HoverCard.Trigger :asChild="true">
        <a href="https://ark-ui.com" :class="css({ textDecoration: 'underline', textUnderlineOffset: '4px' })"
          >Bottom</a
        >
      </HoverCard.Trigger>
      <Teleport to="body">
        <HoverCard.Positioner>
          <HoverCard.Content maxW="xs">
            <HoverCard.Arrow>
              <HoverCard.ArrowTip />
            </HoverCard.Arrow>
            <p :class="css({ fontWeight: 'medium' })">Ark UI</p>
            <p :class="css({ textStyle: 'sm', color: 'fg.muted' })">
              Headless components for React, Vue, Solid and Svelte.
            </p>
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Teleport>
    </HoverCard.Root>
    <HoverCard.Root :positioning="{ placement: 'left' }">
      <HoverCard.Trigger :asChild="true">
        <a href="https://ark-ui.com" :class="css({ textDecoration: 'underline', textUnderlineOffset: '4px' })">Left</a>
      </HoverCard.Trigger>
      <Teleport to="body">
        <HoverCard.Positioner>
          <HoverCard.Content maxW="xs">
            <HoverCard.Arrow>
              <HoverCard.ArrowTip />
            </HoverCard.Arrow>
            <p :class="css({ fontWeight: 'medium' })">Ark UI</p>
            <p :class="css({ textStyle: 'sm', color: 'fg.muted' })">
              Headless components for React, Vue, Solid and Svelte.
            </p>
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Teleport>
    </HoverCard.Root>
  </HStack>
</template>
