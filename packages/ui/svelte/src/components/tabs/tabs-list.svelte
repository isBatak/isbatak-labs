<script module lang="ts">
  import { Tabs } from "@ark-ui/svelte/tabs"

  export type TabsListProps = Tabs.ListProps
</script>

<script lang="ts">
  import { useTabsStyles } from "./tabs-styles"

  let { ref = $bindable(null), class: className, ...props }: TabsListProps = $props()
  const styles = useTabsStyles()
</script>

<Tabs.List bind:ref {...props} data-slot="list" class={[styles().list, className]} />
