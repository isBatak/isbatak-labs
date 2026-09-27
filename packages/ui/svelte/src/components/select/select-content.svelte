<script module lang="ts">
  import { Select } from "@ark-ui/svelte/select"

  export type SelectContentProps = Select.ContentProps
</script>

<script lang="ts">
  import { useSelectStyles } from "./select-styles"

  let { ref = $bindable(null), class: className, ...props }: SelectContentProps = $props()
  const styles = useSelectStyles()
</script>

<Select.Content bind:ref {...props} data-slot="content" class={[styles().content, className]} />
