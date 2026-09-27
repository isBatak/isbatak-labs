<script module lang="ts">
  import { group, type GroupVariantProps } from "@isbatak/panda-ds/recipes"
  import type { HTMLAttributes } from "svelte/elements"

  export interface GroupProps extends HTMLAttributes<HTMLDivElement>, GroupVariantProps {
    ref?: HTMLDivElement | null
    skip?: ((child: HTMLElement) => boolean | undefined) | undefined
  }

  function setDataAttr(element: HTMLElement, name: string, value: boolean) {
    if (value) element.setAttribute(name, "")
    else element.removeAttribute(name)
  }

  function applyGroupAttrs(node: HTMLElement, skip: GroupProps["skip"]) {
    const childArray = Array.from(node.children).filter((child): child is HTMLElement => child instanceof HTMLElement)
    if (childArray.length === 1) return

    const validChildArray = childArray.filter((child) => !skip?.(child))
    const validChildCount = validChildArray.length
    if (validChildCount === 1) return

    validChildArray.forEach((child, index) => {
      child.setAttribute("data-group-item", "")
      setDataAttr(child, "data-first", index === 0)
      setDataAttr(child, "data-last", index === validChildCount - 1)
      setDataAttr(child, "data-between", index > 0 && index < validChildCount - 1)
      child.style.setProperty("--group-count", String(validChildCount))
      child.style.setProperty("--group-index", String(index))
    })
  }
</script>

<script lang="ts">
  let { ref = $bindable(null), skip, class: className, children, ...props }: GroupProps = $props()
  const [variantProps, localProps] = $derived(group.splitVariantProps(props))

  $effect(() => {
    const node = ref
    if (!node) return
    applyGroupAttrs(node, skip)
    const observer = new MutationObserver(() => applyGroupAttrs(node, skip))
    observer.observe(node, { childList: true })
    return () => observer.disconnect()
  })
</script>

<div bind:this={ref} {...localProps} class={[group(variantProps), className]}>{@render children?.()}</div>
