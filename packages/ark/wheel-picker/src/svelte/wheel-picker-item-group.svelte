<script module lang="ts">
  import type { Assign } from "../types.js"
  import type { HTMLProps, PolymorphicProps, RefAttribute } from "./types.js"

  export interface WheelPickerItemGroupBaseProps extends PolymorphicProps<"div">, RefAttribute {}
  export interface WheelPickerItemGroupProps extends Assign<HTMLProps<"div">, WheelPickerItemGroupBaseProps> {}
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte"
  import { mergeProps } from "@zag-js/svelte"
  import { useWheelPickerContext } from "./use-wheel-picker-context.js"

  let { ref = $bindable(null), ...props }: WheelPickerItemGroupProps = $props()
  const api = useWheelPickerContext()
  const mergedProps = $derived(mergeProps(api().getItemGroupProps(), props))
</script>

<Ark as="div" bind:ref {...mergedProps} />
