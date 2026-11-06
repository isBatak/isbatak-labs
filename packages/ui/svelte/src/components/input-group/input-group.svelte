<script module lang="ts">
  import type { Snippet } from "svelte"

  import type { GroupProps } from "../group"

  export type InputGroupProps = GroupProps & {
    startElement?: Snippet | undefined
    endElement?: Snippet | undefined
    startAddon?: Snippet | undefined
    endAddon?: Snippet | undefined
    startOffset?: string | undefined
    endOffset?: string | undefined
  }
</script>

<script lang="ts">
  import { css } from "@isbatak/panda-ds/css"

  import { Group } from "../group"
  import InputAddon from "./input-addon.svelte"
  import InputElement from "./input-element.svelte"

  let {
    startElement,
    endElement,
    startAddon,
    endAddon,
    startOffset = "0px",
    endOffset = "0px",
    class: className,
    children,
    ...props
  }: InputGroupProps = $props()

  const groupClass = css({ w: "full" })
</script>

<Group
  attached={Boolean(startAddon || endAddon)}
  skip={(child) => child.hasAttribute("data-input-element")}
  data-start-element={startElement ? "" : undefined}
  data-end-element={endElement ? "" : undefined}
  style="--input-start-offset: {startOffset}; --input-end-offset: {endOffset}"
  {...props}
  class={[groupClass, className]}
>
  {#if startAddon}<InputAddon>{@render startAddon()}</InputAddon>{/if}
  {#if startElement}<InputElement style="pointer-events: none">{@render startElement()}</InputElement>{/if}
  {@render children?.()}
  {#if endElement}<InputElement placement="end">{@render endElement()}</InputElement>{/if}
  {#if endAddon}<InputAddon>{@render endAddon()}</InputAddon>{/if}
</Group>
