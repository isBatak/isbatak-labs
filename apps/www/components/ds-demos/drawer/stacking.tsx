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
    <Drawer.Root placement="bottom">
      <Drawer.Trigger asChild>
        <Button>Workspace settings</Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content maxW="lg" minH="96" mx="auto">
            <Drawer.Grabber>
              <Drawer.GrabberIndicator />
            </Drawer.Grabber>
            <Drawer.Header>
              <Drawer.Title>Workspace settings</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body display="flex" flexDirection="column" alignItems="flex-start" gap="4">
              <Drawer.Description>Set up your workspace and how your team collaborates.</Drawer.Description>
              <div className={fieldClasses.root}>
                <label className={fieldClasses.label} htmlFor="drawer-workspace-name">
                  Workspace name
                </label>
                <input id="drawer-workspace-name" className={input()} defaultValue="Design studio" />
              </div>

              <Drawer.Root placement="bottom">
                <Drawer.Trigger asChild>
                  <Button variant="outline">
                    Team access
                    <Icon name="chevron-right" />
                  </Button>
                </Drawer.Trigger>
                <Portal>
                  <Drawer.Positioner>
                    <Drawer.Content maxW="lg" minH="80" mx="auto">
                      <Drawer.Grabber>
                        <Drawer.GrabberIndicator />
                      </Drawer.Grabber>
                      <Drawer.Header>
                        <Drawer.Title>Team access</Drawer.Title>
                      </Drawer.Header>
                      <Drawer.Body display="flex" flexDirection="column" alignItems="flex-start" gap="4">
                        <Drawer.Description>Choose who can join. Close this sheet to return.</Drawer.Description>
                        <SegmentGroup.Root defaultValue="invite" orientation="horizontal" aria-label="Who can join">
                          <SegmentGroup.Indicator />
                          <SegmentGroup.Item value="invite">
                            <SegmentGroup.ItemText>Invited people</SegmentGroup.ItemText>
                            <SegmentGroup.ItemHiddenInput />
                          </SegmentGroup.Item>
                          <SegmentGroup.Item value="domain">
                            <SegmentGroup.ItemText>Company email</SegmentGroup.ItemText>
                            <SegmentGroup.ItemHiddenInput />
                          </SegmentGroup.Item>
                        </SegmentGroup.Root>

                        <Drawer.Root placement="bottom">
                          <Drawer.Trigger asChild>
                            <Button variant="outline">
                              Member permissions
                              <Icon name="chevron-right" />
                            </Button>
                          </Drawer.Trigger>
                          <Portal>
                            <Drawer.Positioner>
                              <Drawer.Content maxW="lg" mx="auto">
                                <Drawer.Grabber>
                                  <Drawer.GrabberIndicator />
                                </Drawer.Grabber>
                                <Drawer.Header>
                                  <Drawer.Title>Member permissions</Drawer.Title>
                                </Drawer.Header>
                                <Drawer.Body display="flex" flexDirection="column" gap="4">
                                  <Drawer.Description>Choose what members can do.</Drawer.Description>
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
