<script module lang="ts">
  import type { HTMLProps, PolymorphicProps } from "@ark-ui/svelte"

  export type BreadcrumbEllipsisProps = HTMLProps<"li"> &
    PolymorphicProps<"li"> & { unstyled?: boolean | undefined; ref?: Element | null }
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte/factory"
  import { Icon } from "../icon"
  import { useBreadcrumbStyles } from "./breadcrumb-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: BreadcrumbEllipsisProps = $props()
  const styles = useBreadcrumbStyles()
</script>

<Ark
  as="li"
  bind:ref
  role="presentation"
  aria-hidden="true"
  {...props}
  data-slot="ellipsis"
  class={[!unstyled && styles().ellipsis, className]}
>
  {#if children}{@render children()}{:else}<Icon name="dots" />{/if}
</Ark>
