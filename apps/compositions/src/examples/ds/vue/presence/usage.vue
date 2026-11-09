<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Presence } from "@isbatak/vue-ui/presence"
import { Stack } from "@isbatak/vue-ui/stack"
import { ref } from "vue"
import { css } from "styled-system/css"

const present = ref(false)
</script>

<template>
  <Stack gap="4" alignItems="flex-start">
    <Button variant="outline" @click="present = !present">Toggle</Button>
    <Presence
      :present="present"
      lazyMount
      unmountOnExit
      :class="
        css({
          maxW: 'sm',
          p: '4',
          bg: 'bg.subtle',
          borderRadius: 'l3',
          textStyle: 'sm',
          _open: { animationStyle: 'scale-fade-in', animationDuration: 'moderate' },
          _closed: { animationStyle: 'scale-fade-out', animationDuration: 'fast' },
        })
      "
    >
      Fades and scales in. When it closes, it stays in the page until its exit animation ends.
    </Presence>
  </Stack>
</template>
