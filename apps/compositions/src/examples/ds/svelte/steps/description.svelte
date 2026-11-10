<script lang="ts">
  import { Button, ButtonGroup } from "@isbatak/svelte-ui/button"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Steps } from "@isbatak/svelte-ui/steps"
</script>

<Steps.Root count={3}>
  <Steps.List>
    <Steps.Item index={0}>
      <Steps.Indicator />
      <Stack gap="0">
        <Steps.Title>Contact</Steps.Title>
        <Steps.Description>Email and phone</Steps.Description>
      </Stack>
      <Steps.Separator />
    </Steps.Item>
    <Steps.Item index={1}>
      <Steps.Indicator />
      <Stack gap="0">
        <Steps.Title>Shipping</Steps.Title>
        <Steps.Description>Address and delivery</Steps.Description>
      </Stack>
      <Steps.Separator />
    </Steps.Item>
    <Steps.Item index={2}>
      <Steps.Indicator />
      <Stack gap="0">
        <Steps.Title>Payment</Steps.Title>
        <Steps.Description>Card or invoice</Steps.Description>
      </Stack>
      <Steps.Separator />
    </Steps.Item>
  </Steps.List>
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
</Steps.Root>
