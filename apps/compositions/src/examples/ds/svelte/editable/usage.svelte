<script lang="ts">
  import { Editable } from "@isbatak/svelte-ui/editable"
</script>

<Editable.Root defaultValue="Click to edit">
  <Editable.Area>
    <Editable.Preview />
    <Editable.Input />
  </Editable.Area>
</Editable.Root>
