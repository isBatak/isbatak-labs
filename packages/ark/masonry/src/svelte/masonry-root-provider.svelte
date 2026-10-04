<script module lang="ts">
  import type { Assign } from "../types.js"
  import type { HTMLProps, PolymorphicProps, RefAttribute } from "./types.js"
  import type { UseMasonryReturn } from "./use-masonry.svelte.js"

  interface RootProviderProps {
    value: UseMasonryReturn
  }

  export interface MasonryRootProviderBaseProps extends RootProviderProps, PolymorphicProps<"div">, RefAttribute {}
  export interface MasonryRootProviderProps extends Assign<HTMLProps<"div">, MasonryRootProviderBaseProps> {}
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte"
  import { mergeProps } from "@zag-js/svelte"
  import { MasonryProvider } from "./use-masonry-context.js"

  let { ref = $bindable(null), value: api, ...localProps }: MasonryRootProviderProps = $props()
  const mergedProps = $derived(mergeProps(api().getRootProps(), localProps))

  MasonryProvider(() => api())
</script>

<Ark as="div" bind:ref {...mergedProps} />
