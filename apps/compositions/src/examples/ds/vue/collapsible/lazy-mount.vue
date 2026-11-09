<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Collapsible } from "@isbatak/vue-ui/collapsible"
import { css } from "styled-system/css"
</script>

<template>
  <Collapsible.Root :lazyMount="true" :unmountOnExit="true" maxW="sm">
    <Collapsible.Trigger :asChild="true">
      <Button variant="outline">Toggle</Button>
    </Collapsible.Trigger>
    <Collapsible.Content>
      <div
        :class="css({ p: '4', mt: '2', borderWidth: '1px', borderRadius: 'l2', textStyle: 'sm', color: 'fg.muted' })"
      >
        This content mounts when it opens and unmounts when it closes.
      </div>
    </Collapsible.Content>
  </Collapsible.Root>
</template>
