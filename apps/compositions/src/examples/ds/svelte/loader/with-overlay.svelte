<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Field } from "@isbatak/svelte-ui/field"
  import { Input } from "@isbatak/svelte-ui/input"
  import { Loader, LoaderOverlay } from "@isbatak/svelte-ui/loader"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"

  let loading = $state(false)
</script>

<Stack gap="4" class={css({ maxW: "xl" })}>
  <Box class={css({ position: "relative", p: "6", bg: "bg.panel", shadow: "sm", rounded: "l3" })}>
    <Stack gap="4">
      <Field.Root>
        <Field.Label>First name</Field.Label>
        <Input />
      </Field.Root>
      <Field.Root>
        <Field.Label>Last name</Field.Label>
        <Input />
      </Field.Root>
      <Button>Click me</Button>
    </Stack>
    {#if loading}
      <LoaderOverlay class={css({ bg: "bg/80", rounded: "l3" })}>
        <Loader class={css({ textStyle: "sm", fontWeight: "medium" })} text="Loading…" />
      </LoaderOverlay>
    {/if}
  </Box>
  <Button variant="outline" class={css({ alignSelf: "flex-start" })} onclick={() => (loading = !loading)}>
    Toggle loading
  </Button>
</Stack>
