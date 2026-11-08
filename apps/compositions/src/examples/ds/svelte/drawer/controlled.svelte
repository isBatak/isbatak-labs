<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button, CloseButton } from "@isbatak/svelte-ui/button"
  import { Drawer } from "@isbatak/svelte-ui/drawer"
  import { Field } from "@isbatak/svelte-ui/field"
  import { Textarea } from "@isbatak/svelte-ui/textarea"
  import { css } from "styled-system/css"

  let open = $state(false)
</script>

<Button onclick={() => (open = true)}>Give feedback</Button>
<Drawer.Root bind:open>
  <Portal>
    <Drawer.Backdrop />
    <Drawer.Positioner>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Send feedback</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body class={css({ display: "flex", flexDirection: "column", gap: "4" })}>
          <Drawer.Description>Tell us what works and what we could do better.</Drawer.Description>
          <Field.Root>
            <Field.Label>Your feedback</Field.Label>
            <Textarea rows={5} placeholder="Type your feedback here" />
          </Field.Root>
        </Drawer.Body>
        <Drawer.Footer>
          <Button variant="outline" onclick={() => (open = false)}>Cancel</Button>
          <Button onclick={() => (open = false)}>Send</Button>
        </Drawer.Footer>
        <Drawer.CloseTrigger>
          {#snippet asChild(props)}
            <CloseButton {...props()} size="sm" />
          {/snippet}
        </Drawer.CloseTrigger>
      </Drawer.Content>
    </Drawer.Positioner>
  </Portal>
</Drawer.Root>
