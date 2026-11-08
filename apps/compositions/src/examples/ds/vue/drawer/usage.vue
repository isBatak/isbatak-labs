<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Drawer } from "@isbatak/vue-ui/drawer"
import { Field } from "@isbatak/vue-ui/field"
import { Input } from "@isbatak/vue-ui/input"
import { Switch } from "@isbatak/vue-ui/switch"
</script>

<template>
  <Drawer.Root placement="bottom">
    <Drawer.Trigger :asChild="true">
      <Button>Edit settings</Button>
    </Drawer.Trigger>
    <Teleport to="body">
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Grabber>
            <Drawer.GrabberIndicator />
          </Drawer.Grabber>
          <Drawer.Header>
            <Drawer.Title>Update user settings</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body display="flex" flexDirection="column" gap="4">
            <Drawer.Description>Adjust your preferences, then drag the sheet down to close it.</Drawer.Description>
            <Field.Root>
              <Field.Label>Username</Field.Label>
              <Input placeholder="Enter your username" />
            </Field.Root>
            <Field.Root>
              <Field.Label>Email</Field.Label>
              <Input type="email" placeholder="Enter your email address" />
            </Field.Root>
            <Switch.Root :defaultChecked="true">
              <Switch.HiddenInput />
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
              <Switch.Label>Email notifications</Switch.Label>
            </Switch.Root>
          </Drawer.Body>
          <Drawer.Footer>
            <Drawer.ActionTrigger :asChild="true">
              <Button variant="outline">Cancel</Button>
            </Drawer.ActionTrigger>
            <Button>Save</Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Positioner>
    </Teleport>
  </Drawer.Root>
</template>
