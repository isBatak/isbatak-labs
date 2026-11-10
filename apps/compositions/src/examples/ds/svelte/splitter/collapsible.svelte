<script lang="ts">
  import { Splitter } from "@isbatak/svelte-ui/splitter"
  import { css } from "styled-system/css"
</script>

<Splitter.Root panels={[{ id: "a", collapsible: true, collapsedSize: 5, minSize: 20 }, { id: "b" }]} defaultSize={[30, 70]} class={css({ minH: "60", borderWidth: "1px", borderRadius: "l2" })}>
  <Splitter.Panel id="a" class={css({ display: "flex", alignItems: "center", justifyContent: "center", textStyle: "sm", color: "fg.muted" })}>A</Splitter.Panel>
  <Splitter.ResizeTrigger id="a:b" />
  <Splitter.Panel id="b" class={css({ display: "flex", alignItems: "center", justifyContent: "center", textStyle: "sm", color: "fg.muted" })}>Drag the handle to the left to collapse A</Splitter.Panel>
</Splitter.Root>
