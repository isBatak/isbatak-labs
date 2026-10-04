<script lang="ts">
  import { masonry as masonryRecipe } from "@isbatak/storybook-shared/recipes"
  import { formatLayout, masonryClasses as classes, type MasonryControls } from "@isbatak/storybook-shared"
  import * as masonry from "@isbatak/zag-masonry"
  import { normalizeProps, useMachine } from "@zag-js/svelte"

  const styles = masonryRecipe()

  interface Props extends Partial<MasonryControls> {
    onLayoutChange?: (details: masonry.LayoutChangeDetails) => void
  }

  const props: Props = $props()
  const id = $props.id()
  const service = useMachine(masonry.machine, () => ({
    id,
    ...props,
  }))
  const api = $derived(masonry.connect(service, normalizeProps))
</script>

<main class={classes.story}>
  <div {...api.getRootProps()} class={styles.root}>
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
      <div class={classes.tile} style:height="110px">5</div>
    </div>
    <div {...api.getItemProps({ value: "6" })} class={styles.item}>
      <div class={classes.tile} style:height="150px">6</div>
    </div>
    <div {...api.getItemProps({ value: "7" })} class={styles.item}>
      <div class={classes.tile} style:height="130px">7</div>
    </div>
    <div {...api.getItemProps({ value: "8" })} class={styles.item}>
      <div class={classes.tile} style:height="80px">8</div>
    </div>
    <div {...api.getItemProps({ value: "9" })} class={styles.item}>
      <div class={classes.tile} style:height="50px">9</div>
    </div>
    <div {...api.getItemProps({ value: "10" })} class={styles.item}>
      <div class={classes.tile} style:height="90px">10</div>
    </div>
    <div {...api.getItemProps({ value: "11" })} class={styles.item}>
      <div class={classes.tile} style:height="100px">11</div>
    </div>
    <div {...api.getItemProps({ value: "12" })} class={styles.item}>
      <div class={classes.tile} style:height="150px">12</div>
    </div>
    <div {...api.getItemProps({ value: "13" })} class={styles.item}>
      <div class={classes.tile} style:height="30px">13</div>
    </div>
    <div {...api.getItemProps({ value: "14" })} class={styles.item}>
      <div class={classes.tile} style:height="50px">14</div>
    </div>
    <div {...api.getItemProps({ value: "15" })} class={styles.item}>
      <div class={classes.tile} style:height="80px">15</div>
    </div>
  </div>
  <output data-testid="layout">{formatLayout(api.columns)}</output>
</main>
