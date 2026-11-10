<script module lang="ts">
  import { Toc } from "@ark-ui/svelte/toc"

  export type TocLinkProps = Toc.LinkProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTocStyles } from "./toc-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TocLinkProps = $props()
  const styles = useTocStyles()
</script>

<Toc.Link bind:ref {...props} data-slot="link" class={[!unstyled && styles().link, className]} />
