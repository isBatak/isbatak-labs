<script lang="ts">
  import { Button, ButtonGroup } from "@isbatak/svelte-ui/button"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Steps } from "@isbatak/svelte-ui/steps"
  import { css } from "styled-system/css"
</script>

<Steps.Root count={3} orientation="vertical" class={css({ h: "96" })}>
  <Steps.List>
    <Steps.Item index={0}>
      <Steps.Indicator />
      <Steps.Title>Contact</Steps.Title>
      <Steps.Separator />
    </Steps.Item>
    <Steps.Item index={1}>
      <Steps.Indicator />
      <Steps.Title>Shipping</Steps.Title>
      <Steps.Separator />
    </Steps.Item>
    <Steps.Item index={2}>
      <Steps.Indicator />
      <Steps.Title>Payment</Steps.Title>
      <Steps.Separator />
    </Steps.Item>
  </Steps.List>
  <Stack gap="4" alignItems="flex-start">
    <Steps.Content index={0}>Tell us how to reach you.</Steps.Content>
    <Steps.Content index={1}>Choose where the order goes.</Steps.Content>
    <Steps.Content index={2}>Pick how you'd like to pay.</Steps.Content>
    <Steps.CompletedContent>All steps are complete.</Steps.CompletedContent>
    <ButtonGroup size="sm" variant="outline">
      <Steps.PrevTrigger>
        {#snippet asChild(props)}
          <Button {...props()}>Prev</Button>
        {/snippet}
      </Steps.PrevTrigger>
      <Steps.NextTrigger>
        {#snippet asChild(props)}
          <Button {...props()}>Next</Button>
        {/snippet}
      </Steps.NextTrigger>
    </ButtonGroup>
  </Stack>
</Steps.Root>
