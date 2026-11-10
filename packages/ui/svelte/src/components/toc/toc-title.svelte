<script module lang="ts">
  import { Toc } from "@ark-ui/svelte/toc"

  export type TocTitleProps = Toc.TitleProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTocStyles } from "./toc-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TocTitleProps = $props()
  const styles = useTocStyles()
</script>

<Toc.Title bind:ref {...props} data-slot="title" class={[!unstyled && styles().title, className]} />
