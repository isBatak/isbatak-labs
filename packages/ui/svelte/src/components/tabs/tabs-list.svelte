<script module lang="ts">
  import { Tabs } from "@ark-ui/svelte/tabs"

  export type TabsListProps = Tabs.ListProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTabsStyles } from "./tabs-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TabsListProps = $props()
  const styles = useTabsStyles()
</script>

<Tabs.List bind:ref {...props} data-slot="list" class={[!unstyled && styles().list, className]} />
