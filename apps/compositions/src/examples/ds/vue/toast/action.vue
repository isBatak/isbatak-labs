<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"

import { createToaster, Toaster } from "@isbatak/vue-ui/toast"

const toaster = createToaster({ placement: "bottom-end", overlap: true, gap: 16 })

const showToast = () =>
  toaster.create({
    title: "Email archived",
    action: { label: "Undo", onClick: () => toaster.create({ type: "success", title: "Email restored" }) },
  })
</script>

<template>
  <Button variant="outline" @click="showToast">Archive email</Button>
  <Teleport to="body">
    <Toaster :toaster="toaster" />
  </Teleport>
</template>
