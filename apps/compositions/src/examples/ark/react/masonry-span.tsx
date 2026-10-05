"use client"

import { css } from "styled-system/css"
import { masonry as masonryRecipe } from "styled-system/recipes"
import { Masonry } from "@isbatak/ark-masonry/react"

const styles = masonryRecipe()

const classes = {
  tile: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "fg.muted",
    textStyle: "sm",
  }),
}

export function MasonrySpan() {
  return (
    <Masonry.Root columns={3} className={styles.root}>
      <Masonry.Item value="1" span={2} className={styles.item}>
        <div className={classes.tile} style={{ height: 120 }}>
          1
        </div>
      </Masonry.Item>
      <Masonry.Item value="2" className={styles.item}>
        <div className={classes.tile} style={{ height: 80 }}>
          2
        </div>
      </Masonry.Item>
      <Masonry.Item value="3" className={styles.item}>
        <div className={classes.tile} style={{ height: 150 }}>
          3
        </div>
      </Masonry.Item>
      <Masonry.Item value="4" className={styles.item}>
        <div className={classes.tile} style={{ height: 60 }}>
          4
        </div>
      </Masonry.Item>
      <Masonry.Item value="5" span={2} className={styles.item}>
        <div className={classes.tile} style={{ height: 90 }}>
          5
        </div>
      </Masonry.Item>
      <Masonry.Item value="6" className={styles.item}>
        <div className={classes.tile} style={{ height: 110 }}>
          6
        </div>
      </Masonry.Item>
      <Masonry.Item value="7" className={styles.item}>
        <div className={classes.tile} style={{ height: 70 }}>
          7
        </div>
      </Masonry.Item>
      <Masonry.Item value="8" span={3} className={styles.item}>
        <div className={classes.tile} style={{ height: 130 }}>
          8
        </div>
      </Masonry.Item>
      <Masonry.Item value="9" className={styles.item}>
        <div className={classes.tile} style={{ height: 50 }}>
          9
        </div>
      </Masonry.Item>
      <Masonry.Item value="10" className={styles.item}>
        <div className={classes.tile} style={{ height: 100 }}>
          10
        </div>
      </Masonry.Item>
      <Masonry.Item value="11" span={2} className={styles.item}>
        <div className={classes.tile} style={{ height: 40 }}>
          11
        </div>
      </Masonry.Item>
    </Masonry.Root>
  )
}
