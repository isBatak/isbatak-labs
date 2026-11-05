<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Clipboard } from "@isbatak/vue-ui/clipboard"
import { Icon, StartIcon } from "@isbatak/vue-ui/icon"
</script>

<template>
  <Clipboard.Root defaultValue="https://isbatak.dev">
    <Clipboard.Trigger :asChild="true">
      <Button variant="surface" size="sm">
        <StartIcon :asChild="true">
          <Clipboard.Indicator>
            <Icon name="copy" />
            <template #copied><Icon name="check" /></template>
          </Clipboard.Indicator>
        </StartIcon>
        <Clipboard.Indicator>Copy link<template #copied>Copied</template></Clipboard.Indicator>
      </Button>
    </Clipboard.Trigger>
  </Clipboard.Root>
</template>
