"use client"

import { Portal } from "@ark-ui/react/portal"
import { field, input } from "@isbatak/panda-ds/recipes"
import { Button } from "@isbatak/react-ui/button"
import { Drawer } from "@isbatak/react-ui/drawer"
import { SegmentGroup } from "@isbatak/react-ui/segment-group"
import { Switch } from "@isbatak/react-ui/switch"

import { Icon } from "../../ui/icon"

export function DrawerStackingDemo() {
  const fieldClasses = field()

  return (
    <Drawer.Root placement="bottom" float>
      <Drawer.Trigger asChild>
        <Button>Workspace settings</Button>
      </Drawer.Trigger>
      <Portal>
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
              <div className={fieldClasses.root}>
                <label className={fieldClasses.label} htmlFor="drawer-workspace-name">
                  Workspace name
                </label>
                <input id="drawer-workspace-name" className={input()} defaultValue="Design studio" />
              </div>

              <Drawer.Root placement="bottom" float>
                <Drawer.Trigger asChild>
                  <Button variant="subtle">
                    Team access
                    <Icon name="chevron-right" />
                  </Button>
                </Drawer.Trigger>
                <Portal>
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

                        <Drawer.Root placement="bottom" float>
                          <Drawer.Trigger asChild>
                            <Button variant="subtle">
                              Member permissions
                              <Icon name="chevron-right" />
                            </Button>
                          </Drawer.Trigger>
                          <Portal>
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
                                  <Switch.Root defaultChecked>
                                    <Switch.Control>
                                      <Switch.Thumb />
                                    </Switch.Control>
                                    <Switch.Label>Leave comments</Switch.Label>
                                    <Switch.HiddenInput />
                                  </Switch.Root>
                                  <Switch.Root defaultChecked>
                                    <Switch.Control>
                                      <Switch.Thumb />
                                    </Switch.Control>
                                    <Switch.Label>Download files</Switch.Label>
                                    <Switch.HiddenInput />
                                  </Switch.Root>
                                  <Switch.Root>
                                    <Switch.Control>
                                      <Switch.Thumb />
                                    </Switch.Control>
                                    <Switch.Label>Invite teammates</Switch.Label>
                                    <Switch.HiddenInput />
                                  </Switch.Root>
                                  <Switch.Root>
                                    <Switch.Control>
                                      <Switch.Thumb />
                                    </Switch.Control>
                                    <Switch.Label>Create projects</Switch.Label>
                                    <Switch.HiddenInput />
                                  </Switch.Root>
                                </Drawer.Body>
                                <Drawer.Footer>
                                  <Drawer.ActionTrigger asChild>
                                    <Button>Back to team access</Button>
                                  </Drawer.ActionTrigger>
                                </Drawer.Footer>
                              </Drawer.Content>
                            </Drawer.Positioner>
                          </Portal>
                        </Drawer.Root>
                      </Drawer.Body>
                      <Drawer.Footer>
                        <Drawer.ActionTrigger asChild>
                          <Button>Back to workspace</Button>
                        </Drawer.ActionTrigger>
                      </Drawer.Footer>
                    </Drawer.Content>
                  </Drawer.Positioner>
                </Portal>
              </Drawer.Root>
            </Drawer.Body>
            <Drawer.Footer>
              <Drawer.ActionTrigger asChild>
                <Button>Done</Button>
              </Drawer.ActionTrigger>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
