<script module lang="ts">
  import type { Assign, Optional } from "../types.js"
  import type { HTMLProps, PolymorphicProps, RefAttribute } from "./types.js"
  import type { UseMasonryProps } from "./use-masonry.svelte.js"

  export interface MasonryRootBaseProps extends Optional<UseMasonryProps, "id">, PolymorphicProps<"div">, RefAttribute {}
  export interface MasonryRootProps extends Assign<HTMLProps<"div">, MasonryRootBaseProps> {}
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte"
  import * as masonry from "@isbatak/zag-masonry"
  import { mergeProps } from "@zag-js/svelte"
  import { MasonryProvider } from "./use-masonry-context.js"
  import { useMasonry } from "./use-masonry.svelte.js"

  let { ref = $bindable(null), ...props }: MasonryRootProps = $props()
  const providedId = $props.id()

  const [useMasonryProps, localProps] = $derived(masonry.splitProps(props as Omit<typeof props, "dir">))

  const api = useMasonry(() => ({ ...useMasonryProps, id: useMasonryProps.id ?? providedId }))
  const mergedProps = $derived(mergeProps(api().getRootProps(), localProps))

  MasonryProvider(api)
</script>

<Ark as="div" bind:ref {...mergedProps} />
