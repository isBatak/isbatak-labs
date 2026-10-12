<script module lang="ts">
  import type { Assign } from "../types.js"
  import type { HTMLProps, PolymorphicProps, RefAttribute } from "./types.js"
  import type { UseTextFlipReturn } from "./use-text-flip.svelte.js"

  interface RootProviderProps {
    value: UseTextFlipReturn
  }

  export interface TextFlipRootProviderBaseProps extends RootProviderProps, PolymorphicProps<"span">, RefAttribute {}
  export interface TextFlipRootProviderProps extends Assign<HTMLProps<"span">, TextFlipRootProviderBaseProps> {}
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte"
  import { mergeProps } from "@zag-js/svelte"
  import { TextFlipProvider } from "./use-text-flip-context.js"

  let { ref = $bindable(null), value: api, ...localProps }: TextFlipRootProviderProps = $props()
  const mergedProps = $derived(mergeProps(api().getRootProps(), localProps))

  TextFlipProvider(() => api())
</script>

<Ark as="span" bind:ref {...mergedProps} />
