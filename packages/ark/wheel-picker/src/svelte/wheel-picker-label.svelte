<script module lang="ts">
  import type { Assign } from "../types.js"
  import type { HTMLProps, PolymorphicProps, RefAttribute } from "./types.js"

  export interface WheelPickerLabelBaseProps extends PolymorphicProps<"span">, RefAttribute {}
  export interface WheelPickerLabelProps extends Assign<HTMLProps<"span">, WheelPickerLabelBaseProps> {}
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte"
  import { mergeProps } from "@zag-js/svelte"
  import { useWheelPickerContext } from "./use-wheel-picker-context.js"

  let { ref = $bindable(null), ...props }: WheelPickerLabelProps = $props()
  const api = useWheelPickerContext()
  const mergedProps = $derived(mergeProps(api().getLabelProps(), props))
</script>

<Ark as="span" bind:ref {...mergedProps} />
