<script module lang="ts">
  import { Toc, type UseTocProps } from "@ark-ui/svelte/toc"
  import { toc, type TocVariantProps } from "@isbatak/panda-ds/recipes"

  export type TocRootProps = Toc.RootProps & TocVariantProps & { unstyled?: boolean | undefined }

  const tocPropKeys = [
    "activeIds",
    "autoScroll",
    "defaultActiveIds",
    "scrollEl",
    "id",
    "ids",
    "items",
    "onActiveChange",
    "rootMargin",
    "scrollBehavior",
    "threshold",
  ] as const

  function splitTocProps<T extends Record<string, unknown>>(props: T) {
    const tocProps: Record<string, unknown> = {}
    const localProps: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(props)) {
      if ((tocPropKeys as readonly string[]).includes(key)) tocProps[key] = value
      else localProps[key] = value
    }
    return [tocProps as Omit<UseTocProps, "id"> & { id?: string | undefined }, localProps] as const
  }
</script>

<script lang="ts">
  import { useToc } from "@ark-ui/svelte/toc"
  import { provideTocStyles } from "./toc-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TocRootProps = $props()
  const providedId = $props.id()
  const [variantProps, rest] = $derived(toc.splitVariantProps(props))
  const [tocProps, localProps] = $derived(splitTocProps(rest))
  const styles = $derived(toc(variantProps))
  provideTocStyles(() => styles)

  const api = useToc(() => ({ ...tocProps, id: tocProps.id ?? providedId }))
</script>

<Toc.RootProvider
  bind:ref
  value={api}
  {...localProps}
  data-slot="root"
  class={[!unstyled && styles.root, className]}
/>
