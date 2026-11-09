<script setup lang="ts">
import { HoverCard } from "@isbatak/vue-ui/hover-card"
import { css } from "styled-system/css"
</script>

<template>
  <HoverCard.Root>
    <HoverCard.Trigger :asChild="true">
      <a href="https://ark-ui.com" :class="css({ textDecoration: 'underline', textUnderlineOffset: '4px' })">Ark UI</a>
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
</template>
