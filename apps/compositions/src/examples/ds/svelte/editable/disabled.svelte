<script lang="ts">
  import { Editable } from "@isbatak/svelte-ui/editable"
</script>

<Editable.Root defaultValue="Can't edit this" disabled>
  <Editable.Area>
    <Editable.Preview />
    <Editable.Input />
  </Editable.Area>
</Editable.Root>
