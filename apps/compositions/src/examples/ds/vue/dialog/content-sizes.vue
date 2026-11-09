<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Dialog } from "@isbatak/vue-ui/dialog"
import { Wrap } from "@isbatak/vue-ui/wrap"
</script>

<template>
  <Wrap gap="4">
    <Dialog.Root contentSize="xs">
      <Dialog.Trigger :asChild="true">
        <Button variant="outline">xs</Button>
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
    <Dialog.Root contentSize="sm">
      <Dialog.Trigger :asChild="true">
        <Button variant="outline">sm</Button>
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
    <Dialog.Root contentSize="md">
      <Dialog.Trigger :asChild="true">
        <Button variant="outline">md</Button>
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
    <Dialog.Root contentSize="lg">
      <Dialog.Trigger :asChild="true">
        <Button variant="outline">lg</Button>
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
    <Dialog.Root contentSize="xl">
      <Dialog.Trigger :asChild="true">
        <Button variant="outline">xl</Button>
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
    <Dialog.Root contentSize="2xl">
      <Dialog.Trigger :asChild="true">
        <Button variant="outline">2xl</Button>
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
