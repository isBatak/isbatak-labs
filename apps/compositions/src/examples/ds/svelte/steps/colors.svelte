<script lang="ts">
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Steps } from "@isbatak/svelte-ui/steps"
  import { css } from "styled-system/css"
</script>

<Stack gap="10">
  <Steps.Root count={3} defaultStep={1} class={css({ colorPalette: "blue" })}>
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
  <Steps.Root count={3} defaultStep={1} class={css({ colorPalette: "green" })}>
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
  <Steps.Root count={3} defaultStep={1} class={css({ colorPalette: "red" })}>
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
