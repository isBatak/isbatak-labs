<script setup lang="ts">
import type { DrawerVariant } from "@isbatak/panda-ds/recipes"
import { Button } from "@isbatak/vue-ui/button"
import { Drawer } from "@isbatak/vue-ui/drawer"
import { ref } from "vue"

type Placement = NonNullable<DrawerVariant["placement"]>

const open = ref(false)
const placement = ref<Placement>("end")

const openAt = (nextPlacement: Placement) => {
  placement.value = nextPlacement
  open.value = true
}
</script>

<template>
  <Button @click="openAt('start')">Start</Button>
  <Button @click="openAt('end')">End</Button>
  <Button @click="openAt('top')">Top</Button>
  <Button @click="openAt('bottom')">Bottom</Button>
  <Drawer.Root v-model:open="open" :placement="placement">
    <Teleport to="body">
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Opens from {{ placement }}</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <Drawer.Description>
              Swipe it back toward the {{ placement }} edge to close it. Turn on right-to-left in the preview toolbar
              and start and end swap sides.
            </Drawer.Description>
          </Drawer.Body>
          <Drawer.Footer>
            <Drawer.ActionTrigger :asChild="true">
              <Button variant="outline">Close</Button>
            </Drawer.ActionTrigger>
          </Drawer.Footer>
          <Drawer.CloseTrigger />
        </Drawer.Content>
      </Drawer.Positioner>
    </Teleport>
  </Drawer.Root>
</template>
