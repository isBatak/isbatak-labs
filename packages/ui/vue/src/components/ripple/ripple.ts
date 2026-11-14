import { ark, type HTMLArkProps } from "@ark-ui/vue/factory"
import { createRecipeContext } from "@isbatak/vue-ui/jsx"
import { ripple } from "@isbatak/panda-ds/recipes"
import { type FunctionalComponent, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

import { spawnRipple } from "./spawn-ripple"

const { withContext } = createRecipeContext(ripple)

const StyledRipple = withContext(ark.span as unknown as FunctionalComponent<HTMLArkProps<"span">>)

export interface RippleOptions {
  /**
   * Start every ripple from the center instead of the pointer position
   * @default false
   */
  centered?: boolean | undefined
  /**
   * Stop spawning new ripples
   * @default false
   */
  disabled?: boolean | undefined
}

type Handler<E extends Event> = ((event: E) => void) | ((event: E) => void)[] | undefined

function callHandler<E extends Event>(handler: unknown, event: E) {
  const handlers = (Array.isArray(handler) ? handler : [handler]) as Exclude<Handler<E>, undefined>[]
  for (const fn of handlers) if (typeof fn === "function") fn(event)
}

export const Ripple = defineComponent({
  name: "Ripple",
  inheritAttrs: false,
  props: {
    asChild: Boolean,
    centered: Boolean,
    disabled: Boolean,
  },
  setup(props, { attrs, slots }) {
    const handlePointerdown = (event: PointerEvent) => {
      callHandler(attrs.onPointerdown, event)
      if (props.disabled || event.defaultPrevented || event.button !== 0) return
      const target = event.currentTarget as HTMLElement
      spawnRipple(target, props.centered ? undefined : { x: event.clientX, y: event.clientY })
    }

    const handleClick = (event: MouseEvent) => {
      callHandler(attrs.onClick, event)
      if (props.disabled || event.defaultPrevented || event.detail !== 0) return
      spawnRipple(event.currentTarget as HTMLElement)
    }

    return () =>
      h(
        StyledRipple,
        { ...attrs, asChild: props.asChild, onPointerdown: handlePointerdown, onClick: handleClick },
        slots.default,
      )
  },
})

export type RippleProps = ComponentProps<typeof StyledRipple> & RippleOptions
