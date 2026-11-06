<script module lang="ts">
  import type { Snippet } from "svelte"
  import type { HTMLAttributes } from "svelte/elements"

  export interface LoaderProps extends HTMLAttributes<HTMLSpanElement> {
    unstyled?: boolean | undefined
    visible?: boolean | undefined
    spinner?: Snippet | undefined
    spinnerPlacement?: "start" | "end" | undefined
    text?: string | undefined
  }
</script>

<script lang="ts">
  import { css } from "@isbatak/panda-ds/css"
  import { absoluteCenter } from "@isbatak/panda-ds/patterns"
  import { Spinner } from "../spinner"

  let {
    visible = true,
    spinner,
    spinnerPlacement = "start",
    text,
    children,
    unstyled, class: className,
    ...props
  }: LoaderProps = $props()
</script>

{#snippet spinnerNode()}
  {#if spinner}
    {@render spinner()}
  {:else}
    <Spinner size="inherit" class={css({ borderWidth: "0.125em", color: "inherit" })} />
  {/if}
{/snippet}

{#if !visible}
  {@render children?.()}
{:else if text}
  <span {...props} class={[!unstyled && css({ display: "contents" }), className]}>
    {#if spinnerPlacement === "start"}
      <span data-icon-start="" aria-hidden="true" class={css({ display: "inline-flex" })}>{@render spinnerNode()}</span>
    {/if}
    {text}
    {#if spinnerPlacement === "end"}
      <span data-icon-end="" aria-hidden="true" class={css({ display: "inline-flex" })}>{@render spinnerNode()}</span>
    {/if}
  </span>
{:else}
  <span {...props} class={[!unstyled && css({ display: "contents" }), className]}>
    <span class={absoluteCenter({ display: "inline-flex" })}>{@render spinnerNode()}</span>
    <span class={css({ display: "contents", visibility: "hidden" })}>{@render children?.()}</span>
  </span>
{/if}
