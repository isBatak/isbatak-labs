<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { FocusTrap } from "@isbatak/vue-ui/focus-trap"
import { Input } from "@isbatak/vue-ui/input"
import { Stack } from "@isbatak/vue-ui/stack"
import { ref } from "vue"
import { css } from "styled-system/css"

const trapped = ref(false)
</script>

<template>
  <Stack gap="4" alignItems="flex-start">
    <Button variant="outline" @click="trapped = true">Trap focus</Button>
    <FocusTrap
      :disabled="!trapped"
      :class="
        css({
          display: 'flex',
          flexDirection: 'column',
          gap: '3',
          w: 'full',
          maxW: 'sm',
          p: '4',
          borderWidth: '1px',
          borderColor: 'border.muted',
          borderRadius: 'l3',
        })
      "
    >
      <Input placeholder="Name" />
      <Input placeholder="Email" />
      <Button @click="trapped = false">End trap</Button>
    </FocusTrap>
  </Stack>
</template>
