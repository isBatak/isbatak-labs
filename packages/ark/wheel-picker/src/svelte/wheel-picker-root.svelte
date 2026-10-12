<script module lang="ts">
  import type { Assign } from "../types.js"
  import type { HTMLProps, PolymorphicProps, RefAttribute } from "./types.js"
  import type { UseWheelPickerProps } from "./use-wheel-picker.svelte.js"

  export interface WheelPickerRootBaseProps extends UseWheelPickerProps, PolymorphicProps<"div">, RefAttribute {}
  export interface WheelPickerRootProps extends Assign<HTMLProps<"div">, WheelPickerRootBaseProps> {}
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte"
  import * as wheelPicker from "@isbatak/zag-wheel-picker"
  import { mergeProps } from "@zag-js/svelte"
  import { WheelPickerProvider } from "./use-wheel-picker-context.js"
  import { useWheelPicker } from "./use-wheel-picker.svelte.js"

  let { ref = $bindable(null), value = $bindable(), defaultValue, ...props }: WheelPickerRootProps = $props()
  const providedId = $props.id()

  const [useWheelPickerProps, localProps] = $derived(wheelPicker.splitProps(props))

  const resolvedProps = $derived({
    ...useWheelPickerProps,
    id: useWheelPickerProps.id ?? providedId,
    value,
    defaultValue,
    onValueChange(details: wheelPicker.ValueChangeDetails) {
      useWheelPickerProps.onValueChange?.(details)
      if (value !== undefined) value = details.value
    },
  } as UseWheelPickerProps)

  const api = useWheelPicker(() => resolvedProps)
  const mergedProps = $derived(mergeProps(api().getRootProps(), localProps))

  WheelPickerProvider(api as never)
</script>

<Ark as="div" bind:ref {...mergedProps} />
