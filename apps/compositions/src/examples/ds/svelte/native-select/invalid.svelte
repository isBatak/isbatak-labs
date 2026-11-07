<script lang="ts">
  import { Field } from "@isbatak/svelte-ui/field"
  import { NativeSelect } from "@isbatak/svelte-ui/native-select"
  import { css } from "styled-system/css"
</script>

<Field.Root invalid class={css({ maxW: "xs" })}>
  <Field.Label>Framework</Field.Label>
  <NativeSelect.Root>
    <NativeSelect.Field>
      <option value="">Select framework</option>
      <option value="react">React</option>
      <option value="vue">Vue</option>
      <option value="solid">Solid</option>
      <option value="svelte">Svelte</option>
    </NativeSelect.Field>
    <NativeSelect.Indicator />
  </NativeSelect.Root>
  <Field.ErrorText>Pick a framework.</Field.ErrorText>
</Field.Root>
