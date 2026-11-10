<script module lang="ts">
  import type { HTMLProps, PolymorphicProps } from "@ark-ui/svelte"
  import type { BreadcrumbVariantProps } from "@isbatak/panda-ds/recipes"

  export type BreadcrumbRootProps = HTMLProps<"nav"> &
    PolymorphicProps<"nav"> &
    BreadcrumbVariantProps & { unstyled?: boolean | undefined; ref?: Element | null }
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte/factory"
  import { breadcrumb } from "@isbatak/panda-ds/recipes"
  import { provideBreadcrumbStyles } from "./breadcrumb-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: BreadcrumbRootProps = $props()
  const [variantProps, localProps] = $derived(breadcrumb.splitVariantProps(props))
  const styles = $derived(breadcrumb(variantProps))
  provideBreadcrumbStyles(() => styles)
</script>

<Ark
  as="nav"
  bind:ref
  aria-label="Breadcrumb"
  {...localProps}
  data-slot="root"
  class={[!unstyled && styles.root, className]}
/>
