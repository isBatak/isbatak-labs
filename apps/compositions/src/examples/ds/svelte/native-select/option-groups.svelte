<script lang="ts">
  import { NativeSelect } from "@isbatak/svelte-ui/native-select"
  import { css } from "styled-system/css"
</script>

<NativeSelect.Root class={css({ maxW: "xs" })}>
  <NativeSelect.Field aria-label="Fruit or vegetable">
    <optgroup label="Fruits">
      <option value="apple">Apple</option>
      <option value="banana">Banana</option>
    </optgroup>
    <optgroup label="Vegetables">
      <option value="carrot">Carrot</option>
      <option value="pea">Pea</option>
    </optgroup>
  </NativeSelect.Field>
  <NativeSelect.Indicator />
</NativeSelect.Root>
