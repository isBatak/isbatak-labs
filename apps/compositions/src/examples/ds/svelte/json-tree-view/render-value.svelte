<script lang="ts">
  import { JsonTreeView } from "@isbatak/svelte-ui/json-tree-view"
  import { Link } from "@isbatak/svelte-ui/link"

  const data = {
    name: "John Doe",
    age: 30,
    number: Number.NaN,
    email: "john.doe@example.com",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
  }

  const unquote = (value: string) => value.replace(/^"(.*)"$/, "$1")

  const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(unquote(value))
</script>

<JsonTreeView.Root defaultExpandedDepth={2} {data}>
  <JsonTreeView.Tree>
    {#snippet renderValue(node)}
      {#if node.type === "text" && typeof node.value === "string" && isEmail(node.value)}
        <Link href={`mailto:${unquote(node.value)}`} target="_blank" rel="noreferrer">{node.value}</Link>
      {:else if node.type === "text"}
        {node.value}
      {/if}
    {/snippet}
  </JsonTreeView.Tree>
</JsonTreeView.Root>
