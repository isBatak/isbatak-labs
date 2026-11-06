<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { Field } from "@isbatak/svelte-ui/field"
  import { Textarea } from "@isbatak/svelte-ui/textarea"
</script>

<Box maxW="sm" w="full">
  <Field.Root>
    <Field.Label>Bio</Field.Label>
    <Textarea placeholder="Tell us about yourself" />
    <Field.HelperText>Max 500 characters.</Field.HelperText>
  </Field.Root>
</Box>
