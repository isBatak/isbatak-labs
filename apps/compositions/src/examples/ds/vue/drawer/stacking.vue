<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { Drawer } from "@isbatak/vue-ui/drawer"
import { Field } from "@isbatak/vue-ui/field"
import { EndIcon, Icon } from "@isbatak/vue-ui/icon"
import { Input } from "@isbatak/vue-ui/input"
import { SegmentGroup } from "@isbatak/vue-ui/segment-group"
import { Switch } from "@isbatak/vue-ui/switch"
</script>

<template>
  <Drawer.Root placement="bottom" :float="true">
    <Drawer.Trigger :asChild="true">
      <Button>Workspace settings</Button>
    </Drawer.Trigger>
    <Teleport to="body">
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content h="96" maxW="lg" mx="auto">
          <Drawer.Grabber>
            <Drawer.GrabberIndicator />
          </Drawer.Grabber>
          <Drawer.Header flexDirection="column" alignItems="stretch" gap="1" pt="3">
            <Drawer.Title>Workspace settings</Drawer.Title>
            <Drawer.Description>Set up your workspace and manage how your team collaborates.</Drawer.Description>
          </Drawer.Header>
          <Drawer.Body display="flex" flexDirection="column" alignItems="flex-start" gap="4">
            <Field.Root>
              <Field.Label>Workspace name</Field.Label>
              <Input defaultValue="Design studio" />
            </Field.Root>

            <Drawer.Root placement="bottom" :float="true">
              <Drawer.Trigger :asChild="true">
                <Button variant="subtle">
                  Team access
                  <EndIcon :asChild="true">
                    <Icon name="chevron-right" />
                  </EndIcon>
                </Button>
              </Drawer.Trigger>
              <Teleport to="body">
                <Drawer.Positioner>
                  <Drawer.Content h="96" maxW="lg" mx="auto">
                    <Drawer.Grabber>
                      <Drawer.GrabberIndicator />
                    </Drawer.Grabber>
                    <Drawer.Header flexDirection="column" alignItems="stretch" gap="1" pt="3">
                      <Drawer.Title>Team access</Drawer.Title>
                      <Drawer.Description>
                        Choose who can join. Close this sheet to return to your workspace.
                      </Drawer.Description>
                    </Drawer.Header>
                    <Drawer.Body display="flex" flexDirection="column" alignItems="flex-start" gap="4">
                      <SegmentGroup.Root defaultValue="invite" orientation="horizontal" aria-label="Who can join">
                        <SegmentGroup.Indicator />
                        <SegmentGroup.Item value="invite">
                          <SegmentGroup.ItemText>Invited people only</SegmentGroup.ItemText>
                          <SegmentGroup.ItemHiddenInput />
                        </SegmentGroup.Item>
                        <SegmentGroup.Item value="domain">
                          <SegmentGroup.ItemText>Company email</SegmentGroup.ItemText>
                          <SegmentGroup.ItemHiddenInput />
                        </SegmentGroup.Item>
                      </SegmentGroup.Root>

                      <Drawer.Root placement="bottom" :float="true">
                        <Drawer.Trigger :asChild="true">
                          <Button variant="subtle">
                            Member permissions
                            <EndIcon :asChild="true">
                              <Icon name="chevron-right" />
                            </EndIcon>
                          </Button>
                        </Drawer.Trigger>
                        <Teleport to="body">
                          <Drawer.Positioner>
                            <Drawer.Content h="96" maxW="lg" mx="auto">
                              <Drawer.Grabber>
                                <Drawer.GrabberIndicator />
                              </Drawer.Grabber>
                              <Drawer.Header flexDirection="column" alignItems="stretch" gap="1" pt="3">
                                <Drawer.Title>Member permissions</Drawer.Title>
                                <Drawer.Description>
                                  Choose what members can do. Close this sheet to return to team access.
                                </Drawer.Description>
                              </Drawer.Header>
                              <Drawer.Body display="flex" flexDirection="column" gap="3">
                                <Switch.Root :defaultChecked="true">
                                  <Switch.HiddenInput />
                                  <Switch.Control>
                                    <Switch.Thumb />
                                  </Switch.Control>
                                  <Switch.Label>Leave comments</Switch.Label>
                                </Switch.Root>
                                <Switch.Root :defaultChecked="true">
                                  <Switch.HiddenInput />
                                  <Switch.Control>
                                    <Switch.Thumb />
                                  </Switch.Control>
                                  <Switch.Label>Download files</Switch.Label>
                                </Switch.Root>
                                <Switch.Root>
                                  <Switch.HiddenInput />
                                  <Switch.Control>
                                    <Switch.Thumb />
                                  </Switch.Control>
                                  <Switch.Label>Invite teammates</Switch.Label>
                                </Switch.Root>
                                <Switch.Root>
                                  <Switch.HiddenInput />
                                  <Switch.Control>
                                    <Switch.Thumb />
                                  </Switch.Control>
                                  <Switch.Label>Create projects</Switch.Label>
                                </Switch.Root>
                              </Drawer.Body>
                              <Drawer.Footer>
                                <Drawer.ActionTrigger :asChild="true">
                                  <Button>Back to team access</Button>
                                </Drawer.ActionTrigger>
                              </Drawer.Footer>
                            </Drawer.Content>
                          </Drawer.Positioner>
                        </Teleport>
                      </Drawer.Root>
                    </Drawer.Body>
                    <Drawer.Footer>
                      <Drawer.ActionTrigger :asChild="true">
                        <Button>Back to workspace</Button>
                      </Drawer.ActionTrigger>
                    </Drawer.Footer>
                  </Drawer.Content>
                </Drawer.Positioner>
              </Teleport>
            </Drawer.Root>
          </Drawer.Body>
          <Drawer.Footer>
            <Drawer.ActionTrigger :asChild="true">
              <Button>Done</Button>
            </Drawer.ActionTrigger>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Positioner>
    </Teleport>
  </Drawer.Root>
</template>
