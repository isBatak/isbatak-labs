import { Button } from "@isbatak/solid-ui/button"
import { Drawer } from "@isbatak/solid-ui/drawer"
import { Field } from "@isbatak/solid-ui/field"
import { EndIcon, Icon } from "@isbatak/solid-ui/icon"
import { Input } from "@isbatak/solid-ui/input"
import { SegmentGroup } from "@isbatak/solid-ui/segment-group"
import { Switch } from "@isbatak/solid-ui/switch"
import { Portal } from "@isbatak/solid-ui/portal"

export function DrawerStackingDemo() {
  return (
    <Drawer.Root placement="bottom" float>
      <Drawer.Trigger asChild={(props) => <Button {...props()}>Workspace settings</Button>} />
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
              <Field.Root>
                <Field.Label>Workspace name</Field.Label>
                <Input value="Design studio" />
              </Field.Root>

              <Drawer.Root placement="bottom" float>
                <Drawer.Trigger
                  asChild={(props) => (
                    <Button {...props()} variant="subtle">
                      Team access
                      <EndIcon asChild={(iconProps) => <Icon {...iconProps()} name="chevron-right" />} />
                    </Button>
                  )}
                />
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
                          <Drawer.Trigger
                            asChild={(props) => (
                              <Button {...props()} variant="subtle">
                                Member permissions
                                <EndIcon asChild={(iconProps) => <Icon {...iconProps()} name="chevron-right" />} />
                              </Button>
                            )}
                          />
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
                                    <Switch.HiddenInput />
                                    <Switch.Control>
                                      <Switch.Thumb />
                                    </Switch.Control>
                                    <Switch.Label>Leave comments</Switch.Label>
                                  </Switch.Root>
                                  <Switch.Root defaultChecked>
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
                                  <Drawer.ActionTrigger
                                    asChild={(props) => <Button {...props()}>Back to team access</Button>}
                                  />
                                </Drawer.Footer>
                              </Drawer.Content>
                            </Drawer.Positioner>
                          </Portal>
                        </Drawer.Root>
                      </Drawer.Body>
                      <Drawer.Footer>
                        <Drawer.ActionTrigger asChild={(props) => <Button {...props()}>Back to workspace</Button>} />
                      </Drawer.Footer>
                    </Drawer.Content>
                  </Drawer.Positioner>
                </Portal>
              </Drawer.Root>
            </Drawer.Body>
            <Drawer.Footer>
              <Drawer.ActionTrigger asChild={(props) => <Button {...props()}>Done</Button>} />
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
