<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Dialog } from "@isbatak/vue-ui/dialog"
import { Wrap } from "@isbatak/vue-ui/wrap"
</script>

<template>
  <Wrap gap="4">
    <Dialog.Root motionPreset="scale">
      <Dialog.Trigger :asChild="true">
        <Button variant="outline">scale</Button>
      </Dialog.Trigger>
      <Teleport to="body">
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Publish changes</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p>
                Review the changes below before you publish them. Publishing makes them visible to everyone with access
                to the project.
              </p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger :asChild="true">
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button>Publish</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger />
          </Dialog.Content>
        </Dialog.Positioner>
      </Teleport>
    </Dialog.Root>
    <Dialog.Root motionPreset="slide-in-bottom">
      <Dialog.Trigger :asChild="true">
        <Button variant="outline">slide-in-bottom</Button>
      </Dialog.Trigger>
      <Teleport to="body">
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Publish changes</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p>
                Review the changes below before you publish them. Publishing makes them visible to everyone with access
                to the project.
              </p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger :asChild="true">
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button>Publish</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger />
          </Dialog.Content>
        </Dialog.Positioner>
      </Teleport>
    </Dialog.Root>
    <Dialog.Root motionPreset="slide-in-top">
      <Dialog.Trigger :asChild="true">
        <Button variant="outline">slide-in-top</Button>
      </Dialog.Trigger>
      <Teleport to="body">
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Publish changes</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p>
                Review the changes below before you publish them. Publishing makes them visible to everyone with access
                to the project.
              </p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger :asChild="true">
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button>Publish</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger />
          </Dialog.Content>
        </Dialog.Positioner>
      </Teleport>
    </Dialog.Root>
    <Dialog.Root motionPreset="slide-in-left">
      <Dialog.Trigger :asChild="true">
        <Button variant="outline">slide-in-left</Button>
      </Dialog.Trigger>
      <Teleport to="body">
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Publish changes</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p>
                Review the changes below before you publish them. Publishing makes them visible to everyone with access
                to the project.
              </p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger :asChild="true">
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button>Publish</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger />
          </Dialog.Content>
        </Dialog.Positioner>
      </Teleport>
    </Dialog.Root>
    <Dialog.Root motionPreset="slide-in-right">
      <Dialog.Trigger :asChild="true">
        <Button variant="outline">slide-in-right</Button>
      </Dialog.Trigger>
      <Teleport to="body">
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Publish changes</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p>
                Review the changes below before you publish them. Publishing makes them visible to everyone with access
                to the project.
              </p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger :asChild="true">
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button>Publish</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger />
          </Dialog.Content>
        </Dialog.Positioner>
      </Teleport>
    </Dialog.Root>
    <Dialog.Root motionPreset="none">
      <Dialog.Trigger :asChild="true">
        <Button variant="outline">none</Button>
      </Dialog.Trigger>
      <Teleport to="body">
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Publish changes</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p>
                Review the changes below before you publish them. Publishing makes them visible to everyone with access
                to the project.
              </p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger :asChild="true">
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button>Publish</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger />
          </Dialog.Content>
        </Dialog.Positioner>
      </Teleport>
    </Dialog.Root>
  </Wrap>
</template>
