<script module lang="ts">
  import type { JsxStyleProps } from "@isbatak/panda-ds/types"

  import type { BoxProps } from "../box"

  export type ImageProps = Omit<BoxProps<"img">, "fit" | "align"> & {
    /**
     * How the image fits within its bounds. Maps to `object-fit`.
     * @default "cover"
     */
    fit?: JsxStyleProps["objectFit"]
    /**
     * How the image is aligned within its bounds. Maps to `object-position`.
     */
    align?: JsxStyleProps["objectPosition"]
    /**
     * The `width` attribute, which reserves space before the image loads.
     */
    htmlWidth?: string | number | undefined
    /**
     * The `height` attribute, which reserves space before the image loads.
     */
    htmlHeight?: string | number | undefined
  }
</script>

<script lang="ts">
  import { css as toClass } from "@isbatak/panda-ds/css"
  import { splitCssProps } from "@isbatak/panda-ds/jsx/is-valid-prop"

  let { ref = $bindable(), fit = "cover", align, htmlWidth, htmlHeight, class: className, children: _children, as: _as, ...props }: ImageProps = $props()
  const [styleProps, htmlProps] = $derived(splitCssProps(props))
  const classes = $derived.by(() => {
    const { css: cssProp, ...propStyles } = styleProps
    const extra = Array.isArray(cssProp) ? cssProp : [cssProp]
    return toClass({ objectFit: fit, objectPosition: align }, propStyles, ...extra)
  })
</script>

<img bind:this={ref} {...htmlProps} width={htmlWidth} height={htmlHeight} class={[classes, className]} />
