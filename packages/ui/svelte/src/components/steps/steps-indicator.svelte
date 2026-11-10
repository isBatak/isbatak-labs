<script module lang="ts">
  import { Steps } from "@ark-ui/svelte/steps"

  export type StepsIndicatorProps = Steps.IndicatorProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { Icon } from "../icon"
  import { useStepsStyles } from "./steps-styles"
  import StepsNumber from "./steps-number.svelte"
  import StepsStatus from "./steps-status.svelte"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: StepsIndicatorProps = $props()
  const styles = useStepsStyles()
</script>

{#snippet complete()}
  <Icon name="check" />
{/snippet}

{#snippet incomplete()}
  <StepsNumber />
{/snippet}

<Steps.Indicator bind:ref {...props} data-slot="indicator" class={[!unstyled && styles().indicator, className]}>
  {#if children}{@render children()}{:else}<StepsStatus {complete} {incomplete} />{/if}
</Steps.Indicator>
