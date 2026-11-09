<script setup lang="ts">
import { HoverCard } from "@isbatak/vue-ui/hover-card"
import { HStack } from "@isbatak/vue-ui/stack"
import { css } from "styled-system/css"
import { ref } from "vue"

const open = ref(false)
</script>

<template>
  <HStack gap="4">
    <HoverCard.Root v-model:open="open">
      <HoverCard.Trigger :asChild="true">
        <a href="https://ark-ui.com" :class="css({ textDecoration: 'underline', textUnderlineOffset: '4px' })"
          >Ark UI</a
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
    <p :class="css({ color: 'fg.muted', textStyle: 'sm' })">{{ open ? "The card is open" : "The card is closed" }}</p>
  </HStack>
</template>
