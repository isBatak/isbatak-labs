<script lang="ts">
  import { Editable } from "@isbatak/svelte-ui/editable"
</script>

<Editable.Root defaultValue="Double-click to edit" activationMode="dblclick">
  <Editable.Area>
    <Editable.Preview />
    <Editable.Input />
  </Editable.Area>
</Editable.Root>
