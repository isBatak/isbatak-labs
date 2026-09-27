<script module lang="ts">
  import { Tabs } from "@ark-ui/svelte/tabs"

  export type TabsTriggerProps = Tabs.TriggerProps
</script>

<script lang="ts">
  import { useTabsStyles } from "./tabs-styles"

  let { ref = $bindable(null), class: className, ...props }: TabsTriggerProps = $props()
  const styles = useTabsStyles()
</script>

<Tabs.Trigger bind:ref {...props} data-slot="trigger" class={[styles().trigger, className]} />
