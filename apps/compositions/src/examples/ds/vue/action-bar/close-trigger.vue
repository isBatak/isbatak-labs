<script setup lang="ts">
import { ActionBar } from "@isbatak/vue-ui/action-bar"
import { Button } from "@isbatak/vue-ui/button"
import { Checkbox } from "@isbatak/vue-ui/checkbox"
import { Icon } from "@isbatak/vue-ui/icon"
import { ref } from "vue"

const open = ref(false)
</script>

<template>
  <Checkbox.Root :checked="open" @update:checked="(checked) => (open = checked === true)">
    <Checkbox.HiddenInput />
    <Checkbox.Control />
    <Checkbox.Label>Show action bar</Checkbox.Label>
  </Checkbox.Root>
  <ActionBar.Root v-model:open="open">
    <Teleport to="body">
      <ActionBar.Positioner>
        <ActionBar.Content>
          <ActionBar.SelectionTrigger>2 selected</ActionBar.SelectionTrigger>
          <ActionBar.Separator />
          <Button variant="outline" size="sm"><Icon name="delete" /> Delete</Button>
          <Button variant="outline" size="sm"><Icon name="share" /> Share</Button>
          <ActionBar.CloseTrigger />
        </ActionBar.Content>
      </ActionBar.Positioner>
    </Teleport>
  </ActionBar.Root>
</template>
