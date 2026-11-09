<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Drawer } from "@isbatak/vue-ui/drawer"
import { Wrap } from "@isbatak/vue-ui/wrap"
</script>

<template>
  <Wrap gap="4">
    <Drawer.Root contentSize="xs">
      <Drawer.Trigger :asChild="true">
        <Button variant="outline">xs</Button>
      </Drawer.Trigger>
      <Teleport to="body">
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Preferences</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Drawer.Description
                >Change your preferences here. They apply to every device you sign in on.</Drawer.Description
              >
            </Drawer.Body>
            <Drawer.Footer>
              <Drawer.ActionTrigger :asChild="true">
                <Button variant="outline">Cancel</Button>
              </Drawer.ActionTrigger>
              <Button>Save</Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger />
          </Drawer.Content>
        </Drawer.Positioner>
      </Teleport>
    </Drawer.Root>
    <Drawer.Root contentSize="sm">
      <Drawer.Trigger :asChild="true">
        <Button variant="outline">sm</Button>
      </Drawer.Trigger>
      <Teleport to="body">
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Preferences</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Drawer.Description
                >Change your preferences here. They apply to every device you sign in on.</Drawer.Description
              >
            </Drawer.Body>
            <Drawer.Footer>
              <Drawer.ActionTrigger :asChild="true">
                <Button variant="outline">Cancel</Button>
              </Drawer.ActionTrigger>
              <Button>Save</Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger />
          </Drawer.Content>
        </Drawer.Positioner>
      </Teleport>
    </Drawer.Root>
    <Drawer.Root contentSize="md">
      <Drawer.Trigger :asChild="true">
        <Button variant="outline">md</Button>
      </Drawer.Trigger>
      <Teleport to="body">
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Preferences</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Drawer.Description
                >Change your preferences here. They apply to every device you sign in on.</Drawer.Description
              >
            </Drawer.Body>
            <Drawer.Footer>
              <Drawer.ActionTrigger :asChild="true">
                <Button variant="outline">Cancel</Button>
              </Drawer.ActionTrigger>
              <Button>Save</Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger />
          </Drawer.Content>
        </Drawer.Positioner>
      </Teleport>
    </Drawer.Root>
    <Drawer.Root contentSize="lg">
      <Drawer.Trigger :asChild="true">
        <Button variant="outline">lg</Button>
      </Drawer.Trigger>
      <Teleport to="body">
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Preferences</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Drawer.Description
                >Change your preferences here. They apply to every device you sign in on.</Drawer.Description
              >
            </Drawer.Body>
            <Drawer.Footer>
              <Drawer.ActionTrigger :asChild="true">
                <Button variant="outline">Cancel</Button>
              </Drawer.ActionTrigger>
              <Button>Save</Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger />
          </Drawer.Content>
        </Drawer.Positioner>
      </Teleport>
    </Drawer.Root>
    <Drawer.Root contentSize="xl">
      <Drawer.Trigger :asChild="true">
        <Button variant="outline">xl</Button>
      </Drawer.Trigger>
      <Teleport to="body">
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Preferences</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Drawer.Description
                >Change your preferences here. They apply to every device you sign in on.</Drawer.Description
              >
            </Drawer.Body>
            <Drawer.Footer>
              <Drawer.ActionTrigger :asChild="true">
                <Button variant="outline">Cancel</Button>
              </Drawer.ActionTrigger>
              <Button>Save</Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger />
          </Drawer.Content>
        </Drawer.Positioner>
      </Teleport>
    </Drawer.Root>
    <Drawer.Root contentSize="full">
      <Drawer.Trigger :asChild="true">
        <Button variant="outline">full</Button>
      </Drawer.Trigger>
      <Teleport to="body">
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Preferences</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Drawer.Description
                >Change your preferences here. They apply to every device you sign in on.</Drawer.Description
              >
            </Drawer.Body>
            <Drawer.Footer>
              <Drawer.ActionTrigger :asChild="true">
                <Button variant="outline">Cancel</Button>
              </Drawer.ActionTrigger>
              <Button>Save</Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger />
          </Drawer.Content>
        </Drawer.Positioner>
      </Teleport>
    </Drawer.Root>
  </Wrap>
</template>
