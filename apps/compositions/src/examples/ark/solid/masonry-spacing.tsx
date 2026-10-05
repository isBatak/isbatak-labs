import { css, cx } from "styled-system/css"
import { masonry as masonryRecipe } from "styled-system/recipes"
import { Masonry } from "@isbatak/ark-masonry/solid"

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
    <Masonry.Root columns={3} class={cx(styles.root, classes.root)}>
      <Masonry.Item value="1" class={styles.item}>
        <div class={classes.tile} style={{ height: "150px" }}>
          1
        </div>
      </Masonry.Item>
      <Masonry.Item value="2" class={styles.item}>
        <div class={classes.tile} style={{ height: "30px" }}>
          2
        </div>
      </Masonry.Item>
      <Masonry.Item value="3" class={styles.item}>
        <div class={classes.tile} style={{ height: "90px" }}>
          3
        </div>
      </Masonry.Item>
      <Masonry.Item value="4" class={styles.item}>
        <div class={classes.tile} style={{ height: "70px" }}>
          4
        </div>
      </Masonry.Item>
      <Masonry.Item value="5" class={styles.item}>
        <div class={classes.tile} style={{ height: "90px" }}>
          5
        </div>
      </Masonry.Item>
      <Masonry.Item value="6" class={styles.item}>
        <div class={classes.tile} style={{ height: "100px" }}>
          6
        </div>
      </Masonry.Item>
      <Masonry.Item value="7" class={styles.item}>
        <div class={classes.tile} style={{ height: "150px" }}>
          7
        </div>
      </Masonry.Item>
      <Masonry.Item value="8" class={styles.item}>
        <div class={classes.tile} style={{ height: "30px" }}>
          8
        </div>
      </Masonry.Item>
      <Masonry.Item value="9" class={styles.item}>
        <div class={classes.tile} style={{ height: "50px" }}>
          9
        </div>
      </Masonry.Item>
      <Masonry.Item value="10" class={styles.item}>
        <div class={classes.tile} style={{ height: "80px" }}>
          10
        </div>
      </Masonry.Item>
    </Masonry.Root>
  )
}
