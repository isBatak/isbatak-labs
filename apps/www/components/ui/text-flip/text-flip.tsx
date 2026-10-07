"use client"

import { Children, type ComponentProps, useEffect, useState } from "react"
import { cx } from "styled-system/css"
import { textFlip } from "styled-system/recipes"

export interface TextFlipProps extends ComponentProps<"span"> {
  interval?: number
}

const itemState = (item: number, index: number, previous: number) => {
  if (item === index) return previous < 0 ? "visible" : "entering"
  if (item === previous) return "exiting"
  return "hidden"
}

export function TextFlip({ children, interval = 2000, className, ...props }: TextFlipProps) {
  const items = Children.toArray(children)
  const count = items.length
  const [{ index, previous }, setFlip] = useState({ index: 0, previous: -1 })

  useEffect(() => {
    if (count < 2) return
    const timer = setInterval(() => {
      setFlip((flip) => ({ index: (flip.index + 1) % count, previous: flip.index }))
    }, interval)
    return () => clearInterval(timer)
  }, [count, interval])

  const classes = textFlip()

  return (
    <span className={cx(classes.root, className)} {...props}>
      {items.map((item, i) => (
        <span
          key={i}
          className={classes.item}
          data-state={itemState(i, index, previous)}
          aria-hidden={i === index ? undefined : true}
        >
          {item}
        </span>
      ))}
    </span>
  )
}
