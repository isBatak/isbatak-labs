<script lang="ts">
  import { Splitter } from "@isbatak/svelte-ui/splitter"
  import { css } from "styled-system/css"

  let size = $state([30, 70])
</script>

<Splitter.Root panels={[{ id: "a" }, { id: "b" }]} bind:size={size} class={css({ minH: "60", borderWidth: "1px", borderRadius: "l2" })}>
  <Splitter.Panel id="a" class={css({ display: "flex", alignItems: "center", justifyContent: "center", textStyle: "sm", color: "fg.muted" })}>{Math.round(size[0] ?? 0)}%</Splitter.Panel>
  <Splitter.ResizeTrigger id="a:b" />
  <Splitter.Panel id="b" class={css({ display: "flex", alignItems: "center", justifyContent: "center", textStyle: "sm", color: "fg.muted" })}>{Math.round(size[1] ?? 0)}%</Splitter.Panel>
</Splitter.Root>
