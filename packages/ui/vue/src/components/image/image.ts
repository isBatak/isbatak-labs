import { ark } from "@ark-ui/vue/factory"
import { styled } from "@isbatak/vue-ui/jsx"
import { type Component, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

const StyledImage = styled(ark.img)

export type ImageProps = Omit<ComponentProps<typeof StyledImage>, "align"> & {
  /**
   * How the image fits within its bounds. Maps to `object-fit`.
   * @default "cover"
   */
  fit?: ComponentProps<typeof StyledImage>["objectFit"]
  /**
   * How the image is aligned within its bounds. Maps to `object-position`.
   */
  align?: ComponentProps<typeof StyledImage>["objectPosition"]
}

export const Image = defineComponent({
  name: "Image",
  inheritAttrs: false,
  props: {
    fit: { type: String, default: "cover" },
    align: { type: String, default: undefined },
  },
  setup(props, { attrs, slots }) {
    return () => h(StyledImage as Component, { objectFit: props.fit, objectPosition: props.align, ...attrs }, slots)
  },
}) as unknown as Component<ImageProps>
