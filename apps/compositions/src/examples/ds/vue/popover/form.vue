<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Field } from "@isbatak/vue-ui/field"
import { Input } from "@isbatak/vue-ui/input"
import { Popover } from "@isbatak/vue-ui/popover"
import { Stack } from "@isbatak/vue-ui/stack"
import { Textarea } from "@isbatak/vue-ui/textarea"
</script>

<template>
  <Popover.Root>
    <Popover.Trigger :asChild="true">
      <Button variant="outline">Add comment</Button>
    </Popover.Trigger>
    <Teleport to="body">
      <Popover.Positioner>
        <Popover.Content>
          <Popover.Arrow>
            <Popover.ArrowTip />
          </Popover.Arrow>
          <Popover.Header>
            <Popover.Title>Add a comment</Popover.Title>
          </Popover.Header>
          <Popover.Body>
            <Stack gap="3">
              <Field.Root>
                <Field.Label>Name</Field.Label>
                <Input placeholder="Your name" />
              </Field.Root>
              <Field.Root>
                <Field.Label>Comment</Field.Label>
                <Textarea placeholder="What do you think?" />
              </Field.Root>
            </Stack>
          </Popover.Body>
          <Popover.Footer>
            <Popover.ActionTrigger :asChild="true">
              <Button size="sm" variant="outline">Cancel</Button>
            </Popover.ActionTrigger>
            <Button size="sm">Post</Button>
          </Popover.Footer>
        </Popover.Content>
      </Popover.Positioner>
    </Teleport>
  </Popover.Root>
</template>
