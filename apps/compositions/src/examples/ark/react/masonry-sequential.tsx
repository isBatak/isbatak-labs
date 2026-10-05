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

export function MasonrySequential() {
  return (
    <Masonry.Root columns={4} sequential className={styles.root}>
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
        <div className={classes.tile} style={{ height: 110 }}>
          5
        </div>
      </Masonry.Item>
      <Masonry.Item value="6" className={styles.item}>
        <div className={classes.tile} style={{ height: 150 }}>
          6
        </div>
      </Masonry.Item>
      <Masonry.Item value="7" className={styles.item}>
        <div className={classes.tile} style={{ height: 130 }}>
          7
        </div>
      </Masonry.Item>
      <Masonry.Item value="8" className={styles.item}>
        <div className={classes.tile} style={{ height: 80 }}>
          8
        </div>
      </Masonry.Item>
      <Masonry.Item value="9" className={styles.item}>
        <div className={classes.tile} style={{ height: 50 }}>
          9
        </div>
      </Masonry.Item>
      <Masonry.Item value="10" className={styles.item}>
        <div className={classes.tile} style={{ height: 90 }}>
          10
        </div>
      </Masonry.Item>
      <Masonry.Item value="11" className={styles.item}>
        <div className={classes.tile} style={{ height: 100 }}>
          11
        </div>
      </Masonry.Item>
      <Masonry.Item value="12" className={styles.item}>
        <div className={classes.tile} style={{ height: 150 }}>
          12
        </div>
      </Masonry.Item>
      <Masonry.Item value="13" className={styles.item}>
        <div className={classes.tile} style={{ height: 30 }}>
          13
        </div>
      </Masonry.Item>
      <Masonry.Item value="14" className={styles.item}>
        <div className={classes.tile} style={{ height: 50 }}>
          14
        </div>
      </Masonry.Item>
      <Masonry.Item value="15" className={styles.item}>
        <div className={classes.tile} style={{ height: 80 }}>
          15
        </div>
      </Masonry.Item>
    </Masonry.Root>
  )
}
