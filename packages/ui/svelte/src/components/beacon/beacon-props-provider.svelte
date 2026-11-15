<script module lang="ts">
  import type { BeaconVariantProps } from "@isbatak/panda-ds/recipes"
  import type { Snippet } from "svelte"

  export interface BeaconPropsProviderProps extends BeaconVariantProps {
    children?: Snippet
  }
</script>

<script lang="ts">
  import { provideBeaconProps } from "./beacon-props"

  let { children, ...props }: BeaconPropsProviderProps = $props()
  provideBeaconProps(() => props)
</script>

{@render children?.()}
