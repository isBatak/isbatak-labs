<script setup lang="ts">
import { ref } from "vue"
import { IconButton } from "@isbatak/vue-ui/button"
import { Icon } from "@isbatak/vue-ui/icon"
import { Swap } from "@isbatak/vue-ui/swap"

const swapped = ref(false)
</script>

<template>
  <IconButton variant="outline" aria-label="Copy" :aria-pressed="swapped" @click="swapped = !swapped">
    <Swap.Root :swap="swapped">
      <Swap.Indicator type="off">
        <Icon name="copy" />
      </Swap.Indicator>
      <Swap.Indicator type="on">
        <Icon name="check" />
      </Swap.Indicator>
    </Swap.Root>
  </IconButton>
</template>
