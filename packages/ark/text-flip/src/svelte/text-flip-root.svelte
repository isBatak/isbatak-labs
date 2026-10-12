<script module lang="ts">
  import type { Assign, Optional } from "../types.js"
  import type { HTMLProps, PolymorphicProps, RefAttribute } from "./types.js"
  import type { UseTextFlipProps } from "./use-text-flip.svelte.js"

  export interface TextFlipRootBaseProps extends Optional<UseTextFlipProps, "id">, PolymorphicProps<"span">, RefAttribute {}
  export interface TextFlipRootProps extends Assign<HTMLProps<"span">, TextFlipRootBaseProps> {}
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte"
  import * as textFlip from "@isbatak/zag-text-flip"
  import { mergeProps } from "@zag-js/svelte"
  import { TextFlipProvider } from "./use-text-flip-context.js"
  import { useTextFlip } from "./use-text-flip.svelte.js"

  let { ref = $bindable(null), ...props }: TextFlipRootProps = $props()
  const providedId = $props.id()

  const [useTextFlipProps, localProps] = $derived(textFlip.splitProps(props))

  const api = useTextFlip(() => ({ ...useTextFlipProps, id: useTextFlipProps.id ?? providedId }))
  const mergedProps = $derived(mergeProps(api().getRootProps(), localProps))

  TextFlipProvider(api)
</script>

<Ark as="span" bind:ref {...mergedProps} />
