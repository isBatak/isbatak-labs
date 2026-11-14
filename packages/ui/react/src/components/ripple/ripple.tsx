"use client"

import { ark } from "@ark-ui/react/factory"
import { createRecipeContext } from "@isbatak/panda-ds/jsx"
import { ripple } from "@isbatak/panda-ds/recipes"
import type { ComponentProps, MouseEvent, PointerEvent } from "react"

import { spawnRipple } from "./spawn-ripple"

const { withContext } = createRecipeContext(ripple)

const StyledRipple = withContext(ark.span)

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

export function Ripple(props: RippleProps) {
  const { centered = false, disabled = false, onPointerDown, onClick, ...rest } = props

  const handlePointerDown = (event: PointerEvent<HTMLSpanElement>) => {
    onPointerDown?.(event)
    if (disabled || event.defaultPrevented || event.button !== 0) return
    spawnRipple(event.currentTarget, centered ? undefined : { x: event.clientX, y: event.clientY })
  }

  const handleClick = (event: MouseEvent<HTMLSpanElement>) => {
    onClick?.(event)
    if (disabled || event.defaultPrevented || event.detail !== 0) return
    spawnRipple(event.currentTarget)
  }

  return <StyledRipple {...rest} onPointerDown={handlePointerDown} onClick={handleClick} />
}
