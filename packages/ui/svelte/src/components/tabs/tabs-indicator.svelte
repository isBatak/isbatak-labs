<script module lang="ts">
  import { Tabs } from "@ark-ui/svelte/tabs"

  export type TabsIndicatorProps = Tabs.IndicatorProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTabsStyles } from "./tabs-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TabsIndicatorProps = $props()
  const styles = useTabsStyles()
</script>

<Tabs.Indicator bind:ref {...props} data-slot="indicator" class={[!unstyled && styles().indicator, className]} />
