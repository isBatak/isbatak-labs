<script lang="ts">
  import { Splitter } from "@isbatak/svelte-ui/splitter"
  import { css } from "styled-system/css"
</script>

<Splitter.Root panels={[{ id: "a" }, { id: "b" }]} defaultSize={[40, 60]} class={css({ minH: "60", borderWidth: "1px", borderRadius: "l2" })}>
  <Splitter.Panel id="a" class={css({ display: "flex", alignItems: "center", justifyContent: "center", textStyle: "sm", color: "fg.muted" })}>A</Splitter.Panel>
  <Splitter.ResizeTrigger id="a:b" />
  <Splitter.Panel id="b">
    <Splitter.Root orientation="vertical" panels={[{ id: "c" }, { id: "d" }]} defaultSize={[50, 50]}>
      <Splitter.Panel id="c" class={css({ display: "flex", alignItems: "center", justifyContent: "center", textStyle: "sm", color: "fg.muted" })}>C</Splitter.Panel>
      <Splitter.ResizeTrigger id="c:d" />
      <Splitter.Panel id="d" class={css({ display: "flex", alignItems: "center", justifyContent: "center", textStyle: "sm", color: "fg.muted" })}>D</Splitter.Panel>
    </Splitter.Root>
  </Splitter.Panel>
</Splitter.Root>
