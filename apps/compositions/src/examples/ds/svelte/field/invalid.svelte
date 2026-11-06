<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { Field } from "@isbatak/svelte-ui/field"
  import { Input } from "@isbatak/svelte-ui/input"
</script>

<Box maxW="xs" w="full">
  <Field.Root invalid>
    <Field.Label>Email</Field.Label>
    <Input placeholder="me@example.com" />
    <Field.ErrorText>This field is required.</Field.ErrorText>
  </Field.Root>
</Box>
