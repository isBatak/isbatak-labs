<script setup lang="ts">
import { Button, CloseButton } from "@isbatak/vue-ui/button"
import { Drawer } from "@isbatak/vue-ui/drawer"
import { Field } from "@isbatak/vue-ui/field"
import { Textarea } from "@isbatak/vue-ui/textarea"
import { ref } from "vue"

const open = ref(false)
</script>

<template>
  <Button @click="open = true">Give feedback</Button>
  <Drawer.Root v-model:open="open">
    <Teleport to="body">
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Send feedback</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body display="flex" flexDirection="column" gap="4">
            <Drawer.Description>Tell us what works and what we could do better.</Drawer.Description>
            <Field.Root>
              <Field.Label>Your feedback</Field.Label>
              <Textarea :rows="5" placeholder="Type your feedback here" />
            </Field.Root>
          </Drawer.Body>
          <Drawer.Footer>
            <Button variant="outline" @click="open = false">Cancel</Button>
            <Button @click="open = false">Send</Button>
          </Drawer.Footer>
          <Drawer.CloseTrigger :asChild="true">
            <CloseButton size="sm" />
          </Drawer.CloseTrigger>
        </Drawer.Content>
      </Drawer.Positioner>
    </Teleport>
  </Drawer.Root>
</template>
