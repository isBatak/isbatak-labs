<script lang="ts">
  import { NativeSelect } from "@isbatak/svelte-ui/native-select"
  import { css } from "styled-system/css"
</script>

<NativeSelect.Root class={css({ maxW: "xs" })}>
  <NativeSelect.Field aria-label="Framework">
    <option value="">Select framework</option>
    <option value="react">React</option>
    <option value="vue">Vue</option>
    <option value="solid">Solid</option>
    <option value="svelte">Svelte</option>
  </NativeSelect.Field>
  <NativeSelect.Indicator />
</NativeSelect.Root>
