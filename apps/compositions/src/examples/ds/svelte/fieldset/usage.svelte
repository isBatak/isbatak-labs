<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { Field } from "@isbatak/svelte-ui/field"
  import { Fieldset } from "@isbatak/svelte-ui/fieldset"
  import { Input } from "@isbatak/svelte-ui/input"
</script>

<Box maxW="md" w="full">
  <Fieldset.Root size="lg">
    <Fieldset.Legend>Contact details</Fieldset.Legend>
    <Fieldset.HelperText>Please provide your contact details below.</Fieldset.HelperText>
    <Fieldset.Content>
      <Field.Root>
        <Field.Label>Name</Field.Label>
        <Input />
      </Field.Root>
      <Field.Root>
        <Field.Label>Email address</Field.Label>
        <Input type="email" />
      </Field.Root>
    </Fieldset.Content>
  </Fieldset.Root>
</Box>
