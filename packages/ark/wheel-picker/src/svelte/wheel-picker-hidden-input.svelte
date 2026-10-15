<script module lang="ts">
  import type { Assign } from "../types.js"
  import type { HTMLProps, PolymorphicProps, RefAttribute } from "./types.js"

  export interface WheelPickerHiddenInputBaseProps extends PolymorphicProps<"input">, RefAttribute {}
  export interface WheelPickerHiddenInputProps extends Assign<HTMLProps<"input">, WheelPickerHiddenInputBaseProps> {}
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte"
  import { mergeProps } from "@zag-js/svelte"
  import { useWheelPickerContext } from "./use-wheel-picker-context.js"

  let { ref = $bindable(null), ...props }: WheelPickerHiddenInputProps = $props()
  const api = useWheelPickerContext()
  const mergedProps = $derived(mergeProps(api().getHiddenInputProps(), props))
</script>

<Ark as="input" bind:ref {...mergedProps} />
