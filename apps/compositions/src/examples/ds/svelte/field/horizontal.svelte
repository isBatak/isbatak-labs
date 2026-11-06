<script lang="ts">
  import { css } from "styled-system/css"
  import { Box } from "@isbatak/svelte-ui/box"
  import { Field } from "@isbatak/svelte-ui/field"
  import { Input } from "@isbatak/svelte-ui/input"
  import { Stack } from "@isbatak/svelte-ui/stack"
</script>

<Box maxW="sm" w="full">
  <Stack gap="4" w="full">
    <Field.Root orientation="horizontal">
      <Field.Label>Name</Field.Label>
      <Input placeholder="Jane Doe" class={css({ flex: "1" })} />
    </Field.Root>
    <Field.Root orientation="horizontal">
      <Field.Label>Email</Field.Label>
      <Input placeholder="me@example.com" class={css({ flex: "1" })} />
    </Field.Root>
  </Stack>
</Box>
