<script setup lang="ts">
import { ref } from "vue"
import { IconButton } from "@isbatak/vue-ui/button"
import { Icon } from "@isbatak/vue-ui/icon"
import { Swap } from "@isbatak/vue-ui/swap"

const swapped = ref(false)
</script>

<template>
  <IconButton variant="outline" aria-label="Toggle theme" :aria-pressed="swapped" @click="swapped = !swapped">
    <Swap.Root variant="rotate" :swap="swapped">
      <Swap.Indicator type="off">
        <Icon name="moon" />
      </Swap.Indicator>
      <Swap.Indicator type="on">
        <Icon name="sun" />
      </Swap.Indicator>
    </Swap.Root>
  </IconButton>
</template>
