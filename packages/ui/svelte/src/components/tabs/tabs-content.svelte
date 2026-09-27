<script module lang="ts">
  import { Tabs } from "@ark-ui/svelte/tabs"

  export type TabsContentProps = Tabs.ContentProps
</script>

<script lang="ts">
  import { useTabsStyles } from "./tabs-styles"

  let { ref = $bindable(null), class: className, ...props }: TabsContentProps = $props()
  const styles = useTabsStyles()
</script>

<Tabs.Content bind:ref {...props} data-slot="content" class={[styles().content, className]} />
