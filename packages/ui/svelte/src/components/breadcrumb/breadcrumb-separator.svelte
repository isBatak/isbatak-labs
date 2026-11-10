<script module lang="ts">
  import type { HTMLProps, PolymorphicProps } from "@ark-ui/svelte"

  export type BreadcrumbSeparatorProps = HTMLProps<"li"> &
    PolymorphicProps<"li"> & { unstyled?: boolean | undefined; ref?: Element | null }
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte/factory"
  import { Icon } from "../icon"
  import { useBreadcrumbStyles } from "./breadcrumb-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: BreadcrumbSeparatorProps = $props()
  const styles = useBreadcrumbStyles()
</script>

<Ark
  as="li"
  bind:ref
  role="presentation"
  aria-hidden="true"
  {...props}
  data-slot="separator"
  class={[!unstyled && styles().separator, className]}
>
  {#if children}{@render children()}{:else}<Icon name="chevron-right" />{/if}
</Ark>
