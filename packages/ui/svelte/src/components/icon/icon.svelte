<script module lang="ts">
  import type { IconName } from "@isbatak/icons"
  import { icon, type IconVariantProps } from "@isbatak/panda-ds/recipes"
  import type { SVGAttributes } from "svelte/elements"

  export interface IconProps extends Omit<SVGAttributes<SVGSVGElement>, "name">, IconVariantProps {
    name: IconName
    ref?: SVGSVGElement | null
  }
</script>

<script lang="ts">
  import { spriteUrl } from "@isbatak/icons"

  let { ref = $bindable(null), name, class: className, ...props }: IconProps = $props()
  const [variantProps, localProps] = $derived(icon.splitVariantProps(props))
</script>

<svg
  bind:this={ref}
  aria-hidden="true"
  data-name={name}
  {...localProps}
  class={[icon(variantProps), className]}
>
  <use href="{spriteUrl}#{name}" />
</svg>
