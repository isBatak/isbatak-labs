<script module lang="ts">
  import type { SpinnerVariantProps } from "@isbatak/panda-ds/recipes"
  import type { Snippet } from "svelte"

  export interface SpinnerPropsProviderProps extends SpinnerVariantProps {
    children?: Snippet
  }
</script>

<script lang="ts">
  import { provideSpinnerProps } from "./spinner-props"

  let { children, ...props }: SpinnerPropsProviderProps = $props()
  provideSpinnerProps(() => props)
</script>

{@render children?.()}
