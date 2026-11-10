<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Collapsible } from "@isbatak/vue-ui/collapsible"
import { css } from "styled-system/css"
</script>

<template>
  <Collapsible.Root :collapsedHeight="64" maxW="sm">
    <Collapsible.Content>
      <div :class="css({ textStyle: 'sm', color: 'fg.muted' })">
        Ark UI's Collapsible shows and hides a single section of content. It animates the height, and keeps the trigger
        and content linked for screen readers. Ark UI's Collapsible shows and hides a single section of content. It
        animates the height, and keeps the trigger and content linked for screen readers. Set collapsedHeight to keep
        part of the content visible while it's closed.
      </div>
    </Collapsible.Content>
    <Collapsible.Trigger :asChild="true">
      <Button variant="plain" size="sm" mt="2" px="0">
        Read more
        <Collapsible.Indicator />
      </Button>
    </Collapsible.Trigger>
  </Collapsible.Root>
</template>
