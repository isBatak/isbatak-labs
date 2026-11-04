<script module lang="ts">
  import type { JsxStyleProps } from "@isbatak/panda-ds/types"
  import type { Snippet } from "svelte"
  import type { SvelteHTMLElements } from "svelte/elements"

  export type BoxProps<T extends keyof SvelteHTMLElements = "div"> = Omit<
    SvelteHTMLElements[T],
    keyof JsxStyleProps | "children"
  > &
    JsxStyleProps & {
      as?: T
      ref?: HTMLElement | null | undefined
      children?: Snippet
    }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { css as toClass } from "@isbatak/panda-ds/css"
  import { splitCssProps } from "@isbatak/panda-ds/jsx/is-valid-prop"

  let { as, ref = $bindable(), class: className, children, ...props }: BoxProps<T> = $props()
  const [styleProps, htmlProps] = $derived(splitCssProps(props))
  const classes = $derived.by(() => {
    const { css: cssProp, ...propStyles } = styleProps
    const extra = Array.isArray(cssProp) ? cssProp : [cssProp]
    return toClass(propStyles, ...extra)
  })
</script>

<svelte:element this={as ?? "div"} bind:this={ref} {...htmlProps} class={[classes, className]}>
  {@render children?.()}
</svelte:element>
