<script lang="ts">
  import { css, cx } from "styled-system/css"
  import { masonry as masonryRecipe } from "styled-system/recipes"
  import * as masonry from "@isbatak/zag-masonry"
  import { normalizeProps, useMachine } from "@zag-js/svelte"

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

  const id = $props.id()
  const service = useMachine(masonry.machine, {
    id,
    columns: 3,
  })

  const api = $derived(masonry.connect(service, normalizeProps))
</script>

<div {...api.getRootProps()} class={cx(styles.root, classes.root)}>
  <div {...api.getItemProps({ value: "1" })} class={styles.item}>
    <div class={classes.tile} style:height="150px">1</div>
  </div>
  <div {...api.getItemProps({ value: "2" })} class={styles.item}>
    <div class={classes.tile} style:height="30px">2</div>
  </div>
  <div {...api.getItemProps({ value: "3" })} class={styles.item}>
    <div class={classes.tile} style:height="90px">3</div>
  </div>
  <div {...api.getItemProps({ value: "4" })} class={styles.item}>
    <div class={classes.tile} style:height="70px">4</div>
  </div>
  <div {...api.getItemProps({ value: "5" })} class={styles.item}>
    <div class={classes.tile} style:height="90px">5</div>
  </div>
  <div {...api.getItemProps({ value: "6" })} class={styles.item}>
    <div class={classes.tile} style:height="100px">6</div>
  </div>
  <div {...api.getItemProps({ value: "7" })} class={styles.item}>
    <div class={classes.tile} style:height="150px">7</div>
  </div>
  <div {...api.getItemProps({ value: "8" })} class={styles.item}>
    <div class={classes.tile} style:height="30px">8</div>
  </div>
  <div {...api.getItemProps({ value: "9" })} class={styles.item}>
    <div class={classes.tile} style:height="50px">9</div>
  </div>
  <div {...api.getItemProps({ value: "10" })} class={styles.item}>
    <div class={classes.tile} style:height="80px">10</div>
  </div>
</div>
