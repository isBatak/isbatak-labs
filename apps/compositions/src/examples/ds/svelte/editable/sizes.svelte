<script lang="ts">
  import { Editable } from "@isbatak/svelte-ui/editable"
  import { Stack } from "@isbatak/svelte-ui/stack"
</script>

<Stack gap="4" align="flex-start">
  <Editable.Root defaultValue="Size sm" size="sm">
    <Editable.Area>
      <Editable.Preview />
      <Editable.Input />
    </Editable.Area>
  </Editable.Root>
  <Editable.Root defaultValue="Size md" size="md">
    <Editable.Area>
      <Editable.Preview />
      <Editable.Input />
    </Editable.Area>
  </Editable.Root>
  <Editable.Root defaultValue="Size lg" size="lg">
    <Editable.Area>
      <Editable.Preview />
      <Editable.Input />
    </Editable.Area>
  </Editable.Root>
</Stack>
