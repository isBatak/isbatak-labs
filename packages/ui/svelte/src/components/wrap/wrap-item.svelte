<script module lang="ts">
  import type { BoxProps } from "../box"

  export type WrapItemProps = BoxProps
</script>

<script lang="ts">
  import { Box } from "../box"

  let { ref = $bindable(), ...props }: WrapItemProps = $props()
</script>

<Box bind:ref display="flex" alignItems="flex-start" {...props} />
