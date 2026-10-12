"use client"

import { css } from "styled-system/css"
import { textFlip as textFlipRecipe } from "styled-system/recipes"
import { TextFlip } from "@isbatak/ark-text-flip/react"

const styles = textFlipRecipe()

const classes = {
  heading: css({ textStyle: "3xl", fontWeight: "semibold", letterSpacing: "tight" }),
}

export function TextFlipBasic() {
  return (
    <p className={classes.heading}>
      Build for{" "}
      <TextFlip.Root className={styles.root}>
        <TextFlip.Item index={0} className={styles.item}>
          React
        </TextFlip.Item>
        <TextFlip.Item index={1} className={styles.item}>
          Vue
        </TextFlip.Item>
        <TextFlip.Item index={2} className={styles.item}>
          Svelte
        </TextFlip.Item>
        <TextFlip.Item index={3} className={styles.item}>
          Solid
        </TextFlip.Item>
      </TextFlip.Root>
    </p>
  )
}
