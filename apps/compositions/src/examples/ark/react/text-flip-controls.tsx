"use client"

import { css } from "styled-system/css"
import { textFlip as textFlipRecipe } from "styled-system/recipes"
import { TextFlip, useTextFlip } from "@isbatak/ark-text-flip/react"

const styles = textFlipRecipe()

const classes = {
  stack: css({ display: "grid", justifyItems: "center", gap: "6" }),
  heading: css({ textStyle: "3xl", fontWeight: "semibold", letterSpacing: "tight" }),
  actions: css({ display: "flex", gap: "2" }),
  button: css({
    px: "3",
    py: "1.5",
    borderWidth: "1px",
    borderRadius: "l2",
    textStyle: "sm",
    cursor: "button",
    _hover: { bg: "bg.muted" },
  }),
}

export function TextFlipControls() {
  const textFlip = useTextFlip()

  return (
    <div className={classes.stack}>
      <p className={classes.heading}>
        <TextFlip.RootProvider value={textFlip} className={styles.root}>
          <TextFlip.Item index={0} className={styles.item}>
            Hello
          </TextFlip.Item>
          <TextFlip.Item index={1} className={styles.item}>
            Bonjour
          </TextFlip.Item>
          <TextFlip.Item index={2} className={styles.item}>
            Hola
          </TextFlip.Item>
          <TextFlip.Item index={3} className={styles.item}>
            Ciao
          </TextFlip.Item>
          <TextFlip.Item index={4} className={styles.item}>
            Hallo
          </TextFlip.Item>
        </TextFlip.RootProvider>
      </p>
      <div className={classes.actions}>
        <button type="button" className={classes.button} onClick={() => textFlip.prev()}>
          Previous
        </button>
        <button
          type="button"
          className={classes.button}
          onClick={() => (textFlip.playing ? textFlip.pause() : textFlip.play())}
        >
          {textFlip.playing ? "Pause" : "Play"}
        </button>
        <button type="button" className={classes.button} onClick={() => textFlip.next()}>
          Next
        </button>
      </div>
    </div>
  )
}
