<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { Field } from "@isbatak/svelte-ui/field"
  import { Fieldset } from "@isbatak/svelte-ui/fieldset"
  import { Input } from "@isbatak/svelte-ui/input"
</script>

<Box maxW="md" w="full">
  <Fieldset.Root invalid>
    <Fieldset.Legend>Shipping</Fieldset.Legend>
    <Fieldset.Content>
      <Field.Root invalid>
        <Field.Label>Address</Field.Label>
        <Input />
      </Field.Root>
    </Fieldset.Content>
    <Fieldset.ErrorText>Fill in a shipping address.</Fieldset.ErrorText>
  </Fieldset.Root>
</Box>
