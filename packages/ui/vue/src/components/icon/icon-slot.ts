import { ark } from "@ark-ui/vue/factory"
import { type FunctionalComponent, type HTMLAttributes, defineComponent, h } from "vue"

interface IconSlotProps extends HTMLAttributes {
  asChild?: boolean | undefined
  /**
   * Extra pull toward the edge, added to the recipe's own, as a CSS length such as `"0.4px"` or `"0.18em"`. Use it to
   * land a single icon on its ink; a negative length pulls less.
   */
  offset?: string | undefined
}

export type StartIconProps = IconSlotProps
export type EndIconProps = IconSlotProps

function defineIconSlot(name: string, dataAttr: "data-icon-start" | "data-icon-end") {
  return defineComponent({
    name,
    inheritAttrs: false,
    props: { offset: { type: String, default: undefined } },
    setup(props, { attrs, slots }) {
      return () =>
        h(
          ark.span,
          {
            [dataAttr]: "",
            "aria-hidden": "true",
            ...attrs,
            style: [props.offset ? { "--icon-offset": props.offset } : undefined, attrs.style],
          },
          slots,
        )
    },
  }) as unknown as FunctionalComponent<IconSlotProps>
}

export const StartIcon = defineIconSlot("StartIcon", "data-icon-start")
export const EndIcon = defineIconSlot("EndIcon", "data-icon-end")
