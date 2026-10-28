"use client"

import { css } from "styled-system/css"
import { textFlip as textFlipRecipe } from "styled-system/recipes"
import * as textFlip from "@isbatak/zag-text-flip"
import { normalizeProps, useMachine } from "@zag-js/react"
import { useId } from "react"

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
  const service = useMachine(textFlip.machine, {
    id: useId(),
  })

  const api = textFlip.connect(service, normalizeProps)

  return (
    <div className={classes.stack}>
      <p className={classes.heading}>
        <span {...api.getRootProps()} className={styles.root}>
          <span {...api.getItemProps({ index: 0 })} className={styles.item}>
            Hello
          </span>
          <span {...api.getItemProps({ index: 1 })} className={styles.item}>
            Bonjour
          </span>
          <span {...api.getItemProps({ index: 2 })} className={styles.item}>
            Hola
          </span>
          <span {...api.getItemProps({ index: 3 })} className={styles.item}>
            Ciao
          </span>
          <span {...api.getItemProps({ index: 4 })} className={styles.item}>
            Hallo
          </span>
        </span>
      </p>
      <div className={classes.actions}>
        <button type="button" className={classes.button} onClick={() => api.prev()}>
          Previous
        </button>
        <button type="button" className={classes.button} onClick={() => (api.playing ? api.pause() : api.play())}>
          {api.playing ? "Pause" : "Play"}
        </button>
        <button type="button" className={classes.button} onClick={() => api.next()}>
          Next
        </button>
      </div>
    </div>
  )
}
