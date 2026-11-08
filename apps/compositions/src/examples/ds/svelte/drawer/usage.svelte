<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Drawer } from "@isbatak/svelte-ui/drawer"
  import { Field } from "@isbatak/svelte-ui/field"
  import { Input } from "@isbatak/svelte-ui/input"
  import { Switch } from "@isbatak/svelte-ui/switch"
  import { css } from "styled-system/css"
</script>

<Drawer.Root placement="bottom">
  <Drawer.Trigger>
    {#snippet asChild(props)}
      <Button {...props()}>Edit settings</Button>
    {/snippet}
  </Drawer.Trigger>
  <Portal>
    <Drawer.Backdrop />
    <Drawer.Positioner>
      <Drawer.Content>
        <Drawer.Grabber>
          <Drawer.GrabberIndicator />
        </Drawer.Grabber>
        <Drawer.Header>
          <Drawer.Title>Update user settings</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body class={css({ display: "flex", flexDirection: "column", gap: "4" })}>
          <Drawer.Description>Adjust your preferences, then drag the sheet down to close it.</Drawer.Description>
          <Field.Root>
            <Field.Label>Username</Field.Label>
            <Input placeholder="Enter your username" />
          </Field.Root>
          <Field.Root>
            <Field.Label>Email</Field.Label>
            <Input type="email" placeholder="Enter your email address" />
          </Field.Root>
          <Switch.Root defaultChecked>
            <Switch.HiddenInput />
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            <Switch.Label>Email notifications</Switch.Label>
          </Switch.Root>
        </Drawer.Body>
        <Drawer.Footer>
          <Drawer.ActionTrigger>
            {#snippet asChild(props)}
              <Button {...props()} variant="outline">Cancel</Button>
            {/snippet}
          </Drawer.ActionTrigger>
          <Button>Save</Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Positioner>
  </Portal>
</Drawer.Root>
