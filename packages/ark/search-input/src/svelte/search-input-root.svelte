<script module lang="ts">
  import type { Assign, Optional } from "../types.js"
  import type { HTMLProps, PolymorphicProps, RefAttribute } from "./types.js"
  import type { UseSearchInputProps } from "./use-search-input.svelte.js"

  export interface SearchInputRootBaseProps
    extends Optional<UseSearchInputProps, "id">, PolymorphicProps<"div">, RefAttribute {}
  export interface SearchInputRootProps extends Assign<HTMLProps<"div">, SearchInputRootBaseProps> {}
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte"
  import { mergeProps } from "@zag-js/svelte"
  import * as searchInput from "../core/index.js"
  import { SearchInputProvider } from "./use-search-input-context.js"
  import { useSearchInput } from "./use-search-input.svelte.js"

  let { ref = $bindable(null), ...props }: SearchInputRootProps = $props()
  const providedId = $props.id()

  const [useSearchInputProps, localProps] = $derived(searchInput.splitProps(props as Omit<typeof props, "dir">))

  const api = useSearchInput(() => ({ ...useSearchInputProps, id: useSearchInputProps.id ?? providedId }))
  const mergedProps = $derived(mergeProps(api().getRootProps(), localProps))

  SearchInputProvider(api)
</script>

<Ark as="div" bind:ref {...mergedProps} />
