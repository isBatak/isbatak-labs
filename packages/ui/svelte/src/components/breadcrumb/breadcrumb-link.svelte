<script module lang="ts">
  import type { HTMLProps, PolymorphicProps } from "@ark-ui/svelte"

  export type BreadcrumbLinkProps = HTMLProps<"a"> &
    PolymorphicProps<"a"> & { unstyled?: boolean | undefined; ref?: Element | null }
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte/factory"
  import { useBreadcrumbStyles } from "./breadcrumb-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: BreadcrumbLinkProps = $props()
  const styles = useBreadcrumbStyles()
</script>

<Ark as="a" bind:ref {...props} data-slot="link" class={[!unstyled && styles().link, className]} />
