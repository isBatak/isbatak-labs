import { css } from "styled-system/css"
import { masonry as masonryRecipe } from "styled-system/recipes"
import { Masonry } from "@isbatak/ark-masonry/solid"

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

export function MasonryBasic() {
  return (
    <Masonry.Root columns={4} class={styles.root}>
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
        <div class={classes.tile} style={{ height: "110px" }}>
          5
        </div>
      </Masonry.Item>
      <Masonry.Item value="6" class={styles.item}>
        <div class={classes.tile} style={{ height: "150px" }}>
          6
        </div>
      </Masonry.Item>
      <Masonry.Item value="7" class={styles.item}>
        <div class={classes.tile} style={{ height: "130px" }}>
          7
        </div>
      </Masonry.Item>
      <Masonry.Item value="8" class={styles.item}>
        <div class={classes.tile} style={{ height: "80px" }}>
          8
        </div>
      </Masonry.Item>
      <Masonry.Item value="9" class={styles.item}>
        <div class={classes.tile} style={{ height: "50px" }}>
          9
        </div>
      </Masonry.Item>
      <Masonry.Item value="10" class={styles.item}>
        <div class={classes.tile} style={{ height: "90px" }}>
          10
        </div>
      </Masonry.Item>
      <Masonry.Item value="11" class={styles.item}>
        <div class={classes.tile} style={{ height: "100px" }}>
          11
        </div>
      </Masonry.Item>
      <Masonry.Item value="12" class={styles.item}>
        <div class={classes.tile} style={{ height: "150px" }}>
          12
        </div>
      </Masonry.Item>
      <Masonry.Item value="13" class={styles.item}>
        <div class={classes.tile} style={{ height: "30px" }}>
          13
        </div>
      </Masonry.Item>
      <Masonry.Item value="14" class={styles.item}>
        <div class={classes.tile} style={{ height: "50px" }}>
          14
        </div>
      </Masonry.Item>
      <Masonry.Item value="15" class={styles.item}>
        <div class={classes.tile} style={{ height: "80px" }}>
          15
        </div>
      </Masonry.Item>
    </Masonry.Root>
  )
}
