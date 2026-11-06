<script lang="ts">
  import { Editable } from "@isbatak/svelte-ui/editable"
</script>

<Editable.Root placeholder="Add a title">
  <Editable.Area>
    <Editable.Preview />
    <Editable.Input />
  </Editable.Area>
</Editable.Root>
