<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { Field } from "@isbatak/svelte-ui/field"
  import { Input } from "@isbatak/svelte-ui/input"
</script>

<Box maxW="xs" w="full">
  <Field.Root>
    <Field.Label>
      Phone
      <Field.OptionalText />
    </Field.Label>
    <Input placeholder="+385 1 234 567" />
  </Field.Root>
</Box>
