import { ark, type HTMLArkProps } from "@ark-ui/solid/factory"
import { createRecipeContext } from "@isbatak/solid-ui/jsx"
import { ripple } from "@isbatak/panda-ds/recipes"
import { type Component, type ComponentProps, type JSX, mergeProps, splitProps } from "solid-js"

import { spawnRipple } from "./spawn-ripple"

const { withContext } = createRecipeContext(ripple)

const StyledRipple = withContext(ark.span as Component<HTMLArkProps<"span">>)

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

export interface RippleProps extends Omit<ComponentProps<typeof StyledRipple>, keyof RippleOptions>, RippleOptions {}

type Handler<E extends Event> = JSX.EventHandlerUnion<HTMLSpanElement, E> | undefined

function callHandler<E extends Event>(
  handler: Handler<E>,
  event: E & { currentTarget: HTMLSpanElement; target: Element },
) {
  if (typeof handler === "function") handler(event)
  else if (Array.isArray(handler)) handler[0](handler[1], event)
}

export function Ripple(props: RippleProps) {
  const merged = mergeProps({ centered: false, disabled: false }, props)
  const [local, rest] = splitProps(merged, ["centered", "disabled", "onPointerDown", "onClick"])

  const handlePointerDown = (event: PointerEvent & { currentTarget: HTMLSpanElement; target: Element }) => {
    callHandler(local.onPointerDown as Handler<PointerEvent>, event)
    if (local.disabled || event.defaultPrevented || event.button !== 0) return
    spawnRipple(event.currentTarget, local.centered ? undefined : { x: event.clientX, y: event.clientY })
  }

  const handleClick = (event: MouseEvent & { currentTarget: HTMLSpanElement; target: Element }) => {
    callHandler(local.onClick as Handler<MouseEvent>, event)
    if (local.disabled || event.defaultPrevented || event.detail !== 0) return
    spawnRipple(event.currentTarget)
  }

  return <StyledRipple {...rest} onPointerDown={handlePointerDown} onClick={handleClick} />
}
