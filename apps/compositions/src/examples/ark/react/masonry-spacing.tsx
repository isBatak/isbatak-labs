"use client"

import { css, cx } from "styled-system/css"
import { masonry as masonryRecipe } from "styled-system/recipes"
import { Masonry } from "@isbatak/ark-masonry/react"

const styles = masonryRecipe()

const classes = {
  root: css({ gap: { base: "2", sm: "4", md: "6" } }),
  tile: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "fg.muted",
    textStyle: "sm",
  }),
}

export function MasonrySpacing() {
  return (
    <Masonry.Root columns={3} className={cx(styles.root, classes.root)}>
      <Masonry.Item value="1" className={styles.item}>
        <div className={classes.tile} style={{ height: 150 }}>
          1
        </div>
      </Masonry.Item>
      <Masonry.Item value="2" className={styles.item}>
        <div className={classes.tile} style={{ height: 30 }}>
          2
        </div>
      </Masonry.Item>
      <Masonry.Item value="3" className={styles.item}>
        <div className={classes.tile} style={{ height: 90 }}>
          3
        </div>
      </Masonry.Item>
      <Masonry.Item value="4" className={styles.item}>
        <div className={classes.tile} style={{ height: 70 }}>
          4
        </div>
      </Masonry.Item>
      <Masonry.Item value="5" className={styles.item}>
        <div className={classes.tile} style={{ height: 90 }}>
          5
        </div>
      </Masonry.Item>
      <Masonry.Item value="6" className={styles.item}>
        <div className={classes.tile} style={{ height: 100 }}>
          6
        </div>
      </Masonry.Item>
      <Masonry.Item value="7" className={styles.item}>
        <div className={classes.tile} style={{ height: 150 }}>
          7
        </div>
      </Masonry.Item>
      <Masonry.Item value="8" className={styles.item}>
        <div className={classes.tile} style={{ height: 30 }}>
          8
        </div>
      </Masonry.Item>
      <Masonry.Item value="9" className={styles.item}>
        <div className={classes.tile} style={{ height: 50 }}>
          9
        </div>
      </Masonry.Item>
      <Masonry.Item value="10" className={styles.item}>
        <div className={classes.tile} style={{ height: 80 }}>
          10
        </div>
      </Masonry.Item>
    </Masonry.Root>
  )
}
