"use client"

import { css } from "styled-system/css"
import { textFlip as textFlipRecipe } from "styled-system/recipes"
import * as textFlip from "@isbatak/zag-text-flip"
import { normalizeProps, useMachine } from "@zag-js/react"
import { useId } from "react"

const styles = textFlipRecipe()

const classes = {
  heading: css({ textStyle: "3xl", fontWeight: "semibold", letterSpacing: "tight" }),
}

export function TextFlipBasic() {
  const service = useMachine(textFlip.machine, {
    id: useId(),
  })

  const api = textFlip.connect(service, normalizeProps)

  return (
    <p className={classes.heading}>
      Build for{" "}
      <span {...api.getRootProps()} className={styles.root}>
        <span {...api.getItemProps({ index: 0 })} className={styles.item}>
          React
        </span>
        <span {...api.getItemProps({ index: 1 })} className={styles.item}>
          Vue
        </span>
        <span {...api.getItemProps({ index: 2 })} className={styles.item}>
          Svelte
        </span>
        <span {...api.getItemProps({ index: 3 })} className={styles.item}>
          Solid
        </span>
      </span>
    </p>
  )
}
