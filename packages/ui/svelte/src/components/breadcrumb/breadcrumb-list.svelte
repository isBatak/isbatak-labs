<script module lang="ts">
  import type { HTMLProps, PolymorphicProps } from "@ark-ui/svelte"

  export type BreadcrumbListProps = HTMLProps<"ol"> &
    PolymorphicProps<"ol"> & { unstyled?: boolean | undefined; ref?: Element | null }
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte/factory"
  import { useBreadcrumbStyles } from "./breadcrumb-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: BreadcrumbListProps = $props()
  const styles = useBreadcrumbStyles()
</script>

<Ark as="ol" bind:ref {...props} data-slot="list" class={[!unstyled && styles().list, className]} />
