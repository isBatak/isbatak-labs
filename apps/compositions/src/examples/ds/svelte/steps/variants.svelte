<script lang="ts">
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Steps } from "@isbatak/svelte-ui/steps"
</script>

<Stack gap="10">
  <Steps.Root count={3} variant="solid" defaultStep={1}>
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
  </Steps.Root>
  <Steps.Root count={3} variant="subtle" defaultStep={1}>
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
  </Steps.Root>
</Stack>
