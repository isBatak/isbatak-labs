<script setup lang="ts">
import { ref } from "vue"
import { IconButton } from "@isbatak/vue-ui/button"
import { Icon } from "@isbatak/vue-ui/icon"
import { Swap } from "@isbatak/vue-ui/swap"

const swapped = ref(false)
</script>

<template>
  <IconButton variant="outline" aria-label="Toggle lock" :aria-pressed="swapped" @click="swapped = !swapped">
    <Swap.Root variant="flip" :swap="swapped">
      <Swap.Indicator type="off">
        <Icon name="lock" />
      </Swap.Indicator>
      <Swap.Indicator type="on">
        <Icon name="unlock" />
      </Swap.Indicator>
    </Swap.Root>
  </IconButton>
</template>
