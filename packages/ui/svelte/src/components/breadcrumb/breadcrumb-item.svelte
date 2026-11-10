<script module lang="ts">
  import type { HTMLProps, PolymorphicProps } from "@ark-ui/svelte"

  export type BreadcrumbItemProps = HTMLProps<"li"> &
    PolymorphicProps<"li"> & { unstyled?: boolean | undefined; ref?: Element | null }
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte/factory"
  import { useBreadcrumbStyles } from "./breadcrumb-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: BreadcrumbItemProps = $props()
  const styles = useBreadcrumbStyles()
</script>

<Ark as="li" bind:ref {...props} data-slot="item" class={[!unstyled && styles().item, className]} />
