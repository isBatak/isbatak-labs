<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { Field } from "@isbatak/svelte-ui/field"
  import { Input } from "@isbatak/svelte-ui/input"
</script>

<Box maxW="xs" w="full">
  <Field.Root required>
    <Field.Label>
      Email
      <Field.RequiredIndicator />
    </Field.Label>
    <Input placeholder="me@example.com" />
  </Field.Root>
</Box>
