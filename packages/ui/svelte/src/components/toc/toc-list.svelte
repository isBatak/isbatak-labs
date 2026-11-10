<script module lang="ts">
  import { Toc } from "@ark-ui/svelte/toc"

  export type TocListProps = Toc.ListProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTocStyles } from "./toc-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TocListProps = $props()
  const styles = useTocStyles()
</script>

<Toc.List bind:ref {...props} data-slot="list" class={[!unstyled && styles().list, className]} />
