<script module lang="ts">
  import type { HTMLProps, PolymorphicProps } from "@ark-ui/svelte"

  export type BreadcrumbCurrentLinkProps = HTMLProps<"span"> &
    PolymorphicProps<"span"> & { unstyled?: boolean | undefined; ref?: Element | null }
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte/factory"
  import { useBreadcrumbStyles } from "./breadcrumb-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: BreadcrumbCurrentLinkProps = $props()
  const styles = useBreadcrumbStyles()
</script>

<Ark as="span" bind:ref role="link" aria-current="page" aria-disabled="true" {...props} data-slot="currentLink" class={[!unstyled && styles().currentLink, className]} />
