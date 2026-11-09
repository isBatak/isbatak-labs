<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Field } from "@isbatak/svelte-ui/field"
  import { Input } from "@isbatak/svelte-ui/input"
  import { Popover } from "@isbatak/svelte-ui/popover"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Textarea } from "@isbatak/svelte-ui/textarea"
</script>

<Popover.Root>
  <Popover.Trigger>
    {#snippet asChild(props)}
      <Button {...props()} variant="outline">Add comment</Button>
    {/snippet}
  </Popover.Trigger>
  <Portal>
    <Popover.Positioner>
      <Popover.Content>
        <Popover.Arrow>
          <Popover.ArrowTip />
        </Popover.Arrow>
        <Popover.Header>
          <Popover.Title>Add a comment</Popover.Title>
        </Popover.Header>
        <Popover.Body>
          <Stack gap="3">
            <Field.Root>
              <Field.Label>Name</Field.Label>
              <Input placeholder="Your name" />
            </Field.Root>
            <Field.Root>
              <Field.Label>Comment</Field.Label>
              <Textarea placeholder="What do you think?" />
            </Field.Root>
          </Stack>
        </Popover.Body>
        <Popover.Footer>
          <Popover.ActionTrigger>
            {#snippet asChild(props)}
              <Button {...props()} size="sm" variant="outline">Cancel</Button>
            {/snippet}
          </Popover.ActionTrigger>
          <Button size="sm">Post</Button>
        </Popover.Footer>
      </Popover.Content>
    </Popover.Positioner>
  </Portal>
</Popover.Root>
