<script setup lang="ts">
import type { ActionBarVariant } from "@isbatak/panda-ds/recipes"
import { ActionBar } from "@isbatak/vue-ui/action-bar"
import { Button } from "@isbatak/vue-ui/button"
import { HStack } from "@isbatak/vue-ui/stack"
import { ref } from "vue"

type Placement = NonNullable<ActionBarVariant["placement"]>

const open = ref(false)
const placement = ref<Placement>("bottom")

const openAt = (nextPlacement: Placement) => {
  placement.value = nextPlacement
  open.value = true
}
</script>

<template>
  <HStack gap="3" flexWrap="wrap">
    <Button variant="outline" @click="openAt('bottom-start')">Bottom start</Button>
    <Button variant="outline" @click="openAt('bottom')">Bottom</Button>
    <Button variant="outline" @click="openAt('bottom-end')">Bottom end</Button>
  </HStack>
  <ActionBar.Root v-model:open="open" :placement="placement">
    <Teleport to="body">
      <ActionBar.Positioner>
        <ActionBar.Content>
          <ActionBar.SelectionTrigger>{{ placement }}</ActionBar.SelectionTrigger>
          <ActionBar.Separator />
          <Button variant="outline" size="sm">Archive</Button>
          <ActionBar.CloseTrigger />
        </ActionBar.Content>
      </ActionBar.Positioner>
    </Teleport>
  </ActionBar.Root>
</template>
