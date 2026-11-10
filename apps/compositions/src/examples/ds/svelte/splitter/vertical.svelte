<script lang="ts">
  import { Splitter } from "@isbatak/svelte-ui/splitter"
  import { css } from "styled-system/css"
</script>

<Splitter.Root orientation="vertical" panels={[{ id: "a" }, { id: "b" }]} defaultSize={[50, 50]} class={css({ minH: "60", borderWidth: "1px", borderRadius: "l2" })}>
  <Splitter.Panel id="a" class={css({ display: "flex", alignItems: "center", justifyContent: "center", textStyle: "sm", color: "fg.muted" })}>A</Splitter.Panel>
  <Splitter.ResizeTrigger id="a:b" />
  <Splitter.Panel id="b" class={css({ display: "flex", alignItems: "center", justifyContent: "center", textStyle: "sm", color: "fg.muted" })}>B</Splitter.Panel>
</Splitter.Root>
