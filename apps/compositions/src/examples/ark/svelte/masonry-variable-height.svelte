<script lang="ts">
  import { css } from "styled-system/css"
  import { masonry as masonryRecipe } from "styled-system/recipes"
  import { Masonry } from "@isbatak/ark-masonry/svelte"

  const styles = masonryRecipe()

  const classes = {
    details: css({ color: "fg.muted", textStyle: "sm" }),
    summary: css({ px: "3", py: "2", color: "fg", fontWeight: "medium", cursor: "pointer" }),
    content: css({ px: "3", pb: "3" }),
  }
</script>

<Masonry.Root columns={3} class={styles.root}>
  <Masonry.Item value="1" class={styles.item}>
    <details class={classes.details} style:min-height="150px">
      <summary class={classes.summary}>Accordion 1</summary>
      <p class={classes.content}>Contents</p>
    </details>
  </Masonry.Item>
  <Masonry.Item value="2" class={styles.item}>
    <details class={classes.details} style:min-height="30px">
      <summary class={classes.summary}>Accordion 2</summary>
      <p class={classes.content}>Contents</p>
    </details>
  </Masonry.Item>
  <Masonry.Item value="3" class={styles.item}>
    <details class={classes.details} style:min-height="90px">
      <summary class={classes.summary}>Accordion 3</summary>
      <p class={classes.content}>Contents</p>
    </details>
  </Masonry.Item>
  <Masonry.Item value="4" class={styles.item}>
    <details class={classes.details} style:min-height="70px">
      <summary class={classes.summary}>Accordion 4</summary>
      <p class={classes.content}>Contents</p>
    </details>
  </Masonry.Item>
  <Masonry.Item value="5" class={styles.item}>
    <details class={classes.details} style:min-height="90px">
      <summary class={classes.summary}>Accordion 5</summary>
      <p class={classes.content}>Contents</p>
    </details>
  </Masonry.Item>
  <Masonry.Item value="6" class={styles.item}>
    <details class={classes.details} style:min-height="100px">
      <summary class={classes.summary}>Accordion 6</summary>
      <p class={classes.content}>Contents</p>
    </details>
  </Masonry.Item>
  <Masonry.Item value="7" class={styles.item}>
    <details class={classes.details} style:min-height="150px">
      <summary class={classes.summary}>Accordion 7</summary>
      <p class={classes.content}>Contents</p>
    </details>
  </Masonry.Item>
  <Masonry.Item value="8" class={styles.item}>
    <details class={classes.details} style:min-height="30px">
      <summary class={classes.summary}>Accordion 8</summary>
      <p class={classes.content}>Contents</p>
    </details>
  </Masonry.Item>
  <Masonry.Item value="9" class={styles.item}>
    <details class={classes.details} style:min-height="50px">
      <summary class={classes.summary}>Accordion 9</summary>
      <p class={classes.content}>Contents</p>
    </details>
  </Masonry.Item>
  <Masonry.Item value="10" class={styles.item}>
    <details class={classes.details} style:min-height="80px">
      <summary class={classes.summary}>Accordion 10</summary>
      <p class={classes.content}>Contents</p>
    </details>
  </Masonry.Item>
</Masonry.Root>
