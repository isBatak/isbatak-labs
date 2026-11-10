<script lang="ts">
  import { Splitter } from "@isbatak/svelte-ui/splitter"
  import { css } from "styled-system/css"
</script>

<Splitter.Root panels={[{ id: "a", minSize: 20, maxSize: 60 }, { id: "b" }]} defaultSize={[40, 60]} class={css({ minH: "60", borderWidth: "1px", borderRadius: "l2" })}>
  <Splitter.Panel id="a" class={css({ display: "flex", alignItems: "center", justifyContent: "center", textStyle: "sm", color: "fg.muted" })}>20% to 60%</Splitter.Panel>
  <Splitter.ResizeTrigger id="a:b" />
  <Splitter.Panel id="b" class={css({ display: "flex", alignItems: "center", justifyContent: "center", textStyle: "sm", color: "fg.muted" })}>B</Splitter.Panel>
</Splitter.Root>
