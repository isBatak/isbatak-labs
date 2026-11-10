<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export interface StepsNumberProps extends HTMLAttributes<HTMLSpanElement> {
    ref?: HTMLSpanElement | null
  }
</script>

<script lang="ts">
  import { useStepsItemContext } from "@ark-ui/svelte/steps"

  let { ref = $bindable(null), children, ...props }: StepsNumberProps = $props()
  const item = useStepsItemContext()
</script>

<span bind:this={ref} {...props}>{#if children}{@render children()}{:else}{item().index + 1}{/if}</span>
