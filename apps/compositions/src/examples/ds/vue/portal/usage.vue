<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Portal } from "@isbatak/vue-ui/portal"
import { ref } from "vue"
import { css } from "styled-system/css"

const open = ref(false)
</script>

<template>
  <div
    :class="
      css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '3',
        maxW: 'sm',
        p: '4',
        borderWidth: '1px',
        borderColor: 'border.muted',
        borderRadius: 'l3',
        overflow: 'hidden',
        textStyle: 'sm',
        color: 'fg.muted',
      })
    "
  >
    This box clips its overflow. Content in a portal is moved to the end of the page, so it isn't clipped.
    <Button variant="outline" @click="open = !open">{{ open ? "Hide" : "Show" }} portal content</Button>
    <Portal v-if="open">
      <div
        data-portal-demo=""
        :class="
          css({
            position: 'fixed',
            insetEnd: '4',
            bottom: '4',
            zIndex: 'toast',
            bg: 'bg.panel',
            borderWidth: '1px',
            borderColor: 'border.muted',
            borderRadius: 'l3',
            boxShadow: 'lg',
            px: '4',
            py: '3',
            textStyle: 'sm',
          })
        "
      >
        Rendered in a portal
      </div>
    </Portal>
  </div>
</template>
