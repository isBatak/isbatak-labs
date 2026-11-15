<script setup lang="ts">
import { ref } from "vue"
import { IconButton } from "@isbatak/vue-ui/button"
import { Icon } from "@isbatak/vue-ui/icon"
import { Swap } from "@isbatak/vue-ui/swap"

const swapped = ref(false)
</script>

<template>
  <IconButton variant="outline" aria-label="Like" :aria-pressed="swapped" @click="swapped = !swapped">
    <Swap.Root variant="scale" :swap="swapped">
      <Swap.Indicator type="off">
        <Icon name="heart" />
      </Swap.Indicator>
      <Swap.Indicator type="on">
        <Icon name="heart-filled" />
      </Swap.Indicator>
    </Swap.Root>
  </IconButton>
</template>
