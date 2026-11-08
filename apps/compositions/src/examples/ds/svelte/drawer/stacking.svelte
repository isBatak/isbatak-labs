<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Drawer } from "@isbatak/svelte-ui/drawer"
  import { Field } from "@isbatak/svelte-ui/field"
  import { EndIcon, Icon } from "@isbatak/svelte-ui/icon"
  import { Input } from "@isbatak/svelte-ui/input"
  import { SegmentGroup } from "@isbatak/svelte-ui/segment-group"
  import { Switch } from "@isbatak/svelte-ui/switch"
  import { css } from "styled-system/css"

  const content = css({ h: "96", maxW: "lg", mx: "auto" })
  const header = css({ flexDirection: "column", alignItems: "stretch", gap: "1", pt: "3" })
  const body = css({ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4" })
</script>

<Drawer.Root placement="bottom" float>
  <Drawer.Trigger>
    {#snippet asChild(props)}
      <Button {...props()}>Workspace settings</Button>
    {/snippet}
  </Drawer.Trigger>
  <Portal>
    <Drawer.Backdrop />
    <Drawer.Positioner>
      <Drawer.Content class={content}>
        <Drawer.Grabber>
          <Drawer.GrabberIndicator />
        </Drawer.Grabber>
        <Drawer.Header class={header}>
          <Drawer.Title>Workspace settings</Drawer.Title>
          <Drawer.Description>Set up your workspace and manage how your team collaborates.</Drawer.Description>
        </Drawer.Header>
        <Drawer.Body class={body}>
          <Field.Root>
            <Field.Label>Workspace name</Field.Label>
            <Input value="Design studio" />
          </Field.Root>

          <Drawer.Root placement="bottom" float>
            <Drawer.Trigger>
              {#snippet asChild(props)}
                <Button {...props()} variant="subtle">
                  Team access
                  <EndIcon>
                    {#snippet asChild(iconProps)}<Icon {...iconProps()} name="chevron-right" />{/snippet}
                  </EndIcon>
                </Button>
              {/snippet}
            </Drawer.Trigger>
            <Portal>
              <Drawer.Positioner>
                <Drawer.Content class={content}>
                  <Drawer.Grabber>
                    <Drawer.GrabberIndicator />
                  </Drawer.Grabber>
                  <Drawer.Header class={header}>
                    <Drawer.Title>Team access</Drawer.Title>
                    <Drawer.Description>Choose who can join. Close this sheet to return to your workspace.</Drawer.Description>
                  </Drawer.Header>
                  <Drawer.Body class={body}>
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
                      <Drawer.Trigger>
                        {#snippet asChild(props)}
                          <Button {...props()} variant="subtle">
                            Member permissions
                            <EndIcon>
                              {#snippet asChild(iconProps)}<Icon {...iconProps()} name="chevron-right" />{/snippet}
                            </EndIcon>
                          </Button>
                        {/snippet}
                      </Drawer.Trigger>
                      <Portal>
                        <Drawer.Positioner>
                          <Drawer.Content class={content}>
                            <Drawer.Grabber>
                              <Drawer.GrabberIndicator />
                            </Drawer.Grabber>
                            <Drawer.Header class={header}>
                              <Drawer.Title>Member permissions</Drawer.Title>
                              <Drawer.Description>Choose what members can do. Close this sheet to return to team access.</Drawer.Description>
                            </Drawer.Header>
                            <Drawer.Body class={css({ display: "flex", flexDirection: "column", gap: "3" })}>
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
                              <Drawer.ActionTrigger>
                                {#snippet asChild(props)}
                                  <Button {...props()}>Back to team access</Button>
                                {/snippet}
                              </Drawer.ActionTrigger>
                            </Drawer.Footer>
                          </Drawer.Content>
                        </Drawer.Positioner>
                      </Portal>
                    </Drawer.Root>
                  </Drawer.Body>
                  <Drawer.Footer>
                    <Drawer.ActionTrigger>
                      {#snippet asChild(props)}
                        <Button {...props()}>Back to workspace</Button>
                      {/snippet}
                    </Drawer.ActionTrigger>
                  </Drawer.Footer>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root>
        </Drawer.Body>
        <Drawer.Footer>
          <Drawer.ActionTrigger>
            {#snippet asChild(props)}
              <Button {...props()}>Done</Button>
            {/snippet}
          </Drawer.ActionTrigger>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Positioner>
  </Portal>
</Drawer.Root>
