<script module lang="ts">
  import { Toc } from "@ark-ui/svelte/toc"

  export type TocItemProps = Toc.ItemProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTocStyles } from "./toc-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TocItemProps = $props()
  const styles = useTocStyles()
</script>

<Toc.Item bind:ref {...props} data-slot="item" class={[!unstyled && styles().item, className]} />
