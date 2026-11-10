<script module lang="ts">
  import { Toc } from "@ark-ui/svelte/toc"

  export type TocIndicatorProps = Toc.IndicatorProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTocStyles } from "./toc-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TocIndicatorProps = $props()
  const styles = useTocStyles()
</script>

<Toc.Indicator bind:ref {...props} data-slot="indicator" class={[!unstyled && styles().indicator, className]} />
